/*
 * Created Date: Friday, 5th February 2021, 1:06:30 am
 * Author: Kingsley Chimezie
 */


/* FIREBASE CONFIG
-------------------------------- */
// PASTE YOUR WEB APP FIREBASE CONFIG HERE


/* CLOUD FIRESTORE CONFIG
-------------------------------- */
const firestore = {
    collectionName: 'valentines',
    docID: 'test'
};

const firebaseConfig = {
    apiKey: "AIzaSyDWOt-wnrxb0Uwos6rP6ImK-d5ANz2s5bU",
    authDomain: "valentine-day-ad9ed.firebaseapp.com",
    projectId: "valentine-day-ad9ed",
    storageBucket: "valentine-day-ad9ed.appspot.com",
    messagingSenderId: "857140883142",
    appId: "1:857140883142:web:0abff7e00eb685a2a8b1c7",
    measurementId: "G-1QMND59JN1"
};

/* UI DATA
-------------------------------- */
const uiData = {
    valentinesFirstName: 'Ния',
    valentinesLastName: '',
    headerMessage: 'ще бъдеш ли моята валентинка? ❤️🌹',
    resultHeaderYes: 'Радвам се 😍',
    resultHeaderNo: 'Оставаш без нет! 😢',
    yesImgLink: 'https://media.tenor.com/images/603fda4f96ee4a571b6212bf2e23beb5/tenor.gif',
    noImgLink: 'https://i.pinimg.com/originals/04/be/b8/04beb8cabb497d6b287272df7dabcf13.gif',
    askImgLink: 'https://pa1.narvii.com/7103/a0559486633f84d0a56d1a4975ba041f556b8b34r1-370-286_hq.gif',
    lastAnswerHeading: 'Последено даден отговор:',
};