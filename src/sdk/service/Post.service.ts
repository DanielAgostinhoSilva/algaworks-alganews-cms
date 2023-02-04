import Service from "../Service";
import {Post} from "../@types";

class PostService extends Service {
    static getAllPosts() {
        return this.Http
            .get<Post.Paginated>('/posts')
            .then(this.getData)
    }

    static getExistingPost(id: number) {
        return this.Http
            .get<Post.Paginated>(`/post/${id}`)
            .then(this.getData)
    }

    static insertNewPost(post: Post.Input) {
        return this.Http
            .post<Post.Detailed>('/posts', post)
            .then(this.getData)
    }
}

export default PostService