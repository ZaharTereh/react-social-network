let ADD_MESSAGE = 'ADD-MESSAGE';

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
            return {
                ...state,
                messageData: [...state.messageData,{ id:6, message:action.messageText }]
            };
        }
        default:{
            return state;
        }
            
    }
}

export const addMessageActionCreator = (messageText) =>{
    return {type:ADD_MESSAGE,messageText};
}

export default dialogsReducer;