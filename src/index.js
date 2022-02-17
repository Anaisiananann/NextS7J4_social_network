import React from 'react';
import {render} from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import Home from 'page/Home'
import LoginPage from 'page/LoginPage'
import Profile from 'page/Profile'
import User from 'page/User'
import RegisterPage from 'page/RegisterPage'
import Navbar from 'componants/Navbar'
import { Provider } from 'react-redux';
import store from './redux/store'

const App = () => {

  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <main>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/users/:username" element={<User />} />
            </Routes>
          </main>
        </BrowserRouter>
      </>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
