import { useState, useContext, useEffect } from "react";
import api from "../../api";
import { UserContext } from "../../context/userContext";
import {
  Container,
  Card,
  Title,
  Input,
  Button,
  Message,
  VideosGrid,
  VideoCard,
  Thumbnail,
  VideoTitle,
  VideoDescription
} from "./styles";


function MeusVideos() {
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [videos, setVideos] = useState([]);
  const [url, setUrl] = useState("");

 const convertToEmbed = (link: string) => {
  if (link.includes("watch?v=")) {
    const videoId = link.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (link.includes("youtu.be/")) {
    const videoId = link.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return link;
};

 
  const getVideos = async () => {
  try {
    const { data } = await api.get(`/videos/get-video?user_id=${user.id}`);
    
    console.log("VIDEOS DO BACK:", data.videos); // 👈 AQUI
    
    setVideos(data.videos);
  } catch (error) {
    console.log("Erro ao buscar vídeos");
  }
};
  
  const handleCreateVideo = async () => {
  try {
    const token = localStorage.getItem('token');

    await api.post(
      "/videos/create-video",
      {
        title,
        description,
        url: convertToEmbed(url),
        user_id: user.id
      },
      {
        headers: {
          Authorization: token
        }
      }
    );

    setMessage("Vídeo cadastrado com sucesso!");
    setTitle("");
    setDescription("");
    setUrl("");

    getVideos(); 

  } catch (error: any) {
    console.log("ERRO:", error.response);
    setMessage("Erro ao cadastrar vídeo");
  }
};

  
  useEffect(() => {
  if (user?.id) {
    getVideos();
  }
}, [user]);

  return (
  <Container>

    <Card>
      <Title>Cadastrar vídeo</Title>

      <Input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Input
        placeholder="Link do vídeo"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <Button onClick={handleCreateVideo}>
        Cadastrar
      </Button>

      {message && <Message>{message}</Message>}
    </Card>

    <Title>Meus vídeos</Title>

    {videos.length === 0 && <p>Nenhum vídeo encontrado</p>}

    <VideosGrid>
      {videos.map((video: any) => (
        <VideoCard key={video.video_id}>
          <Thumbnail
            src={video.url}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          />

          <VideoTitle>{video.title}</VideoTitle>
          <VideoDescription>{video.description}</VideoDescription>
        </VideoCard>
      ))}
    </VideosGrid>

  </Container>
);
}

export default MeusVideos;