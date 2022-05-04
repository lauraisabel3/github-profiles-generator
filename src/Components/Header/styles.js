import styled from "@emotion/styled";


const Container = styled.div `
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding: 0 20px;
  border-radius: 20px 20px 0 0;
  background-color: var(--background-el);
`

const ImgHeader = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

const TextHeader = styled.div`
  width: auto;
  height: auto;
  line-height: 2.4rem;
`

const Title = styled.h1`
  font-size: 2rem;
  color: var(--color-main);

`
const UserName = styled.span `
  font-size: 1.4rem;
  color: #2EC4B6;
`

const Date = styled.p`
  font-size: 1.6rem;
  color: var(--color-content);
`

export { Container, ImgHeader, TextHeader, Title, UserName, Date }
