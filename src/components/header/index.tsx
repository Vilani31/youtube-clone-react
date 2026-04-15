import { useContext,useState} from 'react';
import { 
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    LoginButton,
    Avatar,
    Dropdown,
    DropdownItem,
    UserMenuContainer

} from "./styles";

import HamburguerIcon from '../../assets/menu-hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador.png';
import VideoIcon from '../../assets/video.png';
import NotificationHome from '../../assets/home.png';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/userContext';





interface IProps {
    openMenu: boolean,
    setOpenMenu:(openMenu: boolean) => void
}


function Header({openMenu, setOpenMenu}: IProps){
    const { login, user, logOut } = useContext(UserContext);
    const navigate = useNavigate();

    const [openMenuUser, setOpenMenuUser] = useState(false);
    const [search, setSearch] = useState("");
    const initial = user?.nome?.charAt(0)?.toUpperCase();

    const handleSearch = () => {
      if (search.trim() !== "") {
        navigate(`/search?search=${search}`);
      }
    };
    

    
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() =>setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img 
                  style={{ cursor: 'pointer', width: '100px' }}
                  alt=''
                  src={Logo}
                />
            </LogoContainer>

        <SearchContainer>
            <SearchInputContainer>
                <SearchInput
                  placeholder="Pesquisar"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
            </SearchInputContainer>
            <SearchButton onClick={handleSearch}>
                <ButtonIcon alt="" src={SearchIcon} />
            </SearchButton>
            <ButtonContainer margin='0 0 0 10px'>
                <ButtonIcon alt="" src={MicIcon} />
            </ButtonContainer>
        </SearchContainer>

        <HeaderButton>
             <ButtonContainer margin='0 0 0 10px'>
                <ButtonIcon alt="" src={VideoIcon} />
            </ButtonContainer>
            <ButtonContainer margin='0 0 0 10px'>
                <ButtonIcon onClick={() => navigate('/')} alt="" src={NotificationHome} />
            </ButtonContainer>

            {login && user.nome ? (
  <UserMenuContainer>
    <Avatar onClick={() => setOpenMenuUser(!openMenuUser)}>
      {initial}
    </Avatar>

    {openMenuUser && (
      <Dropdown>
        <DropdownItem onClick={() => navigate('/meus-videos')}>
          Seus vídeos
        </DropdownItem>

        <DropdownItem
          onClick={() => {
            logOut();
            navigate('/login');
          }}
        >
          Sair
        </DropdownItem>
      </Dropdown>
    )}
  </UserMenuContainer>
) : (
  <LoginButton onClick={() => navigate('/login')}>
    Fazer login
  </LoginButton>
)}

        </HeaderButton>



        </Container>
    )
}

export default Header;