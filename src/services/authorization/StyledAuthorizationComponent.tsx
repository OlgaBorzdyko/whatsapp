import styled from 'styled-components'

export const AuthorizationComponentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  backdrop-filter: blur(2px);
  font-family: Roboto;
`

export const FormWrapper = styled.form`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-column: 3 / 6;
  grid-row: 3 / 5;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    '. . text text text .'
    '. . id id id .'
    '. . token token token .'
    '. . phone phone phone .'
    '. . submit submit submit .'
    '. . reg reg reg reg';
  gap: 10px;
  width: 100%;
  align-items: center;
`

export const FillTheFields = styled.h3`
  font-size: 20px;
  grid-area: text;
  text-align: center;
`

export const StyledSubmitButton = styled.button`
  grid-area: submit;
  font-size: 16px;
  height: 40px;
  background-color: rgb(76, 174, 79);
  border: 0;
  color: white;
  justify-items: center;
  border-radius: 5px;
  &:hover {
    background-color: rgb(27, 135, 85);
  }
`
export const StyledTitle = styled.h1`
  font-size: 40px;
  color: rgb(76, 174, 79);
  grid-column: 3 / 6;
`
