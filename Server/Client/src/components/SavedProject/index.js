import React from 'react'
import { Container, FormWrap, Icon, SavedProjectH1} from './SavedProjectElements'

const Home = () => {
  return (
    <>
     <Container>
        <FormWrap>
         <Icon to="/home"> TureON</Icon>
         <SavedProjectH1>Saved Projects</SavedProjectH1>
        </FormWrap>
     </Container>
    </>
  )
}


export default Home