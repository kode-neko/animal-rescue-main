import ThemeMode from './ThemeMode';

interface User {
  name: string;
  email: string;
  lang: string;
  token: string;
  theme: ThemeMode;
}

export default User;
