import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

`;

export const Container = styled.div`
  /* border: solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  text-align: center;
`;

export const Task = styled.div`
  /* border: solid; */
  width: 40vw;
  max-width: 350px;
  display: flex;
  justify-content: space-between;

  input {
    width: 88%;
  }
  button {
    width: 10%;
    background-color: #5ea6ca;
    border: none;
    color: white;
    border-radius: 1px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  /* border: solid; */
  position: absolute;
  width: 40vw;
  max-width: 350px;

  li {
    display: flex;
    justify-content: space-between;
    margin: 5px;
  }

  button {
    background-color: white;
    border: transparent;
    cursor: pointer;
    margin-top: 4px;
    &:hover {
      color: #ff00008d;
    }
  }
`;
