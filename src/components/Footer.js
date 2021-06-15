import React from 'react'
import { 
    Divider,
    makeStyles,
    Toolbar, 
    Typography,
} from '@material-ui/core'
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles((theme) => ({

    footertitle:{
      
        flexGrow:1,
        fontsize:10,
        fontFamily: "Microsoft JhengHei",
        color:"IndianRed",

    },
    contactus:{
        fontFamily: "Comic Sans MS",
        color:"IndianRed",
    },
    medialink:{
        fontFamily: "Comic Sans MS",
        fontsize:30,
    },
    address:{
        fontFamily: "Comic Sans MS",
        color:"MediumPurple",
    }

}));





const Footer = () => { 
    const classes=useStyles();
    return (
        <>
        <Divider />
        <Toolbar >
            
            <Typography variant="h5" align="left" color='primary' className={classes.footertitle}>
            倍力昌有限公司
                
            <Typography variant="h6" align="left" color='primary' className={classes.address}>
                <LocationOnIcon></LocationOnIcon>地址:桃園市新屋區下田里德尚路350巷82號
                <br/>
                <LocationOnIcon></LocationOnIcon>Address:No. 822, Ln. 350, Deshang Rd., Xinwu Dist., Taoyuan City 327003 , Taiwan (R.O.C.)
            <Typography variant="h6" gutterBottom className={classes.contactus}>
                Contact us:
            <Typography className={classes.medialink}>
                <br/>
                <Link href="https://www.facebook.com/%E5%80%8D%E5%8A%9B%E6%98%8C%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-1261867120644397" onClick={window.open}>
                    <FacebookIcon></FacebookIcon>Facebook
                </Link>
                <br/>
                <br/>
                <Link href="https://instagram.com/beylih1123?utm_medium=copy_link"  onClick={window.open} color="inherit" >
                    <InstagramIcon></InstagramIcon>Instagram
                </Link>
            </Typography>
            </Typography>   
            </Typography>
            </Typography>
            </Toolbar>           
        </>
    )
}

export default Footer
