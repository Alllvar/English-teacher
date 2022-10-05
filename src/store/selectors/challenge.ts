import { createSelector } from '@reduxjs/toolkit';
import { IrregularVerb, IrregularVerbExtended } from 'library/types/data';
import { RootState } from '../index';

export const getQuizDeadLine = (state: RootState) => state.challenge.deadline;
export const getSourceData = (state: RootState) => state.challenge.source;
export const getEmptyIndexes = (state: RootState) => state.challenge.quiz;
export const getResult = (state: RootState) => state.challenge.result;

export const getCurrentRowIndex = createSelector(
  getResult,
  (quizResult) => Object.keys(quizResult).length,
);

export const getIsValid = createSelector(
  getEmptyIndexes,
  getSourceData,
  (quizData, data) => (key: string, forms: string[] = []) => {
    const formsIndex = quizData?.[key];
    const filledValue = forms[formsIndex];
    const expectedValue = data?.find((item) => item?.key === key)?.forms[formsIndex];

    return filledValue === expectedValue;
  },
);

// get quiz data with empty verbs, due to generated quiz
// e.g { ...other data, forms: ['begin', '', 'begun'] }
export const getQuizData = createSelector(
  getEmptyIndexes,
  getSourceData,
  (quizData, data) => Object.keys(quizData).reduce((result: IrregularVerb[], key) => {
    const rowData = data.find((item) => item.key === key);

    if (!rowData) {
      return result;
    }

    return [
      ...result,
      {
        ...rowData,
        forms: rowData.forms.reduce((previousForms: string[], form, index): string[] => {
          if (index === quizData[key]) {
            return [...previousForms, ''];
          }

          return [...previousForms, form];
        }, []),
      },
    ];
  }, []),
);

export const getSourceExpandedData = createSelector(
  getSourceData,
  (data) => data.reduce((result: IrregularVerbExtended[], { forms, ...restItemData }) => {
    const [verb, secondForm, thirdForm] = forms;
    return [
      ...result,
      {
        ...restItemData,
        verb,
        secondForm,
        thirdForm,
      },
    ];
  }, []),
);
