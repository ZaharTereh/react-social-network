let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            let newMessage = {
                id:6,
                message:state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messageData = [...state.messageData];
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
                
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
        default:{
            return state;
        }
            
    }
}

export const addMessageActionCreator = () =>{
    return {type:ADD_MESSAGE};
}

export const updateNewMessageTextActionCreator = (text) =>{
    return {type:UPDATE_NEW_MESSAGE_TEXT,newMessageText:text};
}

export default dialogsReducer;