import DefaultLayout from "../layouts/Dfeault";
import PostList from "../features/PostList";
import UserPerformance from "../features/UserPerformance";
import usePageTitle from "../../core/hooks/usePageTitle";
import UserTopTags from "../features/UseTopTags";


export default function Home() {
    usePageTitle('Home')

    return <DefaultLayout>
        <UserTopTags />
        <UserPerformance />
        <PostList />
    </DefaultLayout>
}