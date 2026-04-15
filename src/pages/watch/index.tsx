import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Container,
  VideoSection,
  Player,
  Title,
  Info,
  Sidebar,
  VideoItem,
  Thumbnail,
  VideoInfo,
} from "./styles";

import { useNavigate } from "react-router-dom";



function Watch() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [video, setVideo] = useState<any>(null);
  const [related, setRelated] = useState([]);
  

  const API_KEY = "AIzaSyBFCTStXMziAdzfljU_MRNaGtiqrQnAck4";
  console.log("API:", API_KEY);

  const getVideo = async () => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${API_KEY}`
    );

    const data = await res.json();

    console.log("VIDEO DATA:", data); 

    if (data.items && data.items.length > 0) {
      setVideo(data.items[0]); 
    }

  } catch (error) {
    console.log("Erro ao buscar vídeo", error);
  }
};

  const getRelated = async () => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=10&key=${API_KEY}`
    );
    const data = await res.json();
    setRelated(data.items || []);
  };

 useEffect(() => {
  if (id) {
    getVideo();
    getRelated();
  }
}, [id]);

 if (!video) {
  return <p style={{ padding: "20px" }}>Carregando vídeo...</p>;
}

  return (
  <Container>

    <VideoSection>
      <Player
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen
      />

       <Title>{video?.snippet?.title}</Title>

        <Info>
          {video?.snippet?.channelTitle} •{" "}
          {Number(video?.statistics?.viewCount || 0).toLocaleString()} visualizações
        </Info>

    </VideoSection>

    <Sidebar>
      {related?.map((item: any) => (
        <VideoItem
          key={item.id.videoId}
          onClick={() => navigate(`/watch/${item.id.videoId}`)}
        >
          <Thumbnail src={item.snippet.thumbnails.medium.url} />
          <VideoInfo>
            <p>{item.snippet.title}</p>
            <span>{item.snippet.channelTitle}</span>
          </VideoInfo>
        </VideoItem>
      ))}
    </Sidebar>

  </Container>
);
}

export default Watch;