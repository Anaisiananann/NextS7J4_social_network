import React from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/stateUser/userAction';

export default function LogOut() {
  const dispatch = useDispatch();

  const logOut = () => {
    Cookies.remove('token')
    Cookies.remove('id')
    dispatch(userLogout())
    window.location.href = "/"
  }

  return (
    <div>
      <button className='logout-btn' onClick={() => logOut()}>LogOut</button>
    </div>
  );
}