import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogData = [
    {id:"1", name:"Sasha"},
    {id:"2", name:"Victor"},
    {id:"3", name:"Karina"},
    {id:"4", name:"Nikita"},
    {id:"5", name:"Max"}
]

let messageData = [
    {id:"1", message:"Hello"},
    {id:"2", message:"Привет"},
    {id:"3", message:"Здравствуйте"},
    {id:"4", message:"Yo"}
]

let postData =[
    {text:"Hello", image:"https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg"},
    {text:"Привет", image:"https://pbs.twimg.com/profile_images/793021684064419840/RjEjM6z5_400x400.jpg"},
    {text:"Здравствуй", image:"https://strana.ua/img/article/2625/70_main.jpeg"}
]

ReactDOM.render(<App messageData={messageData} dialogData={dialogData} postData={postData}/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
