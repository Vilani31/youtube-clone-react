import VideoComponent from "../../components/videoComponent";
import CategoryBar from "../../components/categorybar";
import { Container, VideosGrid } from "./styles";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const formatDuration = (duration: string) => {
  const match = duration.match(/PT(\d+M)?(\d+S)?/);

  const minutes = match?.[1]?.replace("M", "") || "0";
  const seconds = match?.[2]?.replace("S", "") || "00";

  return `${minutes}:${seconds.padStart(2, "0")}`;
};

const formatViews = (views: string) => {
  const num = Number(views);

  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + " mi";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + " mil";

  return num.toString();
};

const formatTimeAgo = (date: string) => {
  const now = new Date();
  const published = new Date(date);

  const diff = Math.floor((now.getTime() - published.getTime()) / 1000);

  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / 3600);
  const days = Math.floor(diff / 86400);

  if (minutes < 60) return `há ${minutes} minutos`;
  if (hours < 24) return `há ${hours} horas`;
  return `há ${days} dias`;
};

interface IProps {
  openMenu: boolean;
}

function Home({ openMenu }: IProps){

  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search");

  const getYoutubeVideos = async () => {
  try {
    const API_KEY = "AIzaSyBFCTStXMziAdzfljU_MRNaGtiqrQnAck4";;

    
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=BR&maxResults=20&key=${API_KEY}`
    );

    const data = await response.json();

    if (!data.items) return;

    
    const videoIds = data.items.map((item: any) => item.id).join(",");

    
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${API_KEY}`
    );

    const detailsData = await detailsResponse.json();

    const formatted = data.items.map((item: any, index: number) => ({
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        thumb: item.snippet.thumbnails.high.url,
        id: item.id, 
        views: formatViews(item.statistics.viewCount),
        time: formatTimeAgo(item.snippet.publishedAt),
        duration: formatDuration(
          detailsData.items[index]?.contentDetails?.duration || ""
        ),
      }));

    setVideos(formatted);

  } catch (error) {
    console.log("Erro ao buscar vídeos", error);
  }
};

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  return (
    <Container>

      <div style={{ position: "relative" }}>
            <CategoryBar />
        </div>

 
        {searchTerm && (
            <h2 style={{ margin: "20px" }}>
            Resultados para: {searchTerm}
            </h2>
        )}

      <VideosGrid $isMenuOpen={openMenu}>
        {videos.length === 0 && <p>Carregando vídeos...</p>}

        {videos.map((video: any) => (
          <VideoComponent key={video.id} video={video} />
        ))}
      </VideosGrid>

    </Container>
  )
}

export default Home;