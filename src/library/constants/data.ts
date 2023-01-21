import type { ColumnsType } from 'antd/es/table';
import type { IrregularVerb } from '../types/data';

export const columns: ColumnsType<IrregularVerb> = [
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  },
];

export const source: IrregularVerb[] = [
  {
    key: 'question-1',
    forms: ['go', 'went', 'gone'],
    translate: 'йти',
  },
  {
    key: 'question-2',
    forms: ['become', 'became', 'become'],
    translate: 'стати',
  },
  {
    key: 'question-3',
    forms: ['begin', 'began', 'begun'],
    translate: 'почати',
  },
  {
    key: 'question-4',
    forms: ['cut', 'cut', 'cut'],
    translate: 'різати',
  },

  {
    key: 'question-4',
    forms: ['be', 'was/were', 'been'],
    translate: 'бути',
  },
  {
    key: 'question-5',
    forms: ['break', 'broke', 'broken'],
    translate: 'ламати',
  },
  {
    key: 'question-6',
    forms: ['buy', 'bought', 'bought'],
    translate: 'купити',
  },
  {
    key: 'question-7',
    forms: ['choose', 'chose', 'chosen'],
    translate: 'вибрати',
  },
  {
    key: 'question-8',
    forms: ['come', 'came', 'come'],
    translate: 'прийти',
  },
  {
    key: 'question-9',
    forms: ['drink', 'drank', 'drunk'],
    translate: 'пити',
  },
  {
    key: 'question-10',
    forms: ['find', 'found', 'found'],
    translate: 'знайти',
  },
  {
    key: 'question-11',
    forms: ['hide', 'hid', 'hidden'],
    translate: 'приховати',
  },
  {
    key: 'question-12',
    forms: ['keep', 'kept', 'kept'],
    translate: 'зберегти',
  },
  {
    key: 'question-13',
    forms: ['know', 'knew', 'known'],
    translate: 'знати',
  },
  {
    key: 'question-14',
    forms: ['drive', 'drove', 'driven'],
    translate: 'їхати',
  },
  {
    key: 'question-15',
    forms: ['do', 'did', 'done'],
    translate: 'робити',
  },
  {
    key: 'question-16',
    forms: ['forget', 'forgot', 'forgotten'],
    translate: 'знати',
  },
];
