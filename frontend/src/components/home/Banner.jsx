import { makeStyles,Box,Typography } from "@material-ui/core";

const useStyles = makeStyles ({
    image : {
        width: '100%',
        background: `url(${'https://image.freepik.com/free-photo/hacker-working-darkness_53876-94580.jpg'}) center/55% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
        }
    }
})

const Banner = () => {
    const classes = useStyles();
    return (
        <>
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Welcome to Anonymous Blog</Typography>
        </Box>
        </>
    )
}

export default Banner;