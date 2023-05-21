import { useState } from "react";
import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormFields = {
  email: '',
  password: '',
}
const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFromFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFromFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromFields({...formFields, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    resetFormFields();
    try {
      dispatch(emailSignInStart(email, password));
    } catch (err) {
      console.log('sign in with email failed', err)
    }
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput 
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
      />
      <ButtonsContainer>
        <Button type='submit'>Sign In</Button>
        <Button 
          type='button'
          buttonType={BUTTON_TYPE_CLASSES.google}
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
      </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm;