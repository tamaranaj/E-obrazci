import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { PersonalDetailsProps } from '../IDCardFormComponent/PersonalDetailsForm';
import { GeneralContext } from '../../context/general.context';
import { useContext, useState } from 'react';
import { PassportForm } from '../PassportFormComponent/PassportFormComponent';
import { IDCardForm } from '../IDCardFormComponent/IDCardForm';

export const TabsComponent=({handleNext}: PersonalDetailsProps)=> {
  const [activeTab, setActiveTab] = useState('1');
  const{language, necessaryDocuments, bgColor} =useContext(GeneralContext)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={activeTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            {necessaryDocuments.idCard && (<Tab label={language == 'mkd'? 'Барање за лична карта': 'Kërkesë për ID'} value="1" sx={bgColor ? {color:'black'}: {color:'white'}} />)}
            {necessaryDocuments.passport && (<Tab label={language == 'mkd'? 'Барање за патна исправа': 'Aplikimi për pasaportë'} value="2" sx={bgColor ? {color:'black'}: {color:'white'}} />)}
            {necessaryDocuments.driverLicense && (<Tab label={language == 'mkd'? 'Барање за возачка дозвола': 'Aplikimi për patentë shofer'} value="3" sx={bgColor ? {color:'black'}: {color:'white'}} />)}
            
          </TabList>
        </Box>
        <TabPanel value="1"><IDCardForm handleNext={handleNext}/></TabPanel>
        <TabPanel value="2"><PassportForm handleNext={handleNext}/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
