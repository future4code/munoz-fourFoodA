import styled from 'styled-components'

export const ContainerSearch = styled.div `
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`


export const SearchInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20.5rem;
  height: 3.5rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border-radius: 2px;
  border: solid 1px var(--greyish);

  input {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`  