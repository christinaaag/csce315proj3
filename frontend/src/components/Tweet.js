import React from 'react';
import { Card } from 'react-bootstrap';

export const TweetCard = (props) => {
    const [author, text, date] = [props.author, props.text, props.date];

    return (
        <Card>
            <Card.Body>
                <Card.Subtitle>{author}</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    )
}