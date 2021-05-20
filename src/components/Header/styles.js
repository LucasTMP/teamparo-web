import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,400&display=swap');
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  .username{
    border-right-style: solid;
    border-width: thin;
    padding-right: 13px;
    
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 80px;
    
    nav {
      ul {
        display: flex; 
        justify-content: space-around;
        align-items: center;
       height: 80px;


        li {
          list-style: none;
          margin-left: 20px;

          .btnlogout{
            background: #FF4040;
            width: 70px;
          }

          a {        
            font-family: 'Montserrat', sans-serif;
            text-decoration: none;
            color: red;
            font-size: 14px;
            color: #383A40
          }
          button {
            padding: 12px;
            width: 120px;
            border: 0;
            border-radius: 25px;
            background: #FA5477;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
`;
