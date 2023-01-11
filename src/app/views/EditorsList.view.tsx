import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Dfeault";
import EditorsList from "../features/EditorsList";

export default function EditorslistView() {
    usePageTitle('Lista de editores')
    return <DefaultLayout>
        <EditorsList />
    </DefaultLayout>
}