import './App.css';
import { useState } from 'react';
import DataService from './service/dataservice'
import styled from "styled-components";
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import ContainerTitles from './components/container-movie/containermovie' 
import Modal from './components/modal/modal' 


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("titles");
  const [infoDate, setInfo] = useState({});
  const [stateModal, setStateModa] = useState(false);

  function dataMovie(info) {
    switch(info){
      case "home":
        setData([]);
        setTitle("titles");
        break
      case "series":
        setData(new DataService("series").getItems());
        setTitle("series");
        break;
      case "movie":
        setData(new DataService("movie").getItems());
        setTitle("movie");
        break;
      default:
        setInfo(info)
        setStateModa(true)
        break
    }
  }

  function showModal(){
    setStateModa(false)
  }

  return (
    <Container>
      <Modal state={stateModal} data={infoDate} showModal={showModal}></Modal>
      <Navbar title={title} onclick={dataMovie}></Navbar>
      <ContainerTitles data={data} onclick={dataMovie}></ContainerTitles>
      <Footer></Footer>
    </Container>
    
    
  );
}

export default App;
