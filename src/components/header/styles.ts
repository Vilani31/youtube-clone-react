import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string}>`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin: ${({margin}) => margin? margin : 0} ;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;

    :hover {
        background-color: #e5e5e5;
        transform: scale(1.05);
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;


export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;

`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; 
`;
export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #3ea6ff;
  background: white;
  color: #3ea6ff;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #f0f8ff;
  }
`;

export const Avatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f0f0f;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background: #202020;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #3a3a3a;
  }
`;
export const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 150px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;
export const UserMenuContainer = styled.div`
  position: relative;
`;