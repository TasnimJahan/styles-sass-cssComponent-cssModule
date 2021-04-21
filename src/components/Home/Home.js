import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  border: 1px solid red;
  font-size:50px;
  color:lightblue;
  `;
const Div = styled.div`
  border: 3px solid blue;
  margin:5%;
  color:purple;
  `;
const Home = () => {
    return (
        <div className="firstBox">
            <Title>I am Home</Title>
            <Div>
                <h2>I am Tasnim</h2>
            </Div>
            <Div>
                <h2>I am Tasnim</h2>
            </Div>
            <Div>
                <h2>I am Tasnim</h2>
            </Div>
        </div>
    );
};

export default Home;