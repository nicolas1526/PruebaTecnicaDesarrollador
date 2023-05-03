import React from 'react';
import styled from "styled-components";
import logoFacebook from '../../public/svg/facebook-white.svg'
import logoTwitter from '../../public/svg/twitter-white.svg'
import logoInstagram from '../../public/svg/instagram-white.svg'

import logoAppStore from '../../public/svg/app-store.svg'
import logoPlayStore from '../../public/svg/play-store.svg'
import logoMicrosoftStore from '../../public/svg/windows-store.svg'

const Container = styled.div`
  background-color: rgb(30,30,30);
  margin-top: auto;
  .link{
    padding-top: 2em;
    margin:2em 5em;
    ul{
      color:white;
      display: flex;
      padding:0px;
      
      list-style: none;
      li{
        :not(:last-child)::after {
          content: " | ";
        } 
        a{
          color:white;
          text-decoration: none;
          padding: 0 1em;
        }
      }
    }
    p{
      color:white;
      padding: 0 1em ;
    }
  }
`;

const ContainerImage = styled.div`
    padding-bottom: 2em;
    display: flex;
    justify-content: space-between;
    .container-logos{
      margin:2em 5em;
      button{
        padding: 0 .7em;
        background-color: transparent;
        border: none;
        img{
          width: 2em;
          height: 2em;
        }
        
      }
    }
    .container-store{
      margin:2em 5em;
      button{
        background-color: transparent;
        border: none;
        padding: 0 .3em;
        img{
          width: 11em;
          height: 3em;
        }
        
      }
    }
`;

const Footer = ()=> {
    return (
      <Container>
        <div className='link'>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Terms and Conditions</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Collection Statement</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">Manage Account</a>
            </li>
          </ul>
          <p>Copyright C 2016 DEMO Streaming. All Rights Reserved</p>
        </div>
        <ContainerImage>
          <div className='container-logos'>
            <button>
              <img src={logoFacebook} alt="facebook" />
            </button>
            <button>
              <img src={logoTwitter} alt="facebook" />
            </button>
            <button>
              <img src={logoInstagram} alt="facebook" />
            </button>
          </div>
          <div className='container-store'>
            <button>
              <img src={logoAppStore} alt="AppStore" />
            </button>
            <button>
              <img src={logoPlayStore} alt="Google Play" />
            </button>
            <button>
              <img src={logoMicrosoftStore} alt="Microsoft" />
            </button>
          </div>
        </ContainerImage>
      </Container>
    );
}

export default Footer;