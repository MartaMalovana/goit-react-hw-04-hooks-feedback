import React from 'react';
import PropTypes from 'prop-types';
import {Container, Button, Title, Section} from './FeedbackOptions.styled';

export default function FeedbackOptions ({options, onLeaveFeedback}) {
        return (
            <Section title="feedback buttons">
                <Title lang="uk">Будь-ласка, залиште відгук про наше кафе "EXSPRESSO"!</Title>
                <Container>{options.map(option => <Button key={option} name={option} onClick={(event) => onLeaveFeedback(event)}>{option}</Button>)}</Container>
            </Section>
        );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string,),
    onLeaveFeedback: PropTypes.func
};