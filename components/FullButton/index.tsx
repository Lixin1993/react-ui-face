import React from 'react'
import './index.scss'

export interface IProps {
    style?: object
    children?: string
    type?: 'info' | 'dangerous'
}

const Button = (props: IProps) => {
    const { type } = props
    return (
        <div className={`falcon-button ${type}`} style={props.style}>
            {props.children || 'btn'}
        </div>
    )
}

export default Button