import React from 'react';
import { Tweet } from './Tweet';
import { Container, Row, Col } from 'react-bootstrap';

const Timeline = (props) => {
    const [tweets, userMood] = [props.tweets, props.userMood];
    return (
        <Container fluid>
            {tweets.map((tweet, key) => (
                (tweet.mood == userMood || userMood == "all") ?
                    <Row>
                        <Col>
                            <Tweet
                                key={key}
                                author={tweet.author}
                                text={tweet.text}
                                date={tweet.date}
                                mood={tweet.mood}
                                url={tweet.url}
                            />
                        </Col>
                    </Row>
                    : null
            )
            )}
        </Container>
    )
}

export default Timeline;