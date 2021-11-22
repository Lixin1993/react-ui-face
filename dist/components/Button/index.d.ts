/// <reference types="react" />
import './index.scss';
export interface IProps {
    style?: object;
    children?: string;
    type?: 'info' | 'dangerous';
}
declare const Button: (props: IProps) => JSX.Element;
export default Button;
