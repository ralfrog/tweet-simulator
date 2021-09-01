import { get } from "core-js/core/dict";
import {v4 as uuidv4} from "uuid";
import {TWEETS} from "../utils/constant";

export function saveTweetApi (tweet, username){
 const tweets=getTweetApi();

 if(tweets.length === 0){
     const tweetTemp=[
        {
        id:uuidv4(),
        tweet,
        username,
        createAdt: new Date(),
        },

    ];
    localStorage.setItem (TWEETS,JSON.stringify(tweetTemp)); // guardamos el tweet en localStore transformandolo a String
    }else{
        tweets.push({
            id:uuidv4,
            tweet,
            username,
            createAdt: new Date (),
        });
        localStorage.setItem(TWEET,JSON.stringify(tweets));
    }
 }

export function getTweetApi(){
    const tweets= localStorage.getItem(TWEETS);
    if(tweets){
        return JSON.parse(tweets);
    }

    return [];
}