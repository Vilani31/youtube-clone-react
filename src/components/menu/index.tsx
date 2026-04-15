import { Container, MenuItem, ButtonIcon, SectionTitle} from "./styles";
import NotificationShorts from '../../assets/shorts.png';
import NotificationHome from '../../assets/home.png';
import NotificationHistory from '../../assets/history.png';
import NotificationInscricao from '../../assets/inscricao.png';
import NotificationBiblioteca from '../../assets/library.png';
import NotificationSeusvideos from '../../assets/seusvideos.png';
import NotificationMaisTarde from '../../assets/maistarde.png';
import NotificationGostei from '../../assets/gostei.png';
import NotificationPlaylist from '../../assets/playlist.png';
import NotificationFire from '../../assets/fire.png';
import NotificationPodcasts from '../../assets/podcasts.png';
import NotificationShopping from '../../assets/shopping.png';
import NotificationMusica from '../../assets/musical.png';
import NotificationEsportes from '../../assets/esportes.png';
import NotificationAovivo from '../../assets/aovivo.png';
import NotificationFilmes from '../../assets/filmes.png';
import NotificationJogos from '../../assets/jogos.png';
import NotificationNoticias from '../../assets/noticias.png';


import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const mainItems = [
  {name: 'Início', link: '/', icon: NotificationHome},
  {name: 'Shorts', link: '/shorts', icon: NotificationShorts},
  {name: 'Inscrição', link: '/inscricao', icon: NotificationInscricao},
  {name: 'Histórico', link: '/history', icon: NotificationHistory}
]

const extraItems = [
  {name: 'Biblioteca', link: '/biblioteca', icon: NotificationBiblioteca},
  {name: 'Seus vídeos', link: '/seus-videos', icon: NotificationSeusvideos},
  {name: 'Assistir mais tarde', link: '/assistir-mais-tarde', icon: NotificationMaisTarde},
  {name: 'Videos com "Gostei"', link: '/gostei', icon: NotificationGostei},
  {name: 'PlayLists', link: '/playlist', icon: NotificationPlaylist}
]

const extraItemsdois = [
  {name: 'Em alta', link: '/em-alta', icon: NotificationFire},
  {name: 'Shopping', link: '/shopping', icon: NotificationShopping},
  {name: 'Música', link: '/musica', icon: NotificationMusica},
  {name: 'Esportes', link: '/esportes', icon: NotificationEsportes},
  {name: 'Ao-vivo', link: '/aovivo', icon: NotificationAovivo},
  {name: 'Filmes', link: '/filmes', icon: NotificationFilmes},
  {name: 'Jogos', link: '/jogos', icon: NotificationJogos},
  {name: 'Noticias', link: '/noticias', icon: NotificationNoticias},
  {name: 'Podcasts', link: '/podcasts', icon: NotificationPodcasts}
]


interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps){
  

  const { login } = useContext(UserContext);
  const navigate = useNavigate();
    

    

   return (
  <Container openMenu={openMenu}>
    
    {mainItems.map((item) => (
      <MenuItem
        key={item.name}
        openMenu={openMenu}
        onClick={() => navigate(item.link)}
      >
        <ButtonIcon alt="" src={item.icon} />
        <span>{item.name}</span>
      </MenuItem>
    ))}

    {openMenu && (
      <>
        <hr style={{ border: '1px solid #e5e5e5', width: '100%', margin: '10px 0' }} />

        <SectionTitle>Você</SectionTitle>

        {extraItems.map((item) => (
          <MenuItem 
            key={item.name}
            openMenu={openMenu}
            onClick={() => navigate(item.link)}
          >
            <ButtonIcon alt="" src={item.icon} />
            <span>{item.name}</span>
          </MenuItem>
        ))}
      </>
    )}

     {openMenu && (
      <>
        <hr style={{ border: '1px solid #e5e5e5', width: '100%', margin: '10px 0' }} />

        <SectionTitle>Explorar</SectionTitle>

        {extraItemsdois.map((item) => (
          <MenuItem 
            key={item.name}
            openMenu={openMenu}
            onClick={() => navigate(item.link)}
          >
            <ButtonIcon alt="" src={item.icon} />
            <span>{item.name}</span>
          </MenuItem>
        ))}
      </>
    )}

  </Container>
)
}

export default Menu;