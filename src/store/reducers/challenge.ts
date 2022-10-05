import { createReducer, createAction } from '@reduxjs/toolkit';
import { source } from 'library/constants/data';
import { shuffle, cloneDeep } from 'library/helpers';
import { IrregularVerb } from 'library/types/data';
import { ChallengeState } from '../types';
import {
  START_CHALLENGE,
  CONTINUE_CHALLENGE,
  RESET_CHALLENGE,
  FAIL_CHALLENGE,
} from '../constants/action-types';

const STORAGE_KEY = 'quiz';
const DEFAULT_STATE = {
  quiz: {},
  deadline: null,
  startedAt: null,
  result: {},
  source: cloneDeep(source),
};

const getNewQuizData = (data: IrregularVerb[]) => {
  const shuffledData = shuffle(cloneDeep(data));

  return shuffledData.reduce((result, { key }) => ({
    ...result,
    [key]: Math.floor(Math.random() * 3),
  }), {});
};

const getInitialState = (): ChallengeState => {
  const result = {
    ...cloneDeep(DEFAULT_STATE),
  };

  try {
    const previousResult = localStorage.getItem(STORAGE_KEY);

    if (previousResult) {
      const previousResultParsed = JSON.parse(previousResult);

      if (typeof previousResultParsed === 'object' && Object.keys(previousResultParsed).length > 0) {
        result.quiz = previousResultParsed.quiz;
        result.deadline = previousResultParsed.deadline;
        result.result = previousResultParsed.result;
      }
    }
  } catch (e) {

  }

  return result;
};

const initialVerbsState = getInitialState();

const start = createAction<any, typeof START_CHALLENGE>(START_CHALLENGE);
const next = createAction<{ id: string }, typeof CONTINUE_CHALLENGE>(CONTINUE_CHALLENGE);
const clear = createAction<any, typeof RESET_CHALLENGE>(RESET_CHALLENGE);
const fail = createAction<any, typeof FAIL_CHALLENGE>(FAIL_CHALLENGE);

const challenge = createReducer(initialVerbsState, (builder) => builder
  .addCase(start, (state) => {
    state.startedAt = Date.now();
    state.deadline = Date.now() + 1000 * 30;
    state.quiz = getNewQuizData(state.source);
    state.result = {};

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  })
  .addCase(next, (state, action) => {
    state.result = {
      ...state.result,
      [action.payload.id]: Date.now(),
    };

    if (state.deadline) {
      state.deadline += 1000 * 3;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  })
  .addCase(clear, (state) => {
    localStorage.removeItem(STORAGE_KEY);

    const {
      source: newSource, deadline, result, quiz,
    } = getInitialState();

    state.source = newSource;
    state.result = result;
    state.deadline = deadline;
    state.quiz = quiz;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  })
  .addCase(fail, (state) => {
    state.result = Object.keys(state.result).reduce((allResults, key) => ({
      ...allResults,
      [key]: state.result[key] || null,
    }), { ...state.result });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }));

export default challenge;
