import GlobalStyle from "../src/styles/global";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navegacao from "./components/navegacao";

const Nav = styled.div`
  width: 100%;
  height: 90px;
  background-color: #cd8c52;
  padding: 5px 0;

`;


function App() {
  return (
    <>  
      <Nav>
        <Navegacao/>
      </Nav>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
