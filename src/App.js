import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserDocumentFromAuth, onAuthStateChangedListener, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from './utils/firebase.util';
import { setCurrentUser } from './store/user/user.action';
import { selectCurrentUser } from './store/user/user.selector';

function App() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleChangeUser = (e) => {
    setUserName(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }
  // console.log(username, password)
  const handleClick = async () => {
    const sign = await signInAuthUserWithEmailAndPassword(username, password);
    console.log(sign)
  }

  const handleClickGGSignIn = async () => {
    const sign = await signInWithGooglePopup(username, password);
    console.log(sign)
  }

  const handleClickSignOut = async () => {
    const sign = await signOutUser();
    console.log(sign)
  }

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
  console.log(currentUser);
  return (
    <div className="App">
      <label>username: </label>
      <input onChange={handleChangeUser} />
      <label>password: </label>
      <input type='password' onChange={handleChangePassword} />
      <button onClick={handleClick} >sign in</button>
      <button onClick={handleClickGGSignIn} >sign in with GG</button>
      <button onClick={handleClickSignOut} >sign out</button>
    </div>
  );
}

export default App;
