import type { FC } from 'react';
import {
  Divider,
  Typography,
} from 'antd';
import { useSelector } from 'react-redux';
import SourceTable from 'components/Table';
import { getSourceExpandedData } from 'store/selectors/challenge';

const { Title, Paragraph } = Typography;

const Learn: FC = () => {
  const data = useSelector(getSourceExpandedData);

  return (
    <div>
      <Typography>
        <Title>Learn</Title>
        <Paragraph mark strong italic>
          On this page you can see a table of irregular verbs. Look at it carefully and remember all the forms
          of these verbs and their translation
        </Paragraph>
        <Divider />
      </Typography>
      <SourceTable data={data} />
    </div>
  );
};

export default Learn;
