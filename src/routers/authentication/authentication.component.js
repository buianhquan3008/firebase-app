import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserDocumentFromAuth, onAuthStateChangedListener, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from '../../utils/firebase.util';
import { emailSignInStart, googleSignInStart, setCurrentUser, signOutStart } from '../../store/user/user.action';
import { selectCurrentUser } from '../../store/user/user.selector';
import { USER_ACTION_TYPES } from '../../store/user/user.type';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { AuthenticationContainer } from './authentication.styles';

function Authentication() {
  ///OLD VERSION
  // const [username, setUserName] = useState('neeyu142857@gmail.com');
  // const [password, setPassword] = useState('buianhquan308');
  // const handleChangeUser = (e) => {
  //   setUserName(e.target.value);
  // }
  // const handleChangePassword = (e) => {
  //   setPassword(e.target.value);
  // }
  // // console.log(username, password)
  // const handleClick = async () => {
  //   // const sign = await signInAuthUserWithEmailAndPassword(username, password);
  //   dispatch({type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START, payload: {email: username, password}});
  //   // console.log(sign)
  // }

  // const handleClickGGSignIn = async () => {
  //   dispatch(googleSignInStart());
  // }

  // const handleClickSignOut = async () => {
  //   dispatch(signOutStart());
  // }

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  const currentUser = useSelector(selectCurrentUser);
  console.log('currentUser', currentUser);

  // const dispatch = useDispach();

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>

  );
}

export default Authentication;