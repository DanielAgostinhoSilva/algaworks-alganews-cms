import usePageTitle from "../../core/hooks/usePageTitle";
import DefaultLayout from "../layouts/Dfeault";
import PostForm from "../features/PostForm";

export default function PostCreateView() {
    usePageTitle('Novo Post')
    return <DefaultLayout>
        <PostForm />
    </DefaultLayout>
}