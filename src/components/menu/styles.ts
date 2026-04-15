import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '280px' : '100px' };
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
    z-index: 20;
    flex-shrink: 0;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 98%;
    min-height: ${({ openMenu }) => openMenu? '45px' : '70px' };
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column' };
    align-items: center;
    justify-content:${({ openMenu }) => openMenu? 'none' : 'center' };

    span{
    font-weight:${({ openMenu }) => openMenu? '600' : '400' } ;
    margin-left: ${({ openMenu }) => openMenu? '20px' : 'none' };
    font-size: ${({ openMenu }) => openMenu? '16px' : '12px' };
    }


    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
`;

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid #e5e5e5;
  margin: 10px 0;
`;

export const SectionTitle = styled.span`
  width: 100%;
  padding: 5px 15px;
  padding-left: 55px;
  font-weight: 600;
  font-size: 20px;
  color: #0e0e0e;
`;