import {AppBar,makeStyles,Toolbar,Typography} from "@material-ui/core";
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    component : {
        background: "#232323",
        color: "black",
    },
    container : {
        justifyContent:"center",
        '& > *' : {
            padding: 20,
            color: "#eee",
            textDecoration: "none",

        }
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
            <Link to={"/"}>
               <Typography >HOME</Typography> 
            </Link>
            <Link to={"/about"}>
               <Typography>ABOUT</Typography>
            </Link> 
            <Link to={"/contact"}>
               <Typography>CONTACT</Typography>  
            </Link>   
            </Toolbar>
            </AppBar>
        </>
    );
} 

export default Header;