import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

function Post(props) {

    const [post, setPost] = useState({})

    const {id} = useParams()
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then((result) => setPost(result.data))
    }
    , [id])

    return (
        <div>
            <div>
                <b>id</b> : {post.id}
            </div>
            <div>
                <b>userDd</b> : {post.userId}
            </div>
            <div>
                <b>Title</b> : {post.title}
            </div>
            <div>
                <b>Body</b> : {post.body}
            </div>
        </div>
    );
}

export default Post;