import React from 'react';
import { Tweet } from './Tweet';

const Timeline = (props) => {
    const [tweets, userMood] = [props.tweets, props.userMood];
    return (
        <div>
            {tweets.map((tweet, key) => (
                (tweet.mood == userMood || userMood == "all") ?
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
                    : null
            )
            )}
        </div>
    )
}

export default Timeline;