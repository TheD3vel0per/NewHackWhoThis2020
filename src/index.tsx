import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import { loginService } from './services/LoginService';
import { RuntimeInstance } from './classes/core/RuntimeInstance';
import { userService } from './services/UserService';
import { getUserService } from './services/GetUserService';


firebase.initializeApp({
    apiKey: 'AIzaSyAn3jb0unKrsVBsoi8ktx2wPIsbgROgxzM',
    authDomain: 'newhackwhothis2020.firebaseapp.com',
    databaseURL: 'https://newhackwhothis2020.firebaseio.com',
    projectId: 'newhackwhothis2020',
    storageBucket: 'newhackwhothis2020.appspot.com',
    messagingSenderId: '770074228861',
    appId: '1:770074228861:web:4392d3f41eeb41756ed914'
});

getUserService.init();

window['code'] = `(heart)
(sendLove "english" 10 160)`;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
