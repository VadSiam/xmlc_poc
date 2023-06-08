import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MintTokens from './MintTokens';
import VerifyCompany from './VerifyCompany';
import { CardContent, FormControlLabel, Switch, Typography } from '@mui/material';
import { StyledBlockContainer } from '../../UserDashboard/Charts/Charts';
import MintNFT from './MintNFT';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MintCreateTabPanel() {
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <StyledBlockContainer >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Verify" {...a11yProps(0)} sx={{ fontSize: 20 }} />
            <Tab label="Mint" {...a11yProps(1)} sx={{ fontSize: 20 }} />
            <Tab label="Mint NFT" {...a11yProps(2)} sx={{ fontSize: 20 }} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <FormControlLabel
            control={<Switch
              checked={checked}
              onChange={handleChangeSwitch}
              inputProps={{ 'aria-label': 'controlled' }} />} label="Verify!(DEV)"
          />
          {checked
            ? (
              <>
                <CardContent
                  sx={{ border: '1px solid green', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '35%' }}
                >
                  <Typography
                    sx={{ textAlign: 'center' }}
                    variant="h5" component="div" color="green">
                    Verified company
                  </Typography>
                </CardContent>
                <br />
                <br />
              </>
            )
            : (
              <>
                <CardContent
                  sx={{ border: '1px solid grey', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '35%' }}
                >
                  <Typography
                    sx={{ textAlign: 'center' }}
                    variant="h5" component="div" color="text.secondary">
                    Unverified company
                  </Typography>
                </CardContent>
                <br />
                <Typography>Please verify your company</Typography>
                <br />
                <VerifyCompany />
              </>
            )
          }
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MintTokens />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MintNFT />
        </TabPanel>
      </Box>
    </StyledBlockContainer>
  );
}