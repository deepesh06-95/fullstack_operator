import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Route,Routes} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { Signout } from './components/Signout';
const store=createStore(reducers,compose(applyMiddleware(thunk)))
ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
    <Provider store={store}>
   
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/op" element={ <PrivateRoute> <App /></PrivateRoute>}>
     </Route>
     <Route path="/login" element={<Login/>}>
     </Route>
     <Route path="/signout" element={<Signout/>}>
     </Route>
     <Route path="*" element={<h1>404 Page not found</h1>}>
     </Route>
     </Routes>
    </Provider>
    </AuthContextProvider>
 </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
