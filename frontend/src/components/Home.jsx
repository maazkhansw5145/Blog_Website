import { Grid } from "@material-ui/core";

import Banner  from "./home/Banner";
import Catagories from "./home/Catagories";
import Posts from "./home/Posts";

const Home = () => {
    return (<>
    <Banner/>
    <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
            <Catagories />
        </Grid>
        <Grid container item xs={12} sm={10} lg={10}>
            <Posts />
        </Grid>
    </Grid>  
    </>
    )
}

export default Home;