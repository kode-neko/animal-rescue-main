import { Project, Tech } from './model';

const reactProject: Project = {
  id: '1',
  tech: Tech.REACT,
  title: 'projects.react.title',
  desc: 'projects.react.desc',
  img: 'react.jpeg',
};

const angularProject: Project = {
  id: '2',
  tech: Tech.ANGULAR,
  title: 'projects.angular.title',
  desc: 'projects.angular.desc',
  img: 'angular.png',
};

const vueProject: Project = {
  id: '3',
  tech: Tech.VUE,
  title: 'projects.vue.title',
  desc: 'projects.vue.desc',
  img: 'vue.png',
};

const svelteProject: Project = {
  id: '4',
  tech: Tech.SVELTE,
  title: 'projects.svelte.title',
  desc: 'projects.svelte.desc',
  img: 'svelte.png',
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
