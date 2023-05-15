import Tech from './Tech';
import Link from './Link';

interface Project {
  id: string;
  tech: Tech;
  title: string;
  desc: string;
  img: Link;
  demo: Link;
  github: Link;
  stackblitz?: Link;
}

export default Project;
