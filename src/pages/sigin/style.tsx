import styled from 'styled-components';
import BackgroudImage from '../../assets/sigin-background.jpeg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 600px;

  form{
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1{
      margin-bottom: 24px;
    }

    input{
      background: #232129;
      border-radius: 18px;
      border: 2px solid #232129;
      padding: 16;
      width: 100%;

      & + input{
        margin-top: 8px;
      }
    }

    button{
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 8px 16px;
      color: #312e38; 
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${BackgroudImage}) no-repeat center;
  background-size: cover;
`;
