import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
`;

export const VideosGrid = styled.div<{ $isMenuOpen: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "repeat(4, 1fr)" : "repeat(5, 1fr)"};
  gap: 16px;
`;