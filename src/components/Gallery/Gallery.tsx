import React from 'react';
import { Grid, Box } from '@mui/material';
import { projects } from '../../common/constants';
import { CardTech } from '../CardTech';

const Gallery = () => (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent='start'
        alignItems="flex-start"
        spacing={2}
      >
        {projects.map((project) => (
          <Grid key={project.id} item xs={12} sm={6} md={4} display='flex' justifyContent='center'>
            <CardTech project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
);

export default Gallery;
