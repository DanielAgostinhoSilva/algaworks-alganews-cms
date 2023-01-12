import * as DL from "./Default.layout.styles"
import Navbar from "../../components/NavBar/NavBar";
import Logo from "../../components/Logo/Logo";
import SessionController from "../../components/SessionController";
import confirm from "../../../core/utils/confirm";
export interface DefaultLayoutProps {
    children: React.ReactNode
}

export function DefaultLayout({children}: DefaultLayoutProps) {
    return <DL.Wrapper>
        <DL.Header>
            <Logo />
        </DL.Header>
        <DL.Main>
            <DL.Navigation>
                <Navbar />
            </DL.Navigation>
            <DL.FeaturedContent>
                {children}
            </DL.FeaturedContent>
            <DL.Aside>
                <SessionController
                    name={'Fulano Silva'}
                    description={'editor há 2 anos'}
                    onLogout={() => {
                        confirm({
                            title: 'Você quer deslogar?'
                        })
                    }}
                />
            </DL.Aside>
        </DL.Main>

    </DL.Wrapper>
}

export default DefaultLayout