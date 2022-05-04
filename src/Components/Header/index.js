import React from "react";
import { Container, ImgHeader, TextHeader, Title, UserName, Date } from "./styles";
import imageHeader  from "../../assets/image-header.png";

const Header = () => {
  return(
    <Container>
      <ImgHeader
        src={imageHeader}
      />
      <TextHeader>
        <Title>The Octocat</Title>
        <UserName>@octocar</UserName>
        <Date>Joined 26 Jan 2011</Date>
      </TextHeader>
      
    </Container>
  )
}

export default Header