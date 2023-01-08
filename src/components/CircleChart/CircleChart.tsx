import * as CC from "./CircleChart.styles"

export interface CircleChartProps {
    size: number
    progress: number
    caption?: string
    theme?: 'default' | 'primary'
    strokeWidth?: number
}

function CircleChart({}: CircleChartProps) {
    return <CC.Wrapper>
        todo: circle chart
    </CC.Wrapper>
}

export default CircleChart