import React, { useState } from 'react';

import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

import { Container, Form } from './AppStyles';

import Drops from './Drops';

export function App() {

    // const [getFeedBacks, setFeedBacks] = useState({
    //     good: 0,
    //     neutral: 0,
    //     bad: 0,
    // })

    const [getGoodFB, setGoodFB] = useState(0);
    const [getNeutralFB, setNeutralFB] = useState(0);
    const [getBadFB, setBadFB] = useState(0);

    const sendFeedback = evt => {
        const key = evt.currentTarget.textContent;
        switch (key) {
            case 'good':
                setGoodFB(getGoodFB + 1);
                break;
            case 'neutral':
                setNeutralFB(getNeutralFB + 1);
                break;
            case 'bad':
                setBadFB(getBadFB + 1);
                break;

            default:
                break;
        }
        // setFeedBacks({ ...getFeedBacks, [key]: getFeedBacks[key] + 1 });
    };

    const getAllFeedBacks = () => ({ good: getGoodFB, neutral: getNeutralFB, bad: getBadFB, })

    const countTotalFeedback = () => Object.values(getAllFeedBacks()).reduce((a, b) => a + b);

    const countPositiveFeedbackPercentage = () =>
        Math.round((getGoodFB.good / countTotalFeedback()) * 100) || 0;

    // render() {
    return <Container>
        <Form>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={getAllFeedBacks()}
                    onLeaveFeedback={sendFeedback}
                />
            </Section>

            <Section title="Statistics">
                <Statistics
                    {...getAllFeedBacks()}
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
