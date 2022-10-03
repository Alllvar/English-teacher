import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import { data } from '../../../library/constants/irregular-verbs'
import { IrregularVerb } from '../../../library/types/irregular-verbs';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormValues {
    words: IrregularVerb[]
}

const schema = yup.object({
    key: yup.number().positive().integer().required(),
    verb: yup.string().required(),
    secondForm: yup.string().required(),
    thirdForm: yup.string().required(),
    translate: yup.string().required(),
}).required();

export const Challange = () => {
    const { control, register } = useForm<FormValues>({
        defaultValues: { words: data },
        resolver: yupResolver(schema)
    })
    const { fields } = useFieldArray({
        name: 'words',
        control,
    })

    return (
        <>
            {fields.map((field, index) => {
                console.log(control, 'field')
                return (
                    <div key={field.id} style={{ display: 'flex' }}>
                        <span>{field.verb}</span>
                        <input {...register(`words.${index}.secondForm`)} />
                        <input {...register(`words.${index}.thirdForm`)} />
                        <span>{field.translate}</span>
                    </div>
                )
            })}
        </>
    )
}