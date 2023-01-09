import * as PB from "./ProgressBar.styles"

export interface ProgressBarProps {
    title: string
    progress: number
    theme: 'primary' | 'secondary'
    width?: number
}

export default function ProgressBar({title, progress, theme, width}: ProgressBarProps) {
    return <PB.Wrapper style={{width: width || 'auto'}}>
        <PB.TextShadow progress={progress} theme={theme} >
            {title}
        </PB.TextShadow>
        <PB.CurrentProgress progress={progress} theme={theme}>
            <span>{title}</span>
        </PB.CurrentProgress>
    </PB.Wrapper>
}
