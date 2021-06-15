import React from 'react'
import { GridList,GridListTile ,Typography,} from '@material-ui/core'
import image4_2 from './image/4-2.jpg';
import image4_4 from './image/4-4.jpg';
import image4_5 from './image/4-5.jpg';
import image4_7 from './image/4-7.jpg';
import image4_9 from './image/4-9.jpg';
import image4_10 from './image/4-10.jpg';
import image4_11 from './image/4-11.jpg';
import image4_12 from './image/4-12.jpg';
import image4_13 from './image/4-13.jpg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      
    },
    gridList: {
      width: 500,
      height: 450,
    },
    title:{
        fontFamily:'Microsoft YaHei'
    },
  }));
const Fourthcontent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6" align="right"color='secondary'className={classes.title}>
            五金零件的CNC車、銑床、鑽孔、攻牙加工，精密鑄造之金屬零件整型處理，品質佳、效率高、服務好。 
            </Typography> 
            <GridList cellHeight={300} cols={3} style={{ width:1000,height:572}}>
                <GridListTile key={image4_4}>
                    <img src={image4_4}  alt="" />
                </GridListTile>
                <GridListTile key={image4_5}>
                    <img src={image4_5} alt=""  />
                </GridListTile>
                <GridListTile key={image4_12}>
                    <img src={image4_12} alt="" />
                </GridListTile>
                <GridListTile key={image4_9}>
                    <img src={image4_9} alt="" />
                </GridListTile>
                <GridListTile key={image4_7}>
                    <img src={image4_7} alt="" />
                </GridListTile>
                <GridListTile key={image4_10}>
                    <img src={image4_10} alt="" />
                </GridListTile>
                <GridListTile key={image4_2}>
                    <img src={image4_2} alt="" />
                </GridListTile>
                <GridListTile key={image4_11}>
                    <img src={image4_11}  alt=""/>
                </GridListTile>
                <GridListTile key={image4_13}>
                    <img src={image4_13} alt="" />
                </GridListTile>
            </GridList>
            
        </div>
    )
}

export default Fourthcontent
