import styled from "styled-components";
import {transparentize} from "polished";

export const Wrapper = styled.div`
  height: 24px;
  color: #fff;
  background-color: ${transparentize(0.85, '#244060')};
  position: relative;
`

export const CurrentProgress = styled.div<{
    progress: number
    theme: 'primary' | 'secondary'
}>`
  height: 100%;
  background-color: ${p => p.theme === 'primary' ? '#09f' : '#274060'};
  width: ${p => p.progress}%;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  white-space: nowrap;
  ${p => p.progress > 0 ? 'padding-left: 4px;' : ''}
  transition: .25s ease;
  z-index: 2;
  position: relative;
`

export const TextShadow = styled.span<{
    progress: number
    theme: 'primary' | 'secondary'
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  color: #274060;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: lowercase;
  overflow: hidden;
  padding-left: 4px;
  white-space: nowrap;
`