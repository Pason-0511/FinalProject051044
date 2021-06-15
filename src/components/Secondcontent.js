import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import image2_6 from './image/2-6.jpg';
import image2_7 from './image/2-7.jpg';
import image2_10 from './image/2-10.jpg';

const useStyles = makeStyles({
  root: {
    MaxWidth:300
    
  },
  media: {
    height: 508
   
  },
});
export default function Secondcontent() {
  const classes = useStyles();

  return (


    <Grid  container spacing={3} justify='flex-start' alignContent='c'>
    <Grid item xs={12} sm={6} md={4} >
    <Card className={classes.root}  >
    <CardActionArea>

        <CardMedia
          className={classes.media}
          image={image2_7}
          title="直柄鑽頭"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            直柄鑽頭
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          一般鑽孔，可廣泛使用。
          </Typography>


    </CardContent>
    </CardActionArea>
    </Card>
    </Grid> 




    <Grid item xs={12} sm={6} md={4}>

    <Card className={classes.root}  >
    <CardActionArea>


      <CardMedia
          className={classes.media}
          image={image2_6}
          title="六角鑽頭"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            六角鑽頭
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            壽命長、超耐用。
          </Typography>
      </CardContent>
    </CardActionArea>
    </Card>
    </Grid> 

    <Grid item xs={12} sm={6} md={4}>

    <Card className={classes.root}  >
    <CardActionArea>
      <CardMedia
          className={classes.media}
          image={image2_10}
          title="免出力鑽頭"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            免出力鑽頭
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            方便、好用、超推薦!
          </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    </Grid> 
    </Grid> 

  );

}