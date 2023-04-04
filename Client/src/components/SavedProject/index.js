import React from 'react'
import { Container, FormWrap, Icon} from './SavedProjectElements'

const Home = () => {
  return (
    <>
     <Container>
        <FormWrap>
         <Icon to="/"> TureON</Icon>
         <HomeH1>Saved Projects</HomeH1>
        </FormWrap>
     </Container>
    </>
  )
}


export default Home