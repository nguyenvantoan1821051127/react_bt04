import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {store} from './redux/Reducer/rootReducer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BaiTapForm from './BaiTapForm/BaiTapForm';
import BaiTapBookingTicket from './BaitapRedux/BaiTapBookingTicket/BaiTapBookingTicket';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<App />} >
                    <Route path='ex3'element={<BaiTapForm />}></Route>
                    <Route path='ex4'element={<BaiTapBookingTicket />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
