import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { Project } from '../../common/model';
import examplePic from '../../assets/contemplative-reptile.jpg';

type CardTechProps = {
  project: Project;
}

const CardTech = ({ project }: CardTechProps) => {
  const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={examplePic}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ minHeight: 64 }}>
          {t(project.title)}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 100 }}>
          {t(project.desc)}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CardTech;
