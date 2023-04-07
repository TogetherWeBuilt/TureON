import React, {useState} from 'react'
import Joi from "joi-browser";
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormButton, Text, FormInput, FormLabel,Div} from './SignupElements'

const SignIn = () => {

  const [user,setUser] = useState({
    username:"",email:"",password:"",confirmPassword:""
  });

  const [errors, setErrors] = useState({});
  const schema = {
    username: Joi.string().min(6).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    confirmPassword: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
  };

  const validateForm = (event) => {
    event.preventDefault();
    const result = Joi.validate(user,schema, { abortEarly: false });

    console.log(result);

    const { error } = result;

    if (!error) {
      return null;
    } 
    else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      console.log(errors);
      setErrors(errorData);
      return errorData;
    }
  };

  let name,value;

  const handleInputs = (e) =>{

    const { name, value } = e.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(e);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let userData = { ...user };
    userData[name] = value;
    setUser(userData);
    setErrors(errorData);

    // console.log(e);
    // name = e.target.name;
    // value = e.target.value;

    // setUser({...user,[name]:value});

  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

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
          {errors.username && (
           <Div className="alert alert-danger">
            {errors.username}
          </Div>
           )}

            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required
                       name='email'
                       value={user.email}
                       onChange={handleInputs}
                       />

        {errors.email && (
          <Div className="alert alert-danger">
            {errors.email}
          </Div>
           )}

            <FormLabel htmlFor = 'for'>Password</FormLabel>
            <FormInput type='password' required 
                        name='password'
                        value={user.password}
                        onChange={handleInputs}
                        />

         {errors.password && (
          <Div className="alert alert-danger">
            {errors.password}
          </Div>
           )}


            <FormLabel htmlFor = 'for'>Confirm Password</FormLabel>
            <FormInput type='password' required
                       name='confirmPassword'
                       value={user.confirmPassword}
                       onChange={handleInputs} 
                       />
            
            {errors.confirmPassword && (
          <Div className="alert alert-danger">
            {errors.confirmPassword}
          </Div>
           )}

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