import styled from "styled-components";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default function UserEarnings() {
    return <UserEarningsWrapper>
        <ValueDescriptor description={'ganhos no mês '} value={560_322.02} color={'primary'} isCurrency />
        <ValueDescriptor description={'ganhos na mês '} value={560_322.02} color={'primary'} isCurrency />
        <ValueDescriptor description={'ganhos de sempre '} value={560_322.02} color={"default"} isCurrency/>
        <ValueDescriptor description={'total de palavras'} value={4_312410} color={"default"}/>
    </UserEarningsWrapper>
}

const UserEarningsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`