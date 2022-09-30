import React from 'react';
import { Button, Tooltip } from 'antd';
import { data } from '../../library/constants/irregular-verbs'
import 'antd/dist/antd.css';
import './index.css'

export const TooltipContainer: React.FC<{ step: string }> = ({ step }) => {
    console.log(step, 'mode')
    return (
        <div className="tooltip-container">
            {data.map((el: any) =>
                <Tooltip title={el[step]} key={el.key}>
                    <Button>{el.verb}</Button>
                </Tooltip>
            )}
        </div>
    )
}