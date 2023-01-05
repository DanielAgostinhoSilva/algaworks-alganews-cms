import React from "react";
import * as P from "./Paragraph.styles"

export interface ParagraphProps {
    children: React.ReactNode,
    size?: 'default' | 'small'
}

export default function Paragraph({children, size}: ParagraphProps) {
    return <P.StyledParagraph size={size || 'default'}>
        {children}
    </P.StyledParagraph>
}