import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 55px;
  z-index: 5;
  background-color: white;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  width: 100%;
  overflow: hidden;
`;

export const ScrollArea = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  flex: 1;
  min-width: 0;
  max-width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: #898989;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #2f2f2f;
  }
`;

export const Arrow = styled.button`
  flex-shrink: 0;
  background: transparent;
  border: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
`;