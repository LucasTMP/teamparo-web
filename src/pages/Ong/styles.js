import styled from 'styled-components'

export const Container = styled.div``

export const OngsContainer = styled.div`
  margin: 2% auto;
  width: 80%;


  a {
    display: flex;
    align-items: center;
    justify-items: center;
    color: black;
    font-size: 20px;
    text-decoration: none;  
  }

  section {
    margin: 0 auto;
    width: 1200px;

    section {
      margin-top: 18px;
      h1 {
        font-size: 32px;
        display: flex;
        flex-direction: row;
      }
    }

      span {
        margin-left: 8px;
        margin-top: 8px;
        padding: 8px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 30px;
        border: 0;
        border-radius: 25px;
        background: #FA5477;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        font-family:Courier New;
      }

    header {
      display: flex;

      img {
        width: 200px;
        height: 200px;
        margin-right: 18px;
        border-radius: 25px;
      }

      h1 {
        font-size: 36px;
      }

      p {
        display: flex;
        font-size: 18px;
        margin-bottom: 6px;
      }
      button {
        margin-top: 14px;
        padding: 12px;
        border: 0;
        border-radius: 25px;
        background: #FA5477;
        color: #fff;
        font-weight: bold;
      }

      .linkbtn{
        margin-top: 14px;
        padding: 12px;
        border: 0;
        border-radius: 25px;
        background: #FA5477;
        color: #fff;
        font-weight: bold;
        margin-left: 20px;
        text-decoration: none;
        font-size: 14px;
      }

      button + button{
        margin-left: 20px;
      }
    }
  }

`

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  
`;

export const Footer = styled.footer`
margin-top: 20%;
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