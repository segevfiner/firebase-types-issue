import './assets/main.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { createApp } from 'vue'
import App from './App.vue'

type FirebaseSignInProvider = firebase.FirebaseSignInProvider;

createApp(App).mount('#app')
