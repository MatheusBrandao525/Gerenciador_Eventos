import GlobalStyle from "../../src/styles/global";
import styled from "styled-components";
import React from 'react';
import "../images/R.png"


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.div`
  width: 100%;
  display: flex;
  padding-top: 1.5rem;
  justify-content: space-evenly;

`;

const Li = styled.div`
    list-style: none;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none !important;
`;

const Link = styled.a`
    list-style: none;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    color: #3d0604;
    :hover{
      color: #dadada;
    }
`;


const Logo = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
`;

const IMG = styled.img`
  width: 80px;
  cursor: pointer;
`;


const Navegacao = () => {
  return (
    <>
    <Container>
      <Logo><IMG src="https://i.pinimg.com/originals/d0/0d/6b/d00d6ba4e98acb51abe40437532a5609.png"></IMG></Logo>
        <Ul >
            <Li><Link href="../App.js">Home</Link></Li>
            <Li><Link href="../pages/eventos.js">Eventos</Link></Li>
            <Li><Link href="../pages/inscricao.js">Inscrições</Link></Li>
            <Li><Link href="../pages/lembrancas.js">Lembranças</Link></Li>
            <Li><Link href="../pages/sobre.js">Sobre</Link></Li>
            <Li><Link href="../pages/entrar.js">Entrar</Link></Li>
        </Ul>
    </Container>

    </>
  )
}

export default Navegacao;