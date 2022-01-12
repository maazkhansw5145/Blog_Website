import { makeStyles,Box,Typography } from "@material-ui/core";
import {Edit,Delete} from "@material-ui/icons";
import  {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

import { getPost,deletePost } from "../../service/api";

const useStyles = makeStyles(theme =>({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 5,
        height : "35px",
        width : "35px",
        "&:hover": {
            cursor :"pointer",
        }
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0',
        color : "#eee",
    },
    subheading: {
        display : "flex",
        margin: "20px 10px",
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    author: {
        color: '#878787',
        display: 'flex',
        margin: '0px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}))

const Details = ({match}) => {
    const classes = useStyles();
    const url ="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
    const [post,setPost] = useState({});
    const history = useHistory();

    useEffect(() => {
        const fetchData = async() =>{
            let data = await getPost(match.params.id);
            setPost(data);
            console.log(data);
        }
        fetchData();
    },[]);

    const deleteBlog = async () => {
        await deletePost(post._id);
        history.push('/');
    }

    return (<>
    <Box className={classes.container}>
        <img src={post.picture || url} alt="first" className={classes.image}/>
        <Box className={classes.icons}>
        <Link to = {`/update/${post._id}`} className={classes.link}>
            <Edit className={classes.icon} color="primary"/>
        </Link>    
            <Delete onClick={ ()=> deleteBlog() } className={classes.icon} color="error"/>
        </Box>
        <Typography className={classes.heading}>{post.title}</Typography>
        <Box className={classes.subheading}>
        <Link to={`/?username=${post.username}`} className={classes.link}>
            <Typography className={classes.author}>Author :<span style={{fontWeight:600}}> {post.username}</span></Typography>
        </Link>
            <Typography style={{marginLeft: "auto", color: "#eee"}}>{new Date(post.createDate).toDateString()}</Typography>
            
        </Box>
        <Typography style={{color : "#eee"}}>{post.description}</Typography>
    </Box>
    </>    
    )
}

export default Details;