import React, {useState} from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormButton, Text, FormInput, FormLabel} from './SignupElements'

const SignIn = () => {

  const [user,setUser] = useState({
    username:"",email:"",password:"",confirmPassword:""
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

  const {username,email,password,confirmPassword}=user;
  const res = await fetch("/tureONian/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,email,password
    })

  });
const data = await res.json();
if(res.status === 400){
  window.alert(data.message);
  console.log(data.message)
}else{
  window.alert(data.message);
  console.log(data.message)
  window.location.replace("./signin");

}
}
  return (
    <>
     <Container>
        <FormWrap>
         <Icon to="/"> TureON</Icon>
         <FormContent>
          <Form action = "#">
            <FormH1>Create New Account</FormH1>
            <FormLabel htmlFor='for'>Username</FormLabel>
            <FormInput type='name' required 
                       name='username'
                       id="username"
                       value={user.username}
                       onChange={handleInputs}
                      />

            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required
                       name='email'
                       value={user.email}
                       onChange={handleInputs}
                       />

            <FormLabel htmlFor = 'for'>Password</FormLabel>
            <FormInput type='password' required 
                        name='password'
                        value={user.password}
                        onChange={handleInputs}
                        />

            <FormLabel htmlFor = 'for'>Confirm Password</FormLabel>
            <FormInput type='conpassword' required
                       name='confirmPassword'
                       value={user.confirmPassword}
                       onChange={handleInputs} 
                       />

            <FormButton type='submit' onClick={postData}>Sign Up</FormButton>
            <Text>Forgot password</Text>
          </Form>
         </FormContent>
        </FormWrap>
     </Container>
    </>
  )
}


export default SignIn