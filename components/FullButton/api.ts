interface IProps {
    style?: object
    children?: string
    type?: 'info' | 'dangerous'
}

function a(props: IProps) {
    console.log('-----')
}

export default a