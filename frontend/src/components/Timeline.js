import React from 'react';
import { Tweet } from './Tweet';

const Timeline = () => {
    return (
        <div>
            <Tweet
                author={"Guy Boring"}
                text={"This is a neutral tweet."}
                date={"October"}
                mood={"neutral"}
            />
            <br />
            <Tweet
                author={"Happ E. Man"}
                text={"This is a happy tweet."}
                date={"October"}
                mood={"happy"}
            />
            <br />
            <Tweet
                author={"Sad Boy"}
                text={"This is a sad tweet."}
                date={"October"}
                mood={"sad"}
            />
        </div>
    )
}

export default Timeline;