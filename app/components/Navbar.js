import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@chakra-ui/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchDrawer from './Forms/SearchForm';

const Wrapper = styled.div`
  padding: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // position: fixed;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 60px;
  padding-left: 25px;
`;
const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 14px;

  li {
    margin: 12px;
    padding-top: 10px;
    font-weight: 400;
    font-size: 18px;
  }
`;
const NavLogin = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;
  justify-content: space-between;
`;

const Icon = styled.div`
  padding-right: 20px;

  &:hover {
    background-color: transparent;
    color: black;
    transform: scale(1.3);
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <Link href='/'>
            <h1>mloo</h1>
          </Link>
        </Title>
        <NavLinks>
          <li>Home</li>
          <li>Calorie Calculator</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Blog</li>
        </NavLinks>
        <NavLogin>
          <Icon>
            {/* <FontAwesomeIcon icon={faSearch} /> */}
            <SearchDrawer />
            {/* <IconButton aria-label='Search database' icon={<faSearch />} /> */}
          </Icon>
          <Link href='/signup_page'>
            {/* <Button>Sign Up</Button> */}
            <Button
              colorScheme=''
              color='white'
              variant='solid'
              background='black'
            >
              Register
            </Button>
          </Link>
        </NavLogin>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
