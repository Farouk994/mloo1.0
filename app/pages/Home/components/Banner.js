import React from 'react';
import styled from 'styled-components';
import NextImage from 'next/image';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 50px;

    // span:nth-child(1) {
    //   background-color: orange;
    //   padding: 2px 22px;
    //   border-radius: 20px;
    // }

    // span:nth-child(2) {
    //   background-color:green;
    // }
  }
`;

const Right = styled.div``;

const Left = styled.div``;

const Banner = () => {
  return (
    <Wrapper>
      <Fade left>
        <NextImage src='/left.png' height={660} width={320} />
      </Fade>
      <Header>
        <h1>
          Premium Quality <br />
          catering diets{' '}
          <span
            style={{
              backgroundColor: 'orange',
              padding: '2px 22px',
              borderRadius: '20px',
            }}
          >
            🍎
          </span>{' '}
          for <br />
          <span
            style={{
              backgroundColor: '#32CD32',
              padding: '2px 22px',
              borderRadius: '20px',
            }}
          >
            🥑
          </span>{' '}
          exacting
        </h1>
      </Header>
      <Fade right>
        <NextImage src='/right.png' height={660} width={320} />
      </Fade>
    </Wrapper>
  );
};

export default Banner;
