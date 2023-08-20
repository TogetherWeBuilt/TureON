import React from 'react'
import { Container, FormWrap, Icon, ProfileH1} from './Profile'

const Home = () => {
  return (
    <>
     <Container>
        <FormWrap>
         <Icon to="/home"> TureON</Icon>
         <ProfileH1>Profile</ProfileH1>
        </FormWrap>
     </Container>
    </>
  )
}


export default Home