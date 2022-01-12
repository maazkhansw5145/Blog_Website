import { Button,makeStyles, TableCell, TableRow,Table,TableHead,TableBody } from "@material-ui/core";
import { catagories } from "../../constants/data";
import {Link} from "react-router-dom"

const useStyles = makeStyles({
    create: {
        margin: 20,
        background: "blue",
        color:"#fff"
    },
    table : {
        border : "1px solid rgba(224,224,224,1)"
    },
    link: {
        textDecoration: "none",
        color: "interit",
        "&:hover": {
            cursor :"pointer",
        },
    },
    hov: {
        "&:hover": {
            background : "#232323",
            color: "#eee"
        },
    }
})


const Catagories = () => {
    const classes = useStyles();
    return (<>
        <Link to={"/create"} className={classes.link}><Button variant="contained" className={classes.create}>Create a Blog</Button></Link>
        <Table className = {classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell className={classes.hov}>
                    <Link to={`/`} className={classes.link}>
                    <b>All Catagories</b>
                    </Link>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    catagories.map(category => (
                        <TableRow>
                            <TableCell className={classes.hov}>
                            <Link to={`/?category=${category}`} className={classes.link}>
                                <b>{category}</b>
                            </Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </>) 
}

export default Catagories;