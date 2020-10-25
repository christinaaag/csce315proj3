import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import './Tweet.css';

const styledCard = styled(Card)`
    background-color: red;
    color: blue;
`

const TweetCard = (props) => {
    const [author, text, date, mood] = [props.author, props.text, props.date, props.mood];
    return (
        <Card
            className={`tweet tweet--${mood}--outline`}
        >
            <Card.Body>
                <Card.Subtitle>Author: {author}</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}

const styledTweetCard = styled(TweetCard)`
    background-color: red;
    color: blue;
`;


export const Tweet = (props) => {
    return (
        <TweetCard {...props} />
    )
}

