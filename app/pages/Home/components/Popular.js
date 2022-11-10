import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NextImage from "next/image";
import { DietGuru } from "../../../components/data/data";
// console.log(DietGuru);
import { Button, Stack } from "@chakra-ui/react";

// setup data file
// export it then use it inside component
// set it in state

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
//below we set the state for the data.js data to be displayed by using react hooks{useState,useEffect}
const Popular = () => {
  const [diet, setDiet] = useState([]);

  useEffect(() => {
    setDiet(DietGuru);

    console.log("", diet);
  }, []);
  //by returning we mapo all the data inside data.js by using one parenthesis that calls for all the data one by one.
  return (
    <Container>
      <h1 style={{ fontWeight: "600", fontSize: "30px" }}>
        The most popular diets
      </h1>
      <Wrapper>
        {diet.map((x) => {
          return (
            <Card key={x.id}>
              <img src={x.image} alt="#" />
              <h3>{x.nameDiet}</h3>
              <Benefits>
                <p>1000 kcal</p>
                <p>2000 kcal</p>
                <p>1500 kcal</p>
              </Benefits>
              <p style={{ height: "80px" }}>{x.description} </p>
              <br></br>
              <Value>
                <p>
                  from <span>${x.price}</span>/day
                </p>
            
            {/* //buton was fetched from imported library (chakra) */}
                <Stack direction="row" spacing={2}>
                  <button>Choose</button>
                  <Button colorScheme="teal" variant="solid">
                    Email
                  </Button>
                </Stack>
              </Value>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Popular;
