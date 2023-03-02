import React from 'react';
import {
  Card, CardActions, CardContent, CardMedia, Button, IconButton,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import { Project } from '../../common/model';

type CardTechProps = {
  project: Project;
}

const CardTech = ({ project }: CardTechProps) => {
  const { t } = useTranslation();

  const imgUrl = new URL(`../../assets/${project.img.url}`, import.meta.url).href;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        title={project.img.title}
        alt={project.img.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {t(project.title)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t(project.desc)}
        </Typography>
      </CardContent>
      <CardActions >
        <Button
          onClick={() => window.open(project.demo.url, '_blank')}
          variant="outlined"
          size="small"
          startIcon={<LinkIcon />}
        >Demo</Button>
        <IconButton onClick={() => window.open(project.github.url, '_blank')} aria-label="github">
          <GitHubIcon />
        </IconButton>
        <IconButton onClick={() => window.open(project.stackblitz.url, '_blank')} aria-label="stackblitz">
          <CodeIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardTech;
