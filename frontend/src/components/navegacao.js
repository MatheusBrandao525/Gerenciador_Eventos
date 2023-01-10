import GlobalStyle from "../../src/styles/global";
import styled from "styled-components";
import React from 'react'


const Ul = styled.div`
  width: 100%;
  display: flex;
  padding-top: 1.5rem;
  justify-content: space-evenly;

`;

const Li = styled.div`
    list-decoration: none;
    font-weight: bold;
    font-size: 1rem;
`;


const Navegacao = () => {
  return (
    <>
        <Ul >
            <Li>Home</Li>
            <Li>Eventos</Li>
            <Li>Inscrições</Li>
            <Li>Lembranças</Li>
            <Li>Sobre</Li>
            <Li>Entrar</Li>
        </Ul>
    </>
  )
}

export default Navegacao;