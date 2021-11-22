import React from 'react'
import Button from '../src/components/Button'

const ButtonView = () => {
    return (
        <>
            <Button type={'info'}>按钮1</Button>
            <br/>
            <Button />
            <br/>
            <Button type={'dangerous'}>危险</Button>
        </>
    )
}

export default ButtonView