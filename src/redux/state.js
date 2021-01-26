import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reduce';

let store = {
    _state : {
        dialogPage:{
            dialogData : [
                {id:"1", name:"Sasha"},
                {id:"2", name:"Victor"},
                {id:"3", name:"Karina"},
                {id:"4", name:"Nikita"},
                {id:"5", name:"Max"}
            ],
            messageData : [
                {id:"1", message:"Hello"},
                {id:"2", message:"Привет"},
                {id:"3", message:"Здравствуйте"},
                {id:"4", message:"Yo"}
            ],
            newMessageText:""
        },
        profilePage:{
            newPostText : "Привет",
            postData : [
                {id:1,text:"Hello", image:"https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg",likes:2},
                {id:2,text:"Привет", image:"https://pbs.twimg.com/profile_images/793021684064419840/RjEjM6z5_400x400.jpg",likes:4},
                {id:3,text:"Здравствуй", image:"https://strana.ua/img/article/2625/70_main.jpeg",likes:1}
            ]
        }  
    },

    getState(){
        return this._state;
    },

    rerenderDOM(){
    }
    ,subscribe(observer){
        this.rerenderDOM = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage,action);
        this.rerenderDOM(this._state);
    }

}

export default store;
window.store = store;