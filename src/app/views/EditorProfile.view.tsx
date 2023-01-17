import DefaultLayout from "../layouts/Dfeault";
import EditorProfile from "../features/EditorProfile";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

export default function EditorProfileView() {
    return <DefaultLayout>
        <ErrorBoundary>
            <EditorProfile hidePersonalData={true}/>
        </ErrorBoundary>
    </DefaultLayout>
}