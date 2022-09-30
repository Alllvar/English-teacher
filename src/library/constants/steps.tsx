import { Steps } from '../types/steps';
import { data } from './irregular-verbs'
import { TooltipContainer } from '../../components/Tooltip';
import { StudyingPage } from "../../modules/StudyingPage";

export const steps: Steps[] = [
    {
        title: 'Translate',
        content: <TooltipContainer step="translate" />,
    },
    {
        title: 'Second form of the verb',
        content: <TooltipContainer step="secondForm" />,
    },
    {
        title: 'Third form of the verb',
        content: <TooltipContainer step="thirdForm" />,
    },
];

// export const steps1: Steps[] = data.map((el) => {
//     return {
//         title: `Part ${el.key}`,
//         content: <StudyingPage data={el}/>
//     }
// })