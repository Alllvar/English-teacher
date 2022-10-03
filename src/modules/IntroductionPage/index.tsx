import React, { useState } from 'react';
import  { TableForm } from '../../components/Table';
import type { LearnPageProps } from '../../library/types/irregular-verbs'
import {
    Divider,
    Typography
} from 'antd';
import './index.css'

const { Title, Paragraph, } = Typography;


export const LearnPage: React.FC<LearnPageProps> = ({ words}) => {
    return (
       <div>
           <Typography>
               <Title>Introduction</Title>
               <Paragraph mark strong italic>
                   On this page you can see a table of irregular verbs. Look at it carefully and remember all the forms
                   of these verbs and their translation
               </Paragraph>
               <Divider />
           </Typography>

           <TableForm mode="introduction" />
       </div>
    );
}
