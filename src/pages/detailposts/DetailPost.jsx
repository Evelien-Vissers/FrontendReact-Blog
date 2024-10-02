import './DetailPost.css'
import {Link, useParams} from "react-router-dom";
import posts from '../../constants/data.json';
import {useEffect, useState} from "react";
import { formatDate } from "../../helpers/dateHelper.js";

const DetailPost = () => {
    const {id} = useParams(); // Haal de dynamische ID uit de URL (bijv. /posts/123)
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Zoek de corresponderende blogpost obv ID
        const foundPost = posts.find((p) => p.id === parseInt(id));
        setPost(foundPost);
    }, [id]);

    if(!post) {
        return <div>Blogpost niet gevonden.</div>;
    }

    return (
        <div className="detailpost-container">
            <h1>{post.title} ({post.readTime} minuten</h1>
            <h2>{post.subtitle}</h2>
            <p className = "detail-author">Geschreven door {post.author} op {formatDate(post.created)}
            </p>
            <p className="detail-content">{post.content}</p>
            <p className="detail-stats">
                {post.comments} reacties - {post.shares} keer gedeeld
            </p>
            <Link to="/allposts" className ="back-link">Terug naar de overzichtspagina</Link>
        </div>
    )
}

export default DetailPost;