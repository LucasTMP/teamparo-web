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
  width: 400px;
  height: 600px;
  padding: 12px;

  form {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
      color: #e74c3c;
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 8px;
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
  font-weight: bold;
  border: 0;
  border-radius: 2px;
  border: 1px solid ${(props) => (props.error ? '#e74c3c' : '#eee')};
  color: #576574;

  &:focus {
    border: 2px solid #FA5477;
  }
`;
