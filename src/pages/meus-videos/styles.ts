import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
`;

export const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #3ea6ff;
  }
`;

export const Button = styled.button`
  background: #3ea6ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    background: #1d8ce0;
  }
`;

export const Message = styled.p`
  margin-top: 10px;
  color: green;
`;

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const VideoCard = styled.div`
  cursor: pointer;
`;

export const Thumbnail = styled.iframe`
  width: 100%;
  height: 180px;
  border-radius: 12px;
`;

export const VideoTitle = styled.h4`
  margin: 10px 0 5px;
  font-size: 16px;
`;

export const VideoDescription = styled.p`
  font-size: 14px;
  color: #606060;
`;