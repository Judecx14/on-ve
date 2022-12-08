import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

const firebaseConfig = {
    apiKey: "AIzaSyDJM3t5_Uk_xd476TmImsZZ4_s_3OHZP98",
    authDomain: "h-books-4fd77.firebaseapp.com",
    projectId: "h-books-4fd77",
    storageBucket: "h-books-4fd77.appspot.com",
    messagingSenderId: "685760338804",
    appId: "1:685760338804:web:300d7d5f13b44ee805aa21",
    measurementId: "G-56YGFMMBZ7"
};

const app = initializeApp(firebaseConfig)
const messaging = {
    getToken: () => getToken(getMessaging(app)),
    onMessage: (callback) => getMessaging(app).onMessage(callback)
}
export default messaging