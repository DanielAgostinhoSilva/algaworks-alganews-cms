import styled from "styled-components";
import {transparentize} from "polished";

const COLORS = {
    default: '#274060'
}

export const Wrapper = styled.table`
  color: ${COLORS.default};
  background-color: ${transparentize(0.95, COLORS.default)};
`

export const Heading = styled.thead`
  background-color: ${transparentize(0.85, COLORS.default)};
`

export const HeadingRow = styled.tr``

export const HeadingCell = styled.th`
  height: 32px;
  font-size: 14px;
`

export const Body = styled.tbody``

export const BodyRow = styled.tr``

export const BodyCell = styled.td`
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  padding: 0 8px;
`
