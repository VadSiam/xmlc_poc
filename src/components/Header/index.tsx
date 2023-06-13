import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { AppBar, Button, ButtonGroup, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../app/slices/selectors';
import { logout } from '../../app/slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import NotificationButton from './NotificationButton';
import MenuComponent from './MenuComponent';
import { StyledLink } from './styles';

const drawerWidth = 240;

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { isCompanyAdmin } = user ?? {};
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleBackClick = () => {
    navigate(-1);
  };
  const handleNotifyClick = () => {
    navigate('nft');
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onLogout = () => {
    dispatch(logout());
  }

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MENU
      </Typography>
      <Divider />
      <List
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
      >
        <BackButton onClick={handleBackClick} />
        <StyledLink to="/dashboard">
          {isCompanyAdmin ? 'Your token' : 'Tokens Dashboard'}
        </StyledLink>
        <StyledLink to="/nft">
          NFT Dashboard
        </StyledLink>
        {!isCompanyAdmin && (<StyledLink to="/token">
          Listed Tokens
        </StyledLink>)}

      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <AppBar component="nav">
        <Toolbar
          sx={{ display: 'flex', justifyContent: { xs: 'start', sm: 'center' }, alignItems: 'center', textAlign: 'center', height: 60 }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {user && (
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ mr: 2, display: { sm: 'none' } }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar src={user ? `${process.env.PUBLIC_URL}/${user.avatarUrl}` : ''} sx={{ width: 32, height: 32 }} />
            </IconButton>
          )}
          {user ? (
            <StyledLink to="/" >
              <Button
                sx={{ mr: 2, display: { sm: 'none' } }}
                onClick={onLogout}
                variant='outlined'
                color="secondary">
                Logout
              </Button>
            </StyledLink>
          )
            : (
              <ButtonGroup
                sx={{ mr: 2, display: { sm: 'none' } }}
                color="secondary"
                variant='contained'
                aria-label="medium secondary button group"
              >
                <Link style={{ marginRight: 10 }} to="/login">
                  <Button>
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button>
                    Register
                  </Button>
                </Link>
              </ButtonGroup>
            )}
          <Box
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: 60 }}>
            <BackButton onClick={handleBackClick} />
            <StyledLink to="/dashboard">
              {isCompanyAdmin ? 'Your Tokens Dashboard' : 'Tokens Dashboard'}
            </StyledLink>
            {!isCompanyAdmin &&
              (<StyledLink to="/nft">
                NFT Dashboard
              </StyledLink>)
            }
            {!isCompanyAdmin && (<StyledLink to="/token">
              Listed Tokens
            </StyledLink>)}
            {user && (
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar src={user ? `${process.env.PUBLIC_URL}/${user.avatarUrl}` : ''} sx={{ width: 32, height: 32 }} />
                </IconButton>
              </Tooltip>
            )}
            {!isCompanyAdmin && user && (
              <NotificationButton
                onClick={handleNotifyClick} />
            )}
            {user ? (
              <StyledLink to="/" >
                <Button
                  onClick={onLogout}
                  variant='outlined'
                  color="secondary">
                  Logout
                </Button>
              </StyledLink>
            )
              : (
                <ButtonGroup
                  color="secondary"
                  variant='contained'
                  aria-label="medium secondary button group"
                >
                  <Link style={{ marginRight: 10 }} to="/login">
                    <Button>
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button>
                      Register
                    </Button>
                  </Link>
                </ButtonGroup>
              )}
          </Box>
          <MenuComponent onLogout={onLogout} handleClose={handleClose} open={open} anchorEl={anchorEl} />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </React.Fragment>
  );
}

export default Header;