import { useState,useEffect } from 'react';
import {makeStyles,Box,FormControl,InputBase,Button,TextareaAutosize ,MenuItem,Select,InputLabel} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import { createPost,uploadFile } from '../../service/api';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(theme =>({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '48vh',
        objectFit: 'cover'
    },
    form : {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,    
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25,
        background : "#eee",
        borderRadius: "5px"
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        borderRadius: "5px",
        '&:focus-visible': {
            outline: 'none'
        }
    }    
}))

const intialValues = {
    title : '',
    description : '',
    picture : '',
    username : 'Anonymous',
    categories : 'All' ,
    createDate : new Date()
}


const CreateView = () => {
    const classes = useStyles();
    const [post , setPost] = useState(intialValues);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();

    const url = post.picture ? post.picture : "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";

    useEffect(() => {
        const getImage = async () => {
            if(file) {
                const data = new FormData();
                data.append("name",file.name);
                data.append("file",file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
    },[file])

    const savePost = async() => {
        await createPost(post);
        history.push("/");
    }

    const handleChange = (e) => {
        setPost({ ...post,[e.target.name]:e.target.value})
    }

    return (<>
    <Box className={classes.container}>
        <img src={url}  className={classes.image} alt="banner"/>
        <FormControl className={classes.form}>
            <label htmlFor="fileInput">
            <AddCircle fontSize="large" style={{ color : "white" }}/>
            </label>
            <input 
                type="file"
                id="fileInput"
                style={{display:"none"}}
                onChange={(e)=>{setFile(e.target.files[0])}}
                />
            <InputBase 
                onChange={(e) => handleChange(e)}
                placeholder="Title" 
                className={classes.textField}
                name = "title"
                />
            <Button onClick={()=>savePost()} variant="contained" color="primary">PUBLISH</Button>
            </FormControl>
            <Box sx={{ minWidth: 120,marginTop: "1%",borderBottom:"2px solid white",color: "white"}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" style={{color: "white"}}>Categories(Select One)</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={(e) => handleChange(e)}
                name = "categories"

                >
            <MenuItem value={`Music`} > Music </MenuItem>
            <MenuItem value={`Movies`} > Movies </MenuItem>
            <MenuItem value={`Sports`} > Sports </MenuItem>
            <MenuItem value={`Tech`} > Tech </MenuItem>
            <MenuItem value={`Fashion`} > Fashion </MenuItem>
            <MenuItem value={`Others`} > Others </MenuItem>
            </Select>
            </FormControl>
            </Box>
            <TextareaAutosize
                onChange={(e) => handleChange(e)}
                rowsMin={5}
                placeholder = "Tell your Story..."
                className={classes.textarea}
                name = "description"
            />
            
    </Box>
    </>
)}

export default CreateView;