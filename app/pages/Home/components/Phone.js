import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadShake from 'react-reveal/HeadShake';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
// import { FaRegComment } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  position: relative;
  margin: 40px auto;
  width: 313px;
  height: 600px;
  background-color: #7371ee;
  background-image: linear-gradient(60deg, #7371ee 1%, #a1d9d6 100%);
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919,
    0px 0px 0px 2px #111;
  transform: rotate(5.78deg);

  //   linear-gradient(60deg, #7371ee 1%, #a1d9d6 100%);
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  // home button indicator
  &:after {
    bottom: 7px;
    width: 130px;
    height: 4px;
    background-color: #f2f2f2;
    border-radius: 10px;
  }

  // frontal camera/speaker frame
  &:before {
    top: 0px;
    width: 36%;
    height: 21px;
    background-color: #1f1f1f;
    border-radius: 0px 0px 40px 40px;
  }
`;

const Speaker = styled.span`
  top: 0px;
  left: 50%;
  transform: translate(-50%, 6px);
  height: 8px;
  width: 15%;
  background-color: #101010;
  border-radius: 8px;
  box-shadow: inset 0px -3px 3px 0px rgba(256, 256, 256, 0.2);
`;

const Camera = styled.div``;

const Time = styled.span`
  display: flex;
  flex-direction: column;
  top: 60px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  width: 100%;
  font-size: 40px;
  font-weight: 600;
  padding-top: 55px;

  span {
    color: white;
    font-size: 20px;
    margin-top: 25px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 250px;

  h1 {
    font-size: 55px;
  }
`;

const Notification = styled.div`
  width: 100%;
  height: 80%;
`;

const PopUp = styled.div`
  width: 90%;
  align-items: center;
  height: 10%;
  margin: 12px;
  border: 2px solid white;
  border-radius: 10px;
  background-color: transparent;

  &:hover {
    background-color: transparent;
    color: black;
    transform: scale(1.1);
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 300;
  height: 20px;
  background-color: white;
  padding: 5px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
  opacity: 0.7;
  padding-left: 5px;

  h3 {
    font-weight: 600;
    font-size: 12px;
  }

  p {
    font-weight: 400;
    padding-bottom: 2px;
    font-size: 11px;
  }
`;

const Message = styled.div``;

const PadLock = styled.div`
  margin-top: 80px;
  margin-left: 42%;
`;
const Right = styled.span``;

const Phone = () => {
  const [locked, setLocked] = useState(false);

  function handleClick() {
    setLocked(true);
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <Pulse>
            <h1>Soon Coming to Mobile!</h1>
          </Pulse>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </Header>
      </Content>
      <Zoom>
        <Container>
          <Speaker />
          <Camera></Camera>
          <Time>
            <span>Sunday,November 6</span>
            <p>10:25pm</p>
          </Time>
          <Notification>
            <Bounce bottom>
              <PopUp onClick={handleClick}>
                <Heading>
                  <span>
                    <FontAwesomeIcon
                      icon={faComment}
                      style={{ paddingRight: '3px' }}
                    />
                    iMessage
                  </span>
                  <h3>Sun 1:20 pm</h3>
                </Heading>
                <Body>
                  <h3>Ali</h3>
                  <p>Hey! Have you seen this cool app</p>
                </Body>
              </PopUp>
              <PopUp>
                <Heading>
                  <span>
                    {' '}
                    <FontAwesomeIcon
                      icon={faComment}
                      style={{ paddingRight: '3px' }}
                    />
                    iMessage
                  </span>
                  <h3>Sun 1:22 pm</h3>
                </Heading>

                <Body>
                  <h3>Ruck</h3>
                  <p>I have created a meal in 10mins 🔥🙉</p>
                </Body>
              </PopUp>
              <PopUp>
                <Heading>
                  <span>
                    <FontAwesomeIcon
                      icon={faComment}
                      style={{ paddingRight: '3px' }}
                    />
                    iMessage
                  </span>
                  <h3>Sun 1:23 pm</h3>
                </Heading>
                <Body>
                  <h3>Jessie</h3>
                  <p>Thanks for the invite ❤️❤️❤️</p>
                </Body>
              </PopUp>
              <PopUp>
                <Heading>
                  <span>
                    {' '}
                    <FontAwesomeIcon
                      icon={faComment}
                      style={{ paddingRight: '3px' }}
                    />
                    iMessage
                  </span>
                  <h3>Sun 1:28 pm</h3>
                </Heading>
                <Body>
                  <h3>Ibrah</h3>
                  <p>I got the app, add me plizzz!!🙏🏾</p>
                </Body>
              </PopUp>
            </Bounce>
            <PadLock>
              <span>
                <FontAwesomeIcon
                  icon={faLock}
                  style={{ color: 'white', marginLeft: '17px' }}
                />
              </span>
            </PadLock>
          </Notification>
          <Right></Right>
        </Container>
      </Zoom>
    </Wrapper>
  );
};

export default Phone;

// import React from 'react';
// import NextImage from 'next/image';
// import styled from 'styled-components';

// const Container = styled.div`
//   border: 2px solid red;
//   width: 100vw;
//   height:650px;
// `;

// const Wrapper = styled.div`
//   background: url('./meals_login.jpg');
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   background-repeat: no-repeat;
//   background-size: contain;
// `;

// const Login = () => {
//   return (
//     <Container>
//       <Wrapper>{/* <p>login page</p> */}</Wrapper>
//     </Container>
//   );
// };

// export default Login;
