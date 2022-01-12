import { Grid } from "@material-ui/core";
import Post from "./Post";
import {Link, useLocation} from "react-router-dom";
import { useState,useEffect } from "react";
import { getAllPosts } from "../../service/api";

const Posts = () => {
    const [posts,getPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchData = async() =>{
            let data = await getAllPosts(search);
            getPosts(data);
            console.log(data);
        }
        fetchData();
    },[search]);

    return (
    posts.map(post => (
        <Grid lg={3} xs={12} sm={4}>
        <Link to={`/details/${post._id}`} style={{textDecoration:"none",color:"inherit"}}>
        <Post post={post}/>
        </Link>
    </Grid>
    ))

    ) 
}

export default Posts;