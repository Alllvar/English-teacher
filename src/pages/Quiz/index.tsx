import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Typography, Statistic } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, useFieldArray, FieldArrayWithId } from 'react-hook-form';
import {
  getQuizData,
  getCurrentRowIndex,
  getIsValid,
  getQuizDeadLine,
  getResult,
  getSourceExpandedData,
} from 'store/selectors/challenge';
import {
  START_CHALLENGE, CONTINUE_CHALLENGE, RESET_CHALLENGE, FAIL_CHALLENGE,
} from 'store/constants/action-types';
import SourceTable from '../../components/Table';

const { Countdown } = Statistic;

const FIELD_NAME = 'forms';
const FIELD_CONTAINER_STYLES = { display: 'flex', alignItems: 'baseline' };
const FIELD_STYLES = { marginRight: '15px' };
const CENTERED_CONTAINER_STYLES = { display: 'flex', justifyContent: 'center' };

const schema = yup.object({
  [FIELD_NAME]: yup.array()
    .of(
      yup.string(),
    ).required(),
}).required();

type FormValues = {
  [FIELD_NAME]: any[]
};

function Quiz() {
  const deadline = useSelector(getQuizDeadLine);
  const data = useSelector(getQuizData);
  const results = useSelector(getResult);
  const resultData = useSelector(getSourceExpandedData);
  const index = useSelector(getCurrentRowIndex);
  const getIsVerbFormValueValid = useSelector(getIsValid);
  const isSuccess = index >= data.length;
  const isTimeout = deadline && deadline < Date.now();
  const isFinished = isSuccess || isTimeout;
  const isStarted = data.length > 0;
  const rowData = data[index];
  const dispatch = useDispatch();
  const {
    register, control, reset, watch,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const { fields } = useFieldArray({
    control,
    name: FIELD_NAME,
  });
  const formsValue = watch(FIELD_NAME);
  const isValid = rowData && getIsVerbFormValueValid(rowData.key, formsValue);

  const handleStart = () => {
    dispatch({ type: START_CHALLENGE });
  };

  const handleContinue = () => {
    dispatch({ type: CONTINUE_CHALLENGE, payload: { id: rowData.key } });
  };

  const handleReset = () => {
    dispatch({ type: RESET_CHALLENGE });
  };

  const handleFail = () => {
    dispatch({ type: FAIL_CHALLENGE });
  };

  const renderField = (field: FieldArrayWithId, fieldIndex: number) => {
    const isDisabled = rowData.forms[fieldIndex] !== '';

    return (
      <input
        {
          ...register(
            `${FIELD_NAME}.${fieldIndex}`,
            {
              disabled: isDisabled,
            },
          )
        }
        key={field.id}
        style={FIELD_STYLES}
      />
    );
  };

  useEffect(() => {
    if (rowData) {
      reset({ [FIELD_NAME]: rowData.forms });
    }
  }, [rowData, reset]);

  if (!isStarted) {
    return (
      <>
        <div style={CENTERED_CONTAINER_STYLES}>
          <Typography.Paragraph>Click button to start challenge</Typography.Paragraph>
        </div>
        <div style={CENTERED_CONTAINER_STYLES}>

          <Button
            size="large"
            onClick={handleStart}
            type="primary"
          >
            Start
          </Button>
        </div>
      </>
    );
  }

  if (isFinished) {
    const filledQuestionCount = Object.values(results).filter(Boolean).length;
    const failedQuestionCount = data.length - filledQuestionCount;

    return (
      <>
        <div style={CENTERED_CONTAINER_STYLES}>
          <Typography.Title>
            Quiz
            {isTimeout ? 'failed' : 'passed'}
          </Typography.Title>
        </div>
        <div style={{ ...CENTERED_CONTAINER_STYLES, flexDirection: 'column' }}>
          <Typography.Text style={{ margin: '0 auto', backgroundColor: '#b7eb8f' }}>
            Fulfilled words count:
            {filledQuestionCount}
          </Typography.Text>
          <Typography.Text style={{ margin: '0 auto', backgroundColor: '#ff7875' }}>
            Missed words count:
            {failedQuestionCount}
          </Typography.Text>
        </div>
        <SourceTable data={resultData} results={results} />
        <div style={CENTERED_CONTAINER_STYLES}>
          <Button
            size="large"
            onClick={handleReset}
            type="primary"
          >
            Reset challenge
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      {deadline ? <Countdown title="Countdown" value={deadline} onFinish={handleFail} /> : null}
      <Typography.Text>
        Translation to Ukrainian:
        <strong>{rowData.translate}</strong>
      </Typography.Text>
      <div style={FIELD_CONTAINER_STYLES}>
        {fields.map(renderField)}
      </div>
      <br />
      <div style={CENTERED_CONTAINER_STYLES}>
        <Button
          size="large"
          onClick={handleContinue}
          type="primary"
          disabled={!isValid}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

export default Quiz;
