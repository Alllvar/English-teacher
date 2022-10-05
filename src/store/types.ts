import { IrregularVerb } from 'library/types/data';

export type ChallengeState = {
  quiz: { [key: string]: number } // { [verb form source key]: index of empty verb form }, e.g. { '1': 2 }
  deadline: null | number // e.g. 1634935717604
  startedAt: null | number // e.g. 1634935717604
  result: { [key: string]: null | number } // { [verb form source key]: submitted at timestamp }, e.g. { '1': 1634935717604 }
  source: IrregularVerb[]
};
