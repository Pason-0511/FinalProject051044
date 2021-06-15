import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import image6_1 from './image/6-1.jpg';

const useStyles = makeStyles({
  root: {
    MaxWidth:300
    
  },
  media: {
    height: 468
  },
});
export default function Fifcontent() {
  const classes = useStyles();
  return (
    <Grid  container spacing={3} justify='center' alignItems='stretch'>
    <Grid item xs={10} >
    <Card className={classes.root}  >
    <CardActionArea>
      <CardMedia
          className={classes.media}
          image={image6_1}
          title="關於我們"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            關於我們
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          倍力昌有限公司，設立於民國94年。從企業社到現在的倍力昌有限公司，歷經20多年的五金買賣製造公司，主要從事五金買賣、整形及加工，提供高品質的商品就是我們要追求的！不管是平、尖水泥鑽頭應有盡有，或是全系列鑽頭絲攻,絞刀,铣刀,圓棒,全鎢鋼切削工具,各種捨棄式車刀。當然加工及整形也是合作廠商非常肯定的高品質及高效率，值得客戶信賴。
          </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
    </Grid> 
    </Grid> 
  );
}