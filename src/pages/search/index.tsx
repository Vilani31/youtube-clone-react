import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  VideoItem,
  Thumbnail,
  ThumbnailContainer,
  Duration,
  Info,
  Title,
  Channel,
  Description,
  ChannelRow,
  ChannelAvatar
} from "./styles";

function Search() {
  const [videos, setVideos] = useState<any[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const search = query.get("search");

  const getVideos = async () => {
    try {
      const API_KEY = "AIzaSyBFCTStXMziAdzfljU_MRNaGtiqrQnAck4";

      // 🔹 buscar vídeos
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&maxResults=12&key=${API_KEY}`
      );

      const data = await response.json();

      // 🔹 pegar IDs
      const videoIds = data.items
        .map((item: any) => item.id.videoId)
        .join(",");

      // 🔹 buscar duração
      const detailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${API_KEY}`
      );

      const detailsData = await detailsResponse.json();

      // 🔹 formatar duração
      const formatDuration = (duration: string) => {
        const match = duration.match(/PT(\d+M)?(\d+S)?/);

        if (!match) return "0:00";

        const minutes = match[1] ? match[1].replace("M", "") : "0";
        const seconds = match[2] ? match[2].replace("S", "") : "00";

        return `${minutes}:${seconds.padStart(2, "0")}`;
      };

      // 🔹 montar lista final
      const formatted = data.items.map((item: any, index: number) => ({
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        description: item.snippet.description,
        thumb: item.snippet.thumbnails.high.url,
        id: item.id.videoId,
        duration: formatDuration(
          detailsData.items[index]?.contentDetails?.duration || ""
        )
      }));

      setVideos(formatted);

    } catch (error) {
      console.log("Erro na busca", error);
    }
  };

  useEffect(() => {
    if (search) {
      getVideos();
    }
  }, [search]);

  return (
    <Container>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          onClick={() => navigate(`/watch/${video.id}`)}
        >
          <ThumbnailContainer>
            <Thumbnail src={video.thumb} />
            <Duration>{video.duration}</Duration>
          </ThumbnailContainer>

          <Info>
            <Title>{video.title}</Title>

            <ChannelRow>
              <ChannelAvatar>
                {video.channel?.charAt(0)}
              </ChannelAvatar>
              <Channel>{video.channel}</Channel>
            </ChannelRow>

            <Description>{video.description}</Description>
          </Info>
        </VideoItem>
      ))}
    </Container>
  );
}

export default Search;