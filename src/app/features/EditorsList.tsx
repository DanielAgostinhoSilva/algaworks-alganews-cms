import styled from "styled-components";
import Profile from "../components/Profile";

export default function EditorsList() {
    return <EditorsListWrapper>
        <Profile name={'Fulano da Silva'} description={'editor há 8 anos'} />
        <Profile name={'Fulano da Silva'} description={'editor há 8 anos'} />
        <Profile name={'Fulano da Silva'} description={'editor há 8 anos'} />
        <Profile name={'Fulano da Silva'} description={'editor há 8 anos'} />
        <Profile name={'Fulano da Silva'} description={'editor há 8 anos'} />
    </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`