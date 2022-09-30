import React, { useState } from 'react';
import { Divider, Typography, Button, message, Steps } from 'antd';
import {TableForm} from "../../components/Table";

const { Title, Paragraph, } = Typography;
const { Step } = Steps;

export const CompetitionPage: React.FC = () => {
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
