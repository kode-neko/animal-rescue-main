import React from 'react';
import { Grid } from '@mui/material';
import { projects } from '../../common/constants';
import { CardTech } from '../../components/CardTech';
import { Section } from '../../components';

const Projects = () => (
    <Section title="title.projects" desc="desc.projects">
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
    </Section>
);

export default Projects;
