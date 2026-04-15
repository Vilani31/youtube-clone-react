import styled from "styled-components";

export const ThumbnailContainer = styled.div`
  position: relative;
`;

export const Duration = styled.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: black;
  color: white;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 4px;
`;

export const ChannelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ChannelAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const VideoItem = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
`;

export const Thumbnail = styled.img`
  width: 360px;
  height: 200px;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const Channel = styled.p`
  margin: 5px 0;
  color: #606060;
`;

export const Description = styled.p`
  margin: 5px 0;
  color: #606060;
`;