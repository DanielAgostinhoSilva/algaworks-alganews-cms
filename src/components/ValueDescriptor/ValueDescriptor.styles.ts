import styled from "styled-components";

const COLORS = {
    default: '#274060',
    primary: '#0099FF'
}

export const Wrapper = styled.div<{
    color: 'primary' | 'default'
}>`
  display: flex;
  flex-direction: column;
  color: ${COLORS.default};
   
  span.Description {
    font-size: 12px;
    text-transform: lowercase;
  }
  
  span.Currency {
    color: ${p => COLORS[p.color]};
  }
  
  span.Value {
    font-size: 18px;
    font-weight: 800;
    color: ${p => COLORS[p.color]};
  }
`