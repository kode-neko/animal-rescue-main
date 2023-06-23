import { Project, Tech } from './model';

const {VITE_REACT, VITE_ANGULAR, VITE_VUE_2} = import.meta.env;

const reactProject: Project = {
  id: '1',
  tech: Tech.REACT,
  title: 'projects.react.title',
  desc: 'projects.react.desc',
  img: {
    url: 'react.jpeg',
    alt: 'alt.img-react',
    title: 'title.img-react',
  },
  demo: {
    url: VITE_REACT,
    alt: 'alt.demo-react',
    title: 'title.demo-react',
  },
  github: {
    url: 'https://github.com/kode-neko/animal-rescue-react.git',
    alt: 'alt.github-react',
    title: 'title.github-react',
  },
};

const angularProject: Project = {
  id: '2',
  tech: Tech.ANGULAR,
  title: 'projects.angular.title',
  desc: 'projects.angular.desc',
  img: {
    url: 'angular.png',
    alt: 'alt.img-react',
    title: 'title.img-react',
  },
  demo: {
    url: VITE_ANGULAR,
    alt: 'alt.demo-angular',
    title: 'title.demo-angular',
  },
  github: {
    url: 'https://github.com/kode-neko/animal-rescue-angular',
    alt: 'alt.github-angular',
    title: 'title.github-angular',
  },
};

const vueProject: Project = {
  id: '3',
  tech: Tech.VUE,
  title: 'projects.vue.title',
  desc: 'projects.vue.desc',
  img: {
    url: 'vue.png',
    alt: 'alt.img-react',
    title: 'title.img-react',
  },
  demo: {
    url: VITE_VUE_2,
    alt: 'alt.demo-vue',
    title: 'title.demo-vue',
  },
  github: {
    url: 'https://github.com/kode-neko/animal-rescue-vue.git',
    alt: 'alt.github-vue',
    title: 'title.github-vue',
  },
};

const svelteProject: Project = {
  id: '4',
  tech: Tech.SVELTE,
  title: 'projects.svelte.title',
  desc: 'projects.svelte.desc',
  img: {
    url: 'svelte.png',
    alt: 'alt.img-react',
    title: 'title.img-react',
  },
  demo: {
    url: 'http://www.kodeneko.com/ar/svelte',
    alt: 'alt.demo-svelte',
    title: 'title.demo-svelte',
  },
  github: {
    url: 'https://github.com/kode-neko/animal-rescue-svelte',
    alt: 'alt.github-svelte',
    title: 'title.github-svelte',
  },
};

const projects: Project[] = [
  reactProject,
  angularProject,
  vueProject,
  // svelteProject,
];

const social = {
  twitter: 'https://twitter.com/KodenekoFront',
  github: 'https://github.com/kode-neko',
  codepen: 'https://codepen.io/kodeneko',
  stackblitz: 'https://stackblitz.com/@kode-neko',
  figma: 'https://figma.com/@kodeneko'
};

export {
  projects,
  social,
};
