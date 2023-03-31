import React,{useState}  from 'react'
import { redirect } from "react-router-dom";
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormButton, Text, FormInput, FormLabel, SigninLink} from './SigninElements'

const SignIn = () => {

  const [user,setUser] = useState({
    username:"",password:""
  });

  let name,value;

  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});

  }
const postData = async(e) =>{
  e.preventDefault();

  const {username,password}=user;
  const res = await fetch("/tureONian/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,password
    })

  });
const data = await res.json();
if(res.status === 401 || ! data){
  window.alert("Login unsuccessful");
  console.log("Login unsuccessful......")
}else{
  window.location.replace("./home");
  window.alert("Login successful");
  console.log("Login successful......")

}
}
  return (
    <>
     <Container>
        <FormWrap>
         <Icon to="/"> TureON</Icon>
         <FormContent>
          <Form action = "#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>Username</FormLabel>
            <FormInput type='name' required 
                       name='username'
                       id="username"
                       value={user.username}
                       onChange={handleInputs}
                      />
            <FormLabel htmlFor = 'for'>Password</FormLabel>
            <FormInput type='password' required 
                        name='password'
                        value={user.password}
                        onChange={handleInputs}
                        />
                        <FormButton type='submit' onClick={postData}>Sign In</FormButton>
            {/* <FormButton type='submit'>
              <SigninLink to='/home'>Sign In</SigninLink>
            </FormButton> */}
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