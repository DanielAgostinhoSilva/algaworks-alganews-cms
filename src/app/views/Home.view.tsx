import DefaultLayout from "../layouts/Dfeault";
import PostList from "../features/PostList";
import UserPerformance from "../features/UserPerformance";
import usePageTitle from "../../core/hooks/usePageTitle";
import UserTopTags from "../features/UseTopTags";
import UserEarnings from "../features/UserEarnings";


export default function Home() {
    usePageTitle('Home')

    return <DefaultLayout>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '32px'}}>
            <UserTopTags />
            <UserEarnings />
        </div>
        <UserPerformance />
        <PostList />
    </DefaultLayout>
}