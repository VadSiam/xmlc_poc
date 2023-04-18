import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { AppBar, Button, ButtonGroup, Toolbar, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../app/slices/selectors';
import { logout } from '../../app/slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;  
  font-weight: 500;
  margin: 10px;
`

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleBackClick = () => {
    navigate(-1);
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
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: 60 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: 60 }}>
            <BackButton onClick={handleBackClick} />
            <StyledLink to="/dashboard">
              Tokens Dashboard
            </StyledLink>
            <StyledLink to="/nft">
              NFT Dashboard
            </StyledLink>
            <StyledLink to="/token">
              Tokens List
            </StyledLink>
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
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={onLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;