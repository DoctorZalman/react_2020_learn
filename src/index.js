import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
   {id: 1, message: "How is your cat", likesCount: 12},
   {id: 2, message: "Hi", likesCount: 13},
   {id: 3, message: "Good", likesCount: 14},
   {id: 4, message: "Nice", likesCount: 15}
]
let dialogs = [
   {id:1, name: "Roma"},
   {id:4, name: "Vasia"},
   {id:2, name: "Vika"},
   {id:3, name: "Endry"}
]
let messages = [
   {id: 1, message: "How is your cat", likesCount: 12},
   {id: 2, message: "Hi", likesCount: 13},
   {id: 3, message: "Good", likesCount: 14},
   {id: 4, message: "Nice", likesCount: 15}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
