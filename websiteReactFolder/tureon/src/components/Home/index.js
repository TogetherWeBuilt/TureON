import React from 'react'
import { Container, FormWrap, Icon, HomeH1} from './HomeElements'


const Home = () => {
  return (
    <>
     <Container>
        <FormWrap>
        <HomeH1>Welcome to TureON</HomeH1>
         <Icon to="/profile"> Build</Icon>
         <Icon to="/"> My projects</Icon>
         <Icon to="/"> Saved Projects</Icon>
         <Icon to="/profile"> Profile</Icon>
         
        </FormWrap>
     </Container>
    </>
  )
}


export default Home