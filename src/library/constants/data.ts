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
];
