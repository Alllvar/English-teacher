import React from 'react';
import { Form, Table, } from 'antd';
import { columns, data } from '../../library/constants/irregular-verbs'
import { IrregularVerbs, IrregularVerbsForm } from '../../library/types/irregular-verbs';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'antd/dist/antd.css';
import './index.css'

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
}

interface IFormInput {
    firstName: String;
    gender: GenderEnum;
}

export const TableForm: React.FC<{ mode: string}> = ({ mode}) => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);


    const mergedColumns = columns.map((col) => {
        // if (!col.editable) {
        //     return col;
        // }

        return {
            ...col,
            onCell: () => ({
                inputType: 'text',
                // dataIndex: col.verb,
                title: col.title,
                key: col.key
            }),
        };
    });

    return (
        <div className="table-container">
            {mode === 'introduction'
                ? <Table<IrregularVerbs>
                    dataSource={data}
                    bordered
                    pagination={false}
                >
                    <Table.Column<IrregularVerbs> key="key" title="Verb" dataIndex="verb" />
                    <Table.Column<IrregularVerbs> key="key" title="Second Form" dataIndex="secondForm" />
                    <Table.Column<IrregularVerbs> key="key" title="Third Form" dataIndex="thirdForm" />
                    <Table.Column<IrregularVerbs> key="key" title="Translate" dataIndex="translate" />
                </Table>
                : <Form onFinish={handleSubmit(onSubmit)}>
                    {/*<Table<IrregularVerbsForm>*/}
                    {/*    dataSource={data}*/}
                    {/*    bordered*/}
                    {/*    pagination={false}*/}
                    {/*>*/}
                    {/*    <Table.Column<IrregularVerbs> key="key" title="Verb" dataIndex="verb" />*/}
                    {/*    <Table.Column<IrregularVerbs> key="key" title="Second Form" dataIndex="secondForm" />*/}
                    {/*    <Table.Column<IrregularVerbs> key="key" title="Third Form" dataIndex="thirdForm" />*/}
                    {/*    <Table.Column<IrregularVerbs> key="key" title="Translate" dataIndex="translate" />*/}
                    {/*</Table>*/}
                    {/*<Table<IrregularVerbs>*/}
                    {/*    components={{*/}
                    {/*        body: {*/}
                    {/*            cell: EditableCell,*/}
                    {/*        },*/}
                    {/*    }}*/}
                    {/*    bordered*/}
                    {/*    dataSource={data}*/}
                    {/*    // columns={mergedColumns}*/}
                    {/*    rowClassName="editable-row"*/}
                    {/*    pagination={false}*/}
                    {/*/>*/}

                    {/*<Table<IrregularVerbs>*/}
                    {/*    dataSource={data}*/}
                    {/*    bordered*/}
                    {/*    pagination={false}*/}
                    {/*>*/}
                    {/*    /!*<Table.Column<IrregularVerbs> key="key" title="Verb" dataIndex="verb" />*!/*/}
                    {/*    <Table.Column<IrregularVerbs> key="key" title="Verb" dataIndex="verb" />*/}
                    {/*    <Table.Column<IrregularVerbs> key="key" title="Second Form" dataIndex="secondForm" />*/}
                    {/*    <Table.Column<IrregularVerbs> key="key" title="Third Form" dataIndex="thirdForm" />*/}
                    {/*    <Table.Column<IrregularVerbs> key="key" title="Translate" dataIndex="translate" />*/}
                    {/*</Table>*/}


                    {/*<label>First Name</label>*/}
                    {/*<input {...register("firstName")} />*/}
                    {/*<label>Gender Selection</label>*/}
                    {/*<select {...register("gender")} >*/}
                    {/*    <option value="female">female</option>*/}
                    {/*    <option value="male">male</option>*/}
                    {/*    <option value="other">other</option>*/}
                    {/*</select>*/}
                    {/*<input type="submit" />*/}
                </Form>
            }
        </div>
    )
}