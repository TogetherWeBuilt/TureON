import React from 'react'
import { Container, FormWrap, Icon, MyProjectH1} from './MyProjectElements'

const Home = () => {
  return (
    <>
     <Container>
        <FormWrap>
         <Icon to="/"> TureON</Icon>
         <MyProjectH1>My Projects</MyProjectH1>
        </FormWrap>
     </Container>
    </>
  )
}


export default Home