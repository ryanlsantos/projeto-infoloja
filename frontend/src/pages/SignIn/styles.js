import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  height: 100%;
  padding: 30px;
  margin: 0 auto;

  div.container {
    height: 100%;
    width: 70%;
    background: rgba(34, 34, 34, 0.8);
    border-radius: 20px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  }

  h1 {
    margin-top: 30px;
  }

  .div-seta {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: 0.2s all;
  }

  .div-seta:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;

  h1 {
    margin-bottom: 50px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  width: 80%;

  .input-email2 {
    margin-top: 30px;
  }

  label {
    margin-top: 15px;
  }
  input {
    background: transparent;
    padding: 10px 15px;
    border-bottom: 2px solid #fff;
    border-top: none;
    border-left: none;
    border-right: none;
    font-size: 16px;
    border-radius: 5px;
    transition: 0.2s all;
    /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); */
  }

  input:focus {
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  font-size: 16px;
  padding: 10px 15px;
  max-width: 300px;
  width: 100%;
  margin-top: 35px;
  height: 40px;
  border: none;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.9);
  color: #222;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.2s all;

  :hover {
    background: rgba(255, 255, 255, 0.8);
  }

  :active {
    background: rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 0.8);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export const ContainerLinks = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  max-width: 300px;

  a {
    color: #eee;
    text-decoration: none;
  }
`;
