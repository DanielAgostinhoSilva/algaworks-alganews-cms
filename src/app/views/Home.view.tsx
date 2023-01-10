import DefaultLayout from "../layouts/Dfeault";
import PostList from "../features/PostList";
import UserMetrics from "../features/UserMetrics";
import usePageTitle from "../../core/hooks/usePageTitle";


export default function Home() {
    usePageTitle('Home')

    return <DefaultLayout>
        <UserMetrics />
        <PostList />
    </DefaultLayout>
}