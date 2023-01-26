import { Project, Tech } from './model';

const reactProject: Project = {
  id: '1',
  tech: Tech.REACT,
  title: 'projects.react.title',
  desc: 'projects.react.desc',
};

const angularProject: Project = {
  id: '2',
  tech: Tech.ANGULAR,
  title: 'projects.angular.title',
  desc: 'projects.angular.desc',
};

const vueProject: Project = {
  id: '3',
  tech: Tech.VUE,
  title: 'projects.vue.title',
  desc: 'projects.vue.desc',
};

const svelteProject: Project = {
  id: '4',
  tech: Tech.SVELTE,
  title: 'projects.svelte.title',
  desc: 'projects.svelte.desc',
};

const projects: Project[] = [
  reactProject,
  angularProject,
  vueProject,
  svelteProject,
];

export {
  projects,
};
