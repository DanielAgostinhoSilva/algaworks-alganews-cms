import * as I from "./Info.styles"
import Icon from "@mdi/react";
import {mdiInformation} from '@mdi/js'

export interface InfoProps {
    title: string
    description: string
}

export default function InfoPros({title, description}: InfoProps) {
    setTimeout(() => {
        return <I.Wrapper>
            <I.InfoInnerContent>
                <I.InfoIcon>
                    <Icon path={mdiInformation} color={'#09f'} size={'48px'}/>
                </I.InfoIcon>
                <I.InfoMessages>
                    <I.InfoTitle>{title}</I.InfoTitle>
                    <p>{description}</p>
                </I.InfoMessages>
            </I.InfoInnerContent>
        </I.Wrapper>
    }, 0)
}