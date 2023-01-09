import * as B from './Button.styles'
import {Wrapper} from "./Button.styles";
import {DetailedHTMLProps} from "react";

export interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant: 'danger' | 'text' | 'primary',
    label: string,
}

export default function Button({variant, label, ref, ...props}: ButtonProps) {
    return <B.Wrapper
        variant={variant}
        {...props}
    >
        {label}
    </B.Wrapper>
}