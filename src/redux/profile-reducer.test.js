import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";
import {test} from "@jest/globals";

let state = {
    postData : [
        {id:1,text:"Hello", image:"https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg",likes:2},
        {id:2,text:"Привет", image:"https://pbs.twimg.com/profile_images/793021684064419840/RjEjM6z5_400x400.jpg",likes:4},
        {id:3,text:"Здравствуй", image:"https://strana.ua/img/article/2625/70_main.jpeg",likes:1}
    ],
    userProfile : null,
    status : ""
};

test('new post should be added', () => {
    //1.test data
    let action = addPostActionCreator("New text");

    //2.action
    let newState = profileReducer(state,action)

    //3.expectation
    expect(newState.postData.length).toBe(4);
});

test('added message should be correct', () => {
    //1.test data
    let action = addPostActionCreator("New text");

    //2.action
    let newState = profileReducer(state,action)

    //3.expectation
    expect(newState.postData[3].text).toBe("New text");
});

test('after delete post length  should be decrement', () => {
    //1.test data
    let action = deletePost(1);

    //2.action
    let newState = profileReducer(state,action)

    //3.expectation
    expect(newState.postData.length).toBe(2);
});