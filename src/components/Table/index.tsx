import { Table } from 'antd';
import type { FC } from 'react';
import type { IrregularVerbExtended } from 'library/types/data';

type SourceTableProps = {
  data: IrregularVerbExtended[]
  results?: null | { [key: string]: number | null }
};

const SourceTable: FC<SourceTableProps> = ({ data, results }) => (
  <div className="table-container">
    <Table<IrregularVerbExtended>
      dataSource={data}
      bordered
      pagination={false}
      rowClassName={(_, index) => {
        if (results) {
          const key = data[index]?.key;

          if (results[key]) {
            return 'success';
          }

          return 'error';
        }

        return '';
      }}
    >
      <Table.Column<IrregularVerbExtended> key="key" title="Verb" dataIndex="verb" />
      <Table.Column<IrregularVerbExtended> key="key" title="Second Form" dataIndex="secondForm" />
      <Table.Column<IrregularVerbExtended> key="key" title="Third Form" dataIndex="thirdForm" />
      <Table.Column<IrregularVerbExtended> key="key" title="Translate" dataIndex="translate" />
    </Table>
  </div>
);

export default SourceTable;
