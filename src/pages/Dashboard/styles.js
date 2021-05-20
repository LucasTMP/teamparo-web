import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
  width: 100%;
`;

export const SearchContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: #3366CC;
  width: 80%;
  margin: 0 auto;
  height: 250px;
  border-radius: 25px;
  margin-top: 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-left: 10%;

    h1 {
      font-weight: bold;
      color: #fff;
      font-size: 28px;
      margin-left: 10%;
    }

    img{
      border-radius: 27px;
      float: right;
    }

    h2 {
      font-weight: 300;
      color: #fff;
      font-size: 36px;
      margin-bottom: 16px;
      margin-left: 10%;
    }
  }

`

export const SearchInput = styled.div`
  background: #fff;
  width: 500px;
  height: 60px;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 85%;

  input {
    border: 0;
  }

  button {
    border-radius: 20px;
    height: 40px;
    width: 60px;
    border: 0;
    background: #FA5477;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`

export const OngsContainer = styled.div`
  margin: 2% auto;
  width: 80%;
  

`


export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 60px;

  h1 {
    color: #1F2124;
    font-size: 32px;
    font-weight: bold;
  }

  a {
    font-size: 26px;
    color: #FA5477;
    font-weight: bold;
    text-decoration: none;
  }
`

export const OngList = styled.div`
  margin-top: 1%;
  display: grid;
  grid-template-columns: repeat(4, 10fr);
  grid-gap: 20px;
  list-style: none;
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

export const Ong = styled.div`
width: 200px;
margin: 0px 16px 0px 16px;


  img {
    border-radius: 20px;
    width: 200px;
    height: 200px;
    margin-top: 50px;
  }

  button {
    margin-top: 8px;
    padding: 12px;
    border: 0;
    border-radius: 25px;
    background: #FA5477;
    color: #fff;
    font-weight: bold;
    width: 100%;
  }

  h1{
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
  }


  p{
    text-align: justify;
  }
`


export const Footer = styled.footer`
margin-top: 64px;
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