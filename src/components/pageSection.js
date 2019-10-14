import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: green;
  /* margin-bottom: 3em; */

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`

const PageSection = ({ children }) => <Container>{children}</Container>

export default PageSection