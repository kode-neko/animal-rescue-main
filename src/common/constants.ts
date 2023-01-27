import { Project, Tech } from './model';

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
    url: 'http://www.kodeneko.com/ar/react',
    alt: 'alt.demo-react',
    title: 'title.demo-react',
  },
  github: {
    url: 'https://github.com/kode-neko/animal-rescue-react.git',
    alt: 'alt.github-react',
    title: 'title.github-react',
  },
  stackblitz: {
    url: 'https://stackblitz.com/edit/vitejs-vite-vzzupr?file=package.json',
    alt: 'alt.stackblitz-react',
    title: 'title.stackblitz-react',
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
    url: 'http://www.kodeneko.com/ar/angular',
    alt: 'alt.demo-angular',
    title: 'title.demo-angular',
  },
  github: {
    url: 'https://github.com/kode-neko/animal-rescue-angular',
    alt: 'alt.github-angular',
    title: 'title.github-angular',
  },
  stackblitz: {
    url: 'https://stackblitz.com/edit/angular-ivy-js24lt?file=src/app/app.component.ts',
    alt: 'alt.stackblitz-angular',
    title: 'title.stackblitz-angular',
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
    url: 'http://www.kodeneko.com/ar/react',
    alt: 'alt.demo-vue',
    title: 'title.demo-vue',
  },
  github: {
    url: 'https://github.com/kode-neko/animal-rescue-react.git',
    alt: 'alt.github-vue',
    title: 'title.github-vue',
  },
  stackblitz: {
    url: 'https://stackblitz.com/edit/vitejs-vite-vzzupr?file=package.json',
    alt: 'alt.stackblitz-vue',
    title: 'title.stackblitz-vue',
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
  stackblitz: {
    url: 'https://stackblitz.com/edit/vitejs-vite-crqjgx?file=README.md',
    alt: 'alt.stackblitz-svelte',
    title: 'title.stackblitz-svelte',
  },
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
