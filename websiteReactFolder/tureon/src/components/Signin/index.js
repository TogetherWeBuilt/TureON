import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormButton, Text, FormInput, FormLabel, SigninLink} from './SigninElements'

const SignIn = () => {
  return (
    <>
     <Container>
        <FormWrap>
         <Icon to="/"> TureON</Icon>
         <FormContent>
          <Form action = "#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor = 'for'>Password</FormLabel>
            <FormInput type='password' required />
            <FormButton type='submit'>Sign In</FormButton>
            <Text>Forgot password</Text>
            <>
            
             </>
            <SigninLink to='/signup'>Create New Account</SigninLink>
          </Form>
         </FormContent>
        </FormWrap>
     </Container>
    </>
  )
}


export default SignIn