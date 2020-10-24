import React from 'react';
import { Tweet } from './Tweet';

const Timeline = (props) => {
    const tweets = props.tweets;
    return (
        <div>
            {tweets.map((tweet, key) => (
                <div>
                    <Tweet
                        key={key}
                        author={tweet.author}
                        text={tweet.text}
                        date={tweet.date}
                        mood={tweet.mood}
                        url={tweet.url}
                    />
                    <br />
                </div>
            ))}
        </div>
    )
}

export default Timeline;