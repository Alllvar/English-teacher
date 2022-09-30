import { ColumnsType } from 'antd/es/table';
import type { IrregularVerbs, IrregularVerbsForm } from '../types/irregular-verbs';

export const columns: ColumnsType<IrregularVerbs> = [
    {
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
    },
];

export const data: IrregularVerbs[] = [
    {
        key: 0,
        verb: 'be',
        secondForm: 'was/were',
        thirdForm: 'been',
        translate: 'бути',
    },
    {
        key: 1,
        verb: 'go',
        secondForm: 'went',
        thirdForm: 'gone',
        translate: 'йти',
    },
    {
        key: 2,
        verb: 'become',
        secondForm: 'became',
        thirdForm: 'become',
        translate: 'стати',
    },
    {
        key: 3,
        verb: 'begin',
        secondForm: 'began',
        thirdForm: 'begun',
        translate: 'почати',
    },
    {
        key: 4,
        verb: 'break',
        secondForm: 'broke',
        thirdForm: 'broken',
        translate: 'ламати',
    },
    {
        key: 5,
        verb: 'buy',
        secondForm: 'bought',
        thirdForm: 'bought',
        translate: 'купити',
    },
    {
        key: 6,
        verb: 'choose',
        secondForm: 'chose',
        thirdForm: 'chosen',
        translate: 'вибрати',
    },
    {
        key: 7,
        verb: 'come',
        secondForm: 'came',
        thirdForm: 'come',
        translate: 'прийти',
    },
    {
        key: 8,
        verb: 'drink',
        secondForm: 'drank',
        thirdForm: 'drunk',
        translate: 'пити',
    },
    {
        key: 9,
        verb: 'find',
        secondForm: 'found',
        thirdForm: 'found',
        translate: 'знайти',
    },
    {
        key: 10,
        verb: 'hide',
        secondForm: 'hid',
        thirdForm: 'hidden',
        translate: 'приховати',
    },
    {
        key: 11,
        verb: 'keep',
        secondForm: 'kept',
        thirdForm: 'kept',
        translate: 'зберегти',
    },
    {
        key: 12,
        verb: 'know',
        secondForm: 'knew',
        thirdForm: 'known',
        translate: 'знати',
    },
    {
        key: 13,
        verb: 'drive',
        secondForm: 'drove',
        thirdForm: 'driven',
        translate: 'їхати',
    },
    {
        key: 14,
        verb: 'do',
        secondForm: 'did',
        thirdForm: 'dove',
        translate: 'робити',
    },
    {
        key: 15,
        verb: 'forget',
        secondForm: 'forgot',
        thirdForm: 'forgotten',
        translate: 'знати',
    },
];

export const dataForm: IrregularVerbsForm[] = [
    {
        key: 0,
        verb: 'be',
        // secondForm: 'was/were',
        secondForm:
            <span>
                <a href="" >Edit</a>
                <span className="ant-divider"/>
                <a href="" >Delete</a>
            </span>
        ,
        thirdForm:
            <span>
                <a href="" >Edit</a>
                <span className="ant-divider"/>
                <a href="" >Delete</a>
            </span>,
        translate: 'бути',
    },
];