import DefaultLayout from "../layouts/Dfeault";
import EditorProfile from "../features/EditorProfile";

export default function EditorProfileView() {
    return <DefaultLayout>
        <EditorProfile hidePersonalData={true}/>
    </DefaultLayout>
}