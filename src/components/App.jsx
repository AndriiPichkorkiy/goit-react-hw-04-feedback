import React, { useState } from 'react';

import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

import { Container, Form } from './AppStyles';

import Drops from './Drops';

export function App() {

    const [getFeedBacks, setFeedBacks] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    })

    const sendFeedack = evt => {
        const key = evt.currentTarget.textContent;
        setFeedBacks({ ...getFeedBacks, [key]: getFeedBacks[key] + 1 });
    };

    const countTotalFeedback = () => Object.values(getFeedBacks).reduce((a, b) => a + b);

    const countPositiveFeedbackPercentage = () =>
        Math.round((getFeedBacks.good / countTotalFeedback()) * 100) || 0;

    // render() {
    return <Container>
        <Form>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={getFeedBacks}
                    onLeaveFeedback={sendFeedack}
                />
            </Section>

            <Section title="Statistics">
                <Statistics
                    {...getFeedBacks}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />
            </Section>
        </Form>
        {/* decoration part */}
        <Drops />
    </Container>

    // }
}
