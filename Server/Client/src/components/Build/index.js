import React from 'react'
import { Container, FormWrap, Icon, BuildH1} from './BuildElements'

const Home = () => {
  return (
    <>
     <Container>
        <FormWrap>
         <Icon to="/home"> TureON</Icon>
         <BuildH1>BUILD PROJECTS</BuildH1>
        </FormWrap>
     </Container>
    </>
  )
}


export default Home