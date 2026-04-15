import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px 40px;
  background-color: #f9f9f9;
`;

export const VideoSection = styled.div`
  flex: 3;
`;

export const Player = styled.iframe`
  width: 100%;
  height: 500px;
  border-radius: 12px;
  border: none;
`;

export const Title = styled.h2`
  margin-top: 16px;
  font-size: 20px;
  font-weight: 600;
`;

export const Info = styled.p`
  color: #606060;
  font-size: 14px;
  margin-top: 8px;
`;

export const Sidebar = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const VideoItem = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Thumbnail = styled.img`
  width: 180px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;

export const VideoInfo = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-weight: 500;
    margin: 0;
  }

  span {
    color: #606060;
    font-size: 12px;
  }
`;