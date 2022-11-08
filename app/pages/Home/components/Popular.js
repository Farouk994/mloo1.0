import React from 'react';
import styled from 'styled-components';
import NextImage from 'next/image';

const Container = styled.div`
  margin-top: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 500px;
  justify-content: space-between;

  h3 {
    margin-top: 8px;
    font-weight: 600;
  }
`;

const Card = styled.div`
  padding: 15px;
  width: 300px;

  img {
    height: 40%;
    width: 350px;
    border-radius: 30px;
    object-fit: cover;

    &:hover {
      background-color: black;
      color: white;
      transform: scale(1.1);
    }
  }

  p {
    font-weight: 300;
    font-size: 15px;
  }
`;

const Benefits = styled.div`
  display: flex;

  p:nth-child(1) {
    background-color: #ededed;
    border-radius: 5px;
    padding: 2px;
    font-size: 12px;
    margin: 5px;
  }

  p:nth-child(2) {
    background-color: #ededed;
    border-radius: 5px;
    padding: 2px;
    font-size: 12px;
    margin: 5px;
  }

  p:nth-child(3) {
    background-color: #ededed;
    border-radius: 5px;
    padding: 2px;
    font-size: 12px;
    margin: 5px;
  }
`;

const Value = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-top: 5px;
  }

  button {
    background-color: limegreen;
    color: white;
    padding: 5px;
    font-size: 15px;
    border-radius: 8px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Popular = () => {
  return (
    <Container>
      <h1 style={{ fontWeight: '600', fontSize: '30px' }}>
        The most popular diets
      </h1>
      <Wrapper>
        <Card>
          <img src='/meal11.png' alt='#' />
          <h3>Slim</h3>
          <Benefits>
            <p>1000 kcal</p>
            <p>2000 kcal</p>
            <p>1500 kcal</p>
          </Benefits>
          <p style={{ height: '80px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.{' '}
          </p>
          <Value>
            <p>
              from <span>$9.99</span>/day
            </p>
            <button>Choose</button>
          </Value>
        </Card>

        <Card>
          <img src='/meal2.png' alt='#' />
          <h3>Fit</h3>
          <Benefits>
            <p>1400 kcal</p>
            <p>1300 kcal</p>
            <p>1100 kcal</p>
          </Benefits>
          <p style={{ height: '80px' }}>
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          </p>
          <Value>
            {' '}
            <p>
              from <span>$7.99</span>/day
            </p>
            <button>Choose</button>
          </Value>
        </Card>
        <Card>
          <img src='/meal5.png' alt='#' />
          <h3>Vegan</h3>
          <Benefits>
            <p>1600 kcal</p>
            <p>1500 kcal</p>
            <p>1505 kcal</p>
          </Benefits>
          <p style={{ height: '80px' }}>
            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est
          </p>
          <Value>
            {' '}
            <p>
              from <span>$8.99</span>/day
            </p>
            <button>Choose</button>
          </Value>
        </Card>
        <Card>
          <img src='/meal4.png' alt='#' />
          <h3>Keto</h3>
          <Benefits>
            <p>1820 kcal</p>
            <p>1325 kcal</p>
            <p>1780 kcal</p>
          </Benefits>
          <p style={{ height: '80px' }}>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil,
          </p>
          <Value>
            <p>
              from <span>$9.99</span>/day
            </p>
            <button>Choose</button>
          </Value>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Popular;
