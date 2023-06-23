import * as React from 'react';
import {
  AppBar, Box, Typography, Toolbar,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SwitchLang } from '../SwitchLang';
import { SwitchTheme } from '../SwitchTheme';
import styles from './AppBar.module.scss';
import { social } from '../../common/constants';

const AppBarCustom = () => {
  const { t } = useTranslation();
  const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLElement>(null);
  const [anchorSocial, setAnchorSocial] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorMenu);
  const openSocial = Boolean(anchorSocial);
  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    setState: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
  ) => {
    setState(event.currentTarget);
  };
  const handleClose = (
    setState: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
    url?: string,
  ) => {
    setState(null);
    if (url) window.open(url, '__blank');
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <PetsIcon sx={{ mr: 2 }} />
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          sx={{ flexGrow: 1 }}
        >
          {t('main-title.long')}
        </Typography>
        <Box
          sx={{ flexDirection: { sm: 'row' }, display: { xs: 'flex' } }}
        >
          <IconButton
            onClick={(event: React.MouseEvent<HTMLElement>) => handleClick(event, setAnchorSocial)}
            aria-label="delete"
            size="large"
          >
            <ShareIcon variant="mainbar" fontSize="inherit" />
          </IconButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorSocial}
            open={openSocial}
            onClose={() => handleClose(setAnchorSocial)}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={() => handleClose(setAnchorSocial, social.twitter)}>
              <TwitterIcon /><span className={styles.menuItemLabel}>Twitter</span>
            </MenuItem>
            <MenuItem onClick={() => handleClose(setAnchorSocial, social.github)}>
              <GitHubIcon /><span className={styles.menuItemLabel}>GitHub</span>
            </MenuItem>
            <MenuItem onClick={() => handleClose(setAnchorSocial, social.linkedin)}>
              <LinkedInIcon /><span className={styles.menuItemLabel}>LinkedIn</span>
            </MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{ flexDirection: { sm: 'row' }, display: { xs: 'none', sm: 'flex' } }}
        >
          <SwitchTheme />
          <SwitchLang />
        </Box>
        <Box
          sx={{ flexDirection: { xs: 'row' }, display: { xs: 'flex', sm: 'none' } }}
        >
          <IconButton
            onClick={(event: React.MouseEvent<HTMLElement>) => handleClick(event, setAnchorMenu)}
            aria-label="delete"
            size="large"
          >
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorMenu}
            open={openMenu}
            onClose={() => handleClose(setAnchorMenu)}
            TransitionComponent={Fade}
          >
            <MenuItem><SwitchTheme /></MenuItem>
            <MenuItem><SwitchLang /></MenuItem>
            <MenuItem onClick={() => handleClose(setAnchorMenu)}>Contact</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
