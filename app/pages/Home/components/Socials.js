import React from 'react';
import { Container } from '@chakra-ui/react';
import styled from 'styled-components';
import LightSpeed from 'react-reveal/LightSpeed';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   margin: 0px 150px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: 600;
    font-size: 25px;
  }

  p {
    font-size: 13px;
  }
`;

const Row1 = styled.div``;

const Row2 = styled.div``;

const Reviews = styled.div`
  display: flex;
  max-width: 600px;
  margin-top: 15px;
  flex-grow: 1;

  p {
    font-weight: 300;
    font-size: 15px;
    padding: 0.5rem;
  }
`;

const Box1 = styled.div`
  background-color: #ededed;
  width: 300px;
  height: 150px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin: 10px;
  padding: 0.5rem;

  h4 {
    font-size: 15px;
    font-weight: 500;
    padding: 2px;
  }

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.1);
  }
`;

const Box2 = styled.div`
  background-color: #ededed;
  width: 300px;
  height: 150px;
  border: 1px solid lightgrey;
  margin: 10px;
  border-radius: 10px;
  padding: 0.5rem;

  h4 {
    font-size: 15px;
    font-weight: 500;
    padding: 2px;
  }

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.1);
  }
`;

const Box3 = styled.div`
  background-color: #ededed;
  width: 300px;
  height: 150px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin: 10px;
  padding: 0.5rem;

  h4 {
    font-size: 15px;
    font-weight: 500;
    padding: 2px;
  }

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.1);
  }
`;

const Box4 = styled.div`
  background-color: #ededed;
  width: 300px;
  height: 150px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin: 10px;
  padding: 0.5rem;

  h4 {
    font-size: 15px;
    font-weight: 500;
    padding: 2px;
  }

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.1);
  }
`;

const Socials = () => {
  return (
    <div>
      <Wrapper>
        <Content>
          <h3>
            We cook - they enjoy every
            <br />
            minute of their *icon* lives
          </h3>
          <br />
          <br />
          <p>
            We don't accept half-measures and shortcuts, because what we care
            <br />
            about is the WOW effect. And all the luck that our efforts are not
            in <br />
            vain. We know this because we closely follow the opinions of our{' '}
            <br />
            consumers
          </p>
        </Content>
        <Reviews>
          <LightSpeed right>
            <Row1>
              ⭐⭐⭐⭐⭐
              <Box1>
                <h4>Guy Hawkins ⸺</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </Box1>
              ⭐⭐⭐⭐⭐
              <Box2>
                <h4>Esther Howard ⸺</h4>
                <p>
                  adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut
                </p>
              </Box2>
            </Row1>
            <Row2>
              ⭐⭐⭐⭐⭐
              <Box3>
                <h4>Amina ⸺</h4>
                <p>
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est
                </p>
              </Box3>
              ⭐⭐⭐⭐⭐
              <Box4>
                <h4>Musa ⸺</h4>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil,
                </p>
              </Box4>
            </Row2>
          </LightSpeed>
        </Reviews>
      </Wrapper>
    </div>
  );
};

export default Socials;
