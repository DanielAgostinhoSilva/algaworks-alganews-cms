import * as I from './Input.styles'
import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export default function Input({label, ...props}: InputProps) {
    return <I.Wrapper>
        {
            label &&
            <span>{label}</span>
        }
        <input type="text" {...props}/>
    </I.Wrapper>
}