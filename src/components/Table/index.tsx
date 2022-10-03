import React from 'react';
import ReactDOM from "react-dom";
import { Form, Table, } from 'antd';
import { columns, data } from '../../library/constants/irregular-verbs'
import { IrregularVerb } from '../../library/types/irregular-verbs';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'antd/dist/antd.css';
import './index.css'
import { Challange } from './Challange';

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
}

interface IFormInput {
    verb: String;
    secondForm: GenderEnum;
}

export const TableForm: React.FC<{ mode: string }> = ({ mode}) => {
    return (
        <div className="table-container">
            {mode === 'introduction'
                ? <Table<IrregularVerb>
                    dataSource={data}
                    bordered
                    pagination={false}
                >
                    <Table.Column<IrregularVerb> key="key" title="Verb" dataIndex="verb" />
                    <Table.Column<IrregularVerb> key="key" title="Second Form" dataIndex="secondForm" />
                    <Table.Column<IrregularVerb> key="key" title="Third Form" dataIndex="thirdForm" />
                    <Table.Column<IrregularVerb> key="key" title="Translate" dataIndex="translate" />
                </Table>
                : <Challange />
            }
        </div>
    )
}