import {Typography,makeStyles,Box} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 350,
        '& > *': {
            padding: '0 5px 5px 5px'
        },
        "&:hover": {
            background: "#232323",
            color: "white",
        },
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        height: 150
    },
    textColor: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
        textAlign : "center",
        color : "#eee",
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word',
        color:"#eee"
    }
})

const Post = ({post}) => {
    const classes = useStyles();
    const url = post.picture || "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
    const addElipsis = (str,limit) => {
        return str.length > limit ? str.substring(0,limit) + "..." : str;
    }

    return (<>
    <Box className={classes.container}>
        <img src={url} alt="wrapper" className={classes.image} />
        <Typography className={classes.textColor}>{post.categories}</Typography>
        <Typography className={classes.heading}>{addElipsis(post.title,20)}</Typography>
        <Typography className={classes.textColor}>Author : {post.username} </Typography>
        <Typography className={classes.detail}>{addElipsis(post.description,150)}</Typography>
    </Box>
    </>) 
}

export default Post;