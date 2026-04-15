import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const getColor = (name: string) => {
  const colors = [
    "#B3E5FC", // azul claro
    "#C8E6C9", // verde claro
    "#FFE0B2", // laranja claro
    "#F8BBD0", // rosa claro
    "#D1C4E9", // roxo claro
    "#FFF9C4", // amarelo 
  ];

  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

function VideoComponent({ video }: any){
    const navigate = useNavigate();
    return (
        <Container onClick={() => navigate(`/watch/${video.id}`)}>
            <div style={{ position: "relative" }}>
                <ImageBanner src={video.thumb} />
                        <span
                            style={{
                            position: "absolute",
                            bottom: "8px",
                            right: "8px",
                            background: "rgba(0,0,0,0.8)",
                            color: "#fff",
                            padding: "2px 6px",
                            fontSize: "12px",
                            borderRadius: "4px"
                            }}
                        >
                            {video.duration}
                        </span>
                        </div>
            <TitleContainer>
                <ChannelImage style={{ backgroundColor: getColor(video.channel), color: "#333" }}>
                    {video.channel?.charAt(0)}
                    </ChannelImage>

                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} visualizações • {video.time}
                    </TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;
