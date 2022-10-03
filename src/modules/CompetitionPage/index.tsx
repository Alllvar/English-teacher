import React from 'react';
import { Divider, Typography } from 'antd';
import { TableForm } from '../../components/Table';

const { Title, Paragraph, } = Typography;

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
