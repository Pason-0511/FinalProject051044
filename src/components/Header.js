import { 
    Divider,
    Icon,
    Button,
    makeStyles,
    Toolbar, 
    Typography,
} from '@material-ui/core'
import React from 'react';
import BusinessIcon from '@material-ui/icons/Business';
import BuildIcon from '@material-ui/icons/Build';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FaceIcon from '@material-ui/icons/Face';
import PowerIcon from '@material-ui/icons/Power';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    title:{
  
        flexGrow:1,
        fontsize:50,
        textTransform:"uppercase",
        fontFamily: "Comic Sans MS",
        color:"pink",
    },
    subtitle:{
        
        fontsize:20,
        textTransform:"uppercase",
        fontFamily: "Microsoft JhengHei",
        color:"IndianRed",
        justifyContent:"flex-end",

    },
    menucolumn:{
        
        fontsize:"large",
        textTransform:"uppercase",
        fontFamily: "Comic Sans MS",
        color:"LightCoral",      
    },
    menuButton: {
      ' & > *': {
        margin: theme.spacing(7),
        padding: '10px 15px',   
        justifyContent: 'center'
      }
    },
  }));

const Header = () => {
    const classes=useStyles();
    let history=useHistory();

    return (
        <>
            <Toolbar >
            <Typography variant="h4" align="left" color='primary' className={classes.title}>
            Wellcome to B&L
            <Typography variant="h6" align="right"color='secondary'className={classes.subtitle}>
            電話專線:03-4861-363 | 服務時間 : 8:00~12:00 ， 13:00~17:00 (例假日公休) 
            </Typography>                  
            <Divider />
            <br></br>           
            <Typography variant="h3" align="center"  className={classes.menucolumn}>
                <Icon fontsize='large' >
                    <BusinessIcon/>
                    </Icon >
                    B&L Company    
            </Typography> 
                          
                <Typography >                 
                    <body className={classes.menuButton}>
                        <Button onClick={( )=>{history.push('/Secondcontent')}} size="large" align="center"  style={{color:"pink"}}><BuildIcon></BuildIcon>水泥鑽頭</Button>
                        <Button onClick={( )=>{history.push('/Thirdcontent')}}color="primary" size="large" style={{color:"LightSteelBlue"}}><PowerIcon></PowerIcon>切削工具</Button>
                        <Button onClick={( )=>{history.push('/Fourthcontent')}}color="secondary" size="large" style={{color:"MediumPurple"}}><FitnessCenterIcon></FitnessCenterIcon>加工服務</Button>
                        <Button onClick={( )=>{history.push('/Fifthcontent')}}color="inherit" size="large" style={{color:"BurlyWood"}} ><FaceIcon></FaceIcon>關於我們</Button>
                        <Button onClick={( )=>{history.push('/')}}color="inherit" size="large" style={{color:"PaleVioletRed"}} ><HomeIcon></HomeIcon>返回首頁</Button>
                    </body>
                </Typography>        
                </Typography> 
            </Toolbar>
        </>
    );
}
export default Header;
