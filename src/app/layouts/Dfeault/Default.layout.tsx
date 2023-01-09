import * as DL from "./Default.layout.styles"
import Navbar from "../../components/NavBar/NavBar";
export interface DefaultLayoutProps {
    children: React.ReactNode
}

export function DefaultLayout({children}: DefaultLayoutProps) {
    return <DL.Wrapper>
        <DL.Header>
            header
        </DL.Header>
        <DL.Main>
            <DL.Navigation>
                <Navbar />
            </DL.Navigation>
            <DL.FeaturedContent>
                {children}
            </DL.FeaturedContent>
            <DL.Aside>
                aisde
            </DL.Aside>
        </DL.Main>

    </DL.Wrapper>
}

export default DefaultLayout