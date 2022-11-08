import React from 'react';
import Banner from './components/Banner';
import { Container } from '@chakra-ui/react';
import styled from 'styled-components';
import Socials from './components/Socials';
import Popular from './components/Popular';
import Phone from './components/Phone';

const Below = styled.div`
  margin: 0px 150px;
`;

const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <Container> */}
      <Below>
        <Socials />
        <Popular />
        <Phone/>
      </Below>
      {/* </Container> */}
    </div>
  );
};

export default HomePage;
