import React from 'react'
import { Container, FormWrap, Icon, ProfileH1} from './ProfileElements'

const Home = () => {
  return (
    <>
     <Container>
        <FormWrap>
         <Icon to="/"> TureON</Icon>
         <ProfileH1>Profile Page</ProfileH1>
        </FormWrap>
     </Container>
    </>
  )
}


export default Home