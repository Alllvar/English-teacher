import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import { data } from '../../../library/constants/irregular-verbs'
import { IrregularVerb } from '../../../library/types/irregular-verbs';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormValues {
    words: Partial<IrregularVerb>[]
}

const schema = yup.object({
    words: yup.array()
        .of(
            yup.object().shape({
                secondForm: yup.string().required(),
                thirdForm: yup.string().required(),
            })
        ).min(data.length)
}).required();

export const Challenge = () => {
    const { register, control, getValues, watch } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: { words: [] }
    })

    const { fields, append } = useFieldArray({
        name: 'words',
        shouldUnregister: false,
        control
    })

    const handleStart = () => {
        append({ secondForm: '', thirdForm: '',  })
    }

    const handleContinue = () => {
        if (fields.length < data.length) {
            append({ secondForm: '', thirdForm: '',  })
        } else {
            console.log(getValues(), 'getValues()')
        }
    }

    const index = fields.length - 1;
    const secondFormName: string = `words.${index}.secondForm`;
    const thirdFormName: string = `words.${index}.thirdForm`;

    if (!fields.length) {
        return (
            <button onClick={handleStart} type="button">Start</button>
        )
    }

    // @ts-ignore
    const secondFormValue = watch(secondFormName)
    // @ts-ignore
    const thirdFormValue = watch(thirdFormName)
    // @ts-ignore
    const isInvalid = secondFormValue !== data[index].secondForm && thirdFormValue !== data[index].thirdForm

    return (
        <>
            <div key={fields[index].id} style={{ display: 'flex' }}>
                <span>{data[index].verb}</span>
                {/* @ts-ignore */}
                <input {...register(secondFormName, {})} />
                {/* @ts-ignore */}
                <input {...register(thirdFormName, {})} />
            </div>
            {data.length > index ?
                 (<button onClick={handleContinue} type="button" disabled={isInvalid}>Continue</button>)
                : null}
        </>
    )
}