import {ReactNode, FC} from "react";

export type IrregularVerbs = {
    key: number
    verb: string
    secondForm: string
    thirdForm: string
    translate: string
}

export type IrregularVerbsForm = {
    key: number
    verb: string
    secondForm: JSX.Element
    thirdForm: JSX.Element
    translate: string
}

export type LearnPageProps = {
    words: string[]
}

//
// export type PersonProps = {
//     name: string,
// }
//
// type MergedProps = LearnPageProps & PersonProps
//
// const obj: MergedProps = {
//     words: [],
//     name: 'Viktor'
// }
//
// console.log(obj)