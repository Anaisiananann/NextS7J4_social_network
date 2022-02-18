import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { userError, userLogin } from '../../redux/stateUser/userAction';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isConnected = useSelector(state => state.connected);

  const dispatch = useDispatch();

  const changeConnectedStatus = () =>  {
    dispatch(userLogin())
  }
  
  useEffect(() => {
      console.log(isConnected)
  }, [isConnected])

  const logInFetchRequest = () => {
      
    const data = {
      identifier: email,
      password: password
    };

    fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      if(response.error) {
        console.log(userError)
      } else {
        //console.log(response.jwt)
        Cookies.set('token', response.jwt);
        Cookies.set('id', response.user.id);
        changeConnectedStatus()
        window.location.href = "/"
      }
    })
  }

  return (
    <div>
      <form action="post">
        <label htmlFor="input-email-register">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='input-email-login' />

        <label htmlFor="input-password-register">Mot De Passe</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='input-password-login'/>

        <button type="button" onClick={() => logInFetchRequest()}>LogIn</button>
      </form>
    </div>  
  );
}



// import { makeStyles } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: theme.spacing(2),

//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '300px',
//     },
//     '& .MuiButtonBase-root': {
//       margin: theme.spacing(2),
//     },
//   },
// }));

// const Form = ({ handleClose }) => {
//   const classes = useStyles();
//   // create state variables for each input
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(firstName, lastName, email, password);
//     handleClose();
//   };

//   return (
//     <form className={classes.root} onSubmit={handleSubmit}>
//       <TextField
//         label="First Name"
//         variant="filled"
//         required
//         value={firstName}
//         onChange={e => setFirstName(e.target.value)}
//       />
//       <TextField
//         label="Last Name"
//         variant="filled"
//         required
//         value={lastName}
//         onChange={e => setLastName(e.target.value)}
//       />
//       <TextField
//         label="Email"
//         variant="filled"
//         type="email"
//         required
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       />
//       <TextField
//         label="Password"
//         variant="filled"
//         type="password"
//         required
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//       />
//       <div>
//         <Button variant="contained" onClick={handleClose}>
//           Cancel
//         </Button>
//         <Button type="submit" variant="contained" color="primary">
//           Signup
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default Form;
