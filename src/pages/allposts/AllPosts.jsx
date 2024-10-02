import './AllPosts.css'
import { Link } from 'react-router-dom';
import posts from '../../constants/data.json';

const AllPosts = () => {
    return (
        <div className="all-posts-container">
            <h1>Totaal aantal blogposts: {posts.length}</h1>
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.id} className="post-item">
                        <Link to={`/posts/${post.id}`} className="post-title">
                            {post.title} ({post.author})
                        </Link>
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllPosts;