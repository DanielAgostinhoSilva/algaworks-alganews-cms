import * as VD from './ValueDescriptor.styles'

export interface ValueDescriptorProps {
    descriptioin: string
    value: number
    color: 'primary' | 'default'
    isCurrency?: boolean
}

export default function ValueDescriptor({descriptioin, value, isCurrency, color}: ValueDescriptorProps) {
    return <VD.Wrapper color={color}>
        <span className={'Description'}>{descriptioin}</span>
        <div>
            {
                isCurrency &&
                <span className={'Currency'}>
                    {'R$'}
                </span>
            }
            <span className={'Value'}>
               {value.toLocaleString('pt-br')}
            </span>
        </div>
    </VD.Wrapper>
}