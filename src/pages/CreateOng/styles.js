import styled from 'styled-components';
import { darken } from 'polished';

export const Section = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 640px;
  height: 600px;
  padding: 12px;
  
  form {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    width: 100%;

    h2{
      margin-top: 50px;
      padding-bottom: 5px;
      color: #484848;
    }
  
    hr
    {
      width: 680px;
      margin-bottom: 20px;
    }

    .basic-multi-select{
      width: 100%;
      height: auto;
      margin-right: -8px;
    }

    .select__control{
      width: 100%;
      height: auto;
    }

    .photo{
      margin-bottom: 30px;
    }

    .photo::-webkit-file-upload-button {
      visibility: hidden;
    }
    .photo::before {
      content: 'Enviar imagem';
      display: inline-block;
      background: linear-gradient(top, #f9f9f9, #e3e3e3);
      border: 1px solid #999;
      border-radius: 3px;
      padding: 5px 8px;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 8pt;
    }
    .photo:hover::before {
      border-color: black;
    }
    .photo:active::before {
      background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
    }


    textarea {
      width: 100%;
    height: 150px;
    padding: 12px;
    margin-bottom: 8px;
    font-weight: bold;
    border: 0;
    border-radius: 2px;
    border: 1px solid ${(props) => (props.error ? '#e74c3c' : '#eee')};
  margin: 0 8px 8px 8px;

    color: #576574;

  &:focus {
    border: 2px solid #FA5477;
  }
    }

    h1 {
      margin-bottom: 5px;
    }

    select {
  margin: 0 8px 8px 8px;

      background: none;
      width: 49%;
      height: 50px;
      padding: 12px;
      font-weight: bold;
      border: 0;
      border-radius: 2px;
      border: 1px solid ${(props) => (props.error ? '#e74c3c' : '#eee')};
      color: #576574;
      }

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: row;


      input {
        width: 49%;
      }
 
    }

    input + input {
      margin-right: -8px;
    }

  

    button {
      margin-top: 16px;
      height: 50px;
      border: 0;
      color: #fff;
      font-weight: bold;
      background: #FA5477;
      border-radius: 25px;
      font-size: 14px;
      transition: all 0.3s ease-in-out;

      &:hover {
        opacity: 0.5;
      }
    }

    a {
      cursor: pointer;
      border-radius: 25px;
      margin-top: 8px;
      text-align: center;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #eee;
      text-decoration: none;
      color: #576574;
      font-weight: bold;

      &:hover {
        border: 2px solid #FA5477;
        color: #FA5477;
      }
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  margin-bottom: 8px;
  margin: 0 8px 8px 8px;
  font-weight: bold;
  border: 0;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.error ? '#e74c3c' : '#eee')};
  color: #576574;


  &:focus {
    border: 2px solid #FA5477;
  }
`;

export const Footer = styled.footer`
margin-top: 880px;
  background: #3366CC;
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 95%;
    height: 200px;
    display: flex;

    ul{
      li{
        list-style: none;
         color: #fff;
         font-size: 18px;
      }
    }

    img {
      width: 200px;
      height: 30px;
      margin-bottom: 10px;
      margin-top: 5px;
    }

    .face{
      transition: 0.6s;
      border-radius: 15px;
    }

    .insta{
      transition: 0.6s;
      border-radius: 15px;
    }

    .email{
      transition: 0.6s;
      border-radius: 15px;
    }

    .whats{
      transition: 0.6s;
      border-radius: 15px;
    }

    li + li{
      margin-top: 20px;
    }

    div:nth-child(-n+3){
      margin-right: 60px;
    }
    // div:nth-child(-n+1){
    //   margin-right: 120px;
    // }
    
    .liemail{
      font-size: 20px;
      display: inline-flex;
      height: 24px;  
    }

    .liemail:hover{

      .email{
        fill: rgb(238, 238, 238);
        background-color: rgb(178, 49, 33);
        border-radius: 15px;
      }
    }

    .liface:hover{

      .face{
        fill: rgb(59,89,152);
        background-color: #fff;
        border-radius: 15px;
      }
    }

    .liinsta:hover{

      .insta{
        fill: rgb(247,119,55);
      }
    }

    .liwhats:hover{

      .whats{
        fill: rgb(255, 255, 255);
        background-color: rgb(37, 211, 102);
        border-radius: 15px;
      }
    }

    
     .liongs:hover{
      transition: 1s;
      filter:contrast(200%);
       
      }
      
      .liprofile:hover{
        transition: 1s;
        filter:contrast(200%);
      
      }

      .lidash:hover{
        transition: 1s;
        filter:contrast(200%);
      
      }

    div {
      width: 25%;
      h1 {
        color: #fff;
        margin-bottom: 15px;
        font-size: 32px;
      }
      ul {
        li {
            list-style: none;
            display: flex;
           
          a {
            display: flex;
            align-items: center;
            justify-items: center;
            color: #eee;
            font-size: 20px;
            text-decoration: none;  
          }
          svg{
              margin-right: 13px;
          }
          path{
            margin-left: 5px;
          }
        }
      }
    }
    .linha-vertical {
      border-left: 2px solid;
      box-sizing: border-box;
      width: 2px;
      height: 32px;
      margin-left: 1% !important;
      margin-right: 1% !important;
      border-color: grey;
      border-radius: 20px;
      border-width: 2px;
    }

    .linha-vertical2 {
      border-left: 2px solid;
      box-sizing: border-box;
      width: 2px;
      height: 32px;
      margin-right: 1% !important;
      border-color: grey;
      border-radius: 20px;
      border-width: 2px;
    }

    .linha-vertical2{
      margin-left: 5%;
    }
  }
`

export const Direitos = styled.div`
margin-top: 0px;
background: #3366CC;
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
border-top-style: outset;
border-width: 1px;


.divdireitos{
  width: 100%;
}

p{
  font-size: 12px;
  color: #fff;
  width: 100%;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

`
