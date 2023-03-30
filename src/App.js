import './App.css';
import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from './utils/firebase';



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


  return (
    <div className="App">
      <label>username: </label>
      <input onChange={handleChangeUser} />
      <label>password: </label>
      <input type='password' onChange={handleChangePassword} />
      <button onClick={handleClick} >sign in</button>
      <button onClick={handleClickGGSignIn} >sign in with GG</button>
    </div>
  );
}

export default App;
