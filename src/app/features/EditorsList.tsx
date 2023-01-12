import styled from "styled-components";
import Profile from "../components/Profile";

export default function EditorsList() {
    return <EditorsListWrapper>
        <Profile editorId={1} name={'Fulano da Silva'} description={'editor há 8 anos'} />
        <Profile editorId={2} name={'Fulano da Silva'} description={'editor há 8 anos'} />
        <Profile editorId={3} name={'Fulano da Silva'} description={'editor há 8 anos'} />
        <Profile editorId={4} name={'Fulano da Silva'} description={'editor há 8 anos'} />
        <Profile editorId={5} name={'Fulano da Silva'} description={'editor há 8 anos'} />
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`