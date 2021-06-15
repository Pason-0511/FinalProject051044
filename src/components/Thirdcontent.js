import React from 'react'
import { GridList,GridListTile ,Typography,} from '@material-ui/core'
import image3_1 from './image/3-1.jpg';
import image3_2 from './image/3-2.jpg';
import image3_3 from './image/3-3.jpg';
import image3_4 from './image/3-4.jpg';
import image3_5 from './image/3-5.jpg';
import image3_6 from './image/3-6.jpg';


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
const Thirdcontent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6" align="right"color='secondary'className={classes.title}>
            金屬加工切削工具，全系列產品銷售，在貨充足，歡迎訂購（特殊規格尺寸訂製） 
            </Typography> 
            <GridList cellHeight={300} cols={3} style={{ width:1000,height:572}}>
                <GridListTile key={image3_1}>
                    <img src={image3_1}  alt="" />
                </GridListTile>
                <GridListTile key={image3_2}>
                    <img src={image3_2} alt=""  />
                </GridListTile>
                <GridListTile key={image3_3}>
                    <img src={image3_3} alt="" />
                </GridListTile>
                <GridListTile key={image3_4}>
                    <img src={image3_4} alt="" />
                </GridListTile>
                <GridListTile key={image3_5}>
                    <img src={image3_5} alt="" />
                </GridListTile>
                <GridListTile key={image3_6}>
                    <img src={image3_6} alt="" />
                </GridListTile>
            </GridList>
            
        </div>
    )
}

export default Thirdcontent
