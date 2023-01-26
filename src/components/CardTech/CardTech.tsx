import React from 'react';
import {
  Card, CardActions, CardContent, CardMedia, Button, IconButton,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CodeIcon from '@mui/icons-material/Code';
import examplePic from '../../assets/contemplative-reptile.jpg';
import { Project } from '../../common/model';

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
        <Button variant="outlined" size="small" startIcon={<LinkIcon />}>Link</Button>
        <IconButton aria-label="github">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="stackblitz">
          <CodeIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardTech;
