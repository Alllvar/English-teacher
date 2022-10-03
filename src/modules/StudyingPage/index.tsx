import React, { useState } from 'react';
import { Divider, Typography, Button, message, Steps } from 'antd';
import { steps } from '../../library/constants/steps'

const { Title, Paragraph, } = Typography;
const { Step } = Steps;

export const StudyingPage: React.FC<{}> = (el) => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div>
            <Typography>
                <Title>Studying</Title>
                <Paragraph>
                    And now you have to check your skills on this competition page
                </Paragraph>
                <Divider />
            </Typography>
            <Steps current={current}>
                {steps.map((item) => {
                    return (
                        <Step key={item.title} title={item.title} />
                    )
                })}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Studying complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </div>
    );
}
