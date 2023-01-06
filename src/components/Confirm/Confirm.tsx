import * as C from "./Confirm.styles"
import Button from "../Button/Button";

export interface ConfirmProps {
    title: string
    onConfirm: () => any
    onCancel: () => any
}

export default function Confirm({title, onConfirm, onCancel}: ConfirmProps) {
    return <C.Wrapper>
        <C.Title>{title}</C.Title>
        <C.ButtonDisplay>
            <Button variant={'danger'} label={'Não'} onClick={onCancel}/>
            <Button variant={'primary'} label={'Sim'} onClick={onConfirm}/>
        </C.ButtonDisplay>
    </C.Wrapper>
}