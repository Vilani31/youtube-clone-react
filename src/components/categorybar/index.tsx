import { Container, Content, ScrollArea, Button, Arrow } from "./styles";
import { useRef } from "react";

const categories = [
  "Tudo","Ao vivo","Games","Música","Programação","React",
  "JavaScript","Node","CSS","HTML","Filmes","Séries","Esportes",
  "JavaScript","Node", "JavaScript","Node", "Node", "Node","JavaScript","Node", "JavaScript","Node", "Node", "Node"
];

function CategoryBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Content>
        <Arrow onClick={() => scroll("left")}>◀</Arrow>

        <ScrollArea ref={scrollRef}>
          {categories.map((item, index) => (
            <Button key={index}>{item}</Button>
          ))}
        </ScrollArea>

        <Arrow onClick={() => scroll("right")}>▶</Arrow>
      </Content>
    </Container>
  );
}

export default CategoryBar;