import GlobalStyle from "../src/styles/global";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nav = styled.div`
  width: 100%;
  height: 120px;
  background-color: #cd8c52;

`;


function App() {
  return (
    <>  
      <Nav>
      </Nav>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
