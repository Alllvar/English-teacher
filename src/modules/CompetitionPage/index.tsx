import React, { useState } from 'react';
import { Divider, Typography, Button } from 'antd';
import { TableForm } from '../../components/Table';

const { Title, Paragraph, } = Typography;

export const CompetitionPage: React.FC = () => {
    const [isStartedChallange, setIsStartedChallange] = useState(false)
    return (
        <div>
            <Typography>
                <Title>Competition</Title>
                <Paragraph>
                    And now you have to check your skills on this competition page
                </Paragraph>
                <Divider />
            </Typography>
                <TableForm mode="competition"/>


        </div>
    );
}
