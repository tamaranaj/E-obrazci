import { useContext, useState } from "react"
import { GeneralContext } from "../../context/general.context"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { IDCardForm } from "../IDCardFormComponent/IDCardForm";
import { PassportForm } from "../PassportFormComponent/PassportFormComponent";
import { DriverLicenseForm } from "../DriverLicenseFormComponent/DriverLicenseForm";
import './TabContainer.css'

export interface TabsComponentChildrenProps{
    tabsProps: (newValue: string) => void
}

export const TabContainer = () => {
    const{tabs, language} = useContext(GeneralContext)
    const [value, setValue] = useState('1');
    const tabsProps = (newValue:string)=>{
        setValue(newValue);
    }
    const addTabLabel = (item: string)=>{
        if(item==='idCard' && language === 'mkd')return 'Лична карта'
        if(item==='idCard' && language === 'alb')return 'Лична карта'
        if(item==='passport' && language === 'mkd')return 'Патна исправа'
        if(item==='passport' && language === 'alb')return 'Dokument rrugor'
        if(item==='driverLicense' && language === 'mkd')return 'Возачка дозвола'
        if(item==='driverLicense' && language === 'alb')return 'Patentë shoferi'
    }
  return (
    <Box sx={{ typography: 'section' }} className="tabCont">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="lab API tabs example">
            {tabs.map((item,index)=> <Tab label={addTabLabel(item)} wrapped value={`${index +1}`} key={item}/>)}
          </TabList>
        </Box>
        {tabs.map((item,index)=> <TabPanel value={`${index+1}`} key={index}>{item==='idCard'? <IDCardForm tabsProps={tabsProps}/> : item==='passport' ? <PassportForm tabsProps={tabsProps}/> : <DriverLicenseForm tabsProps={tabsProps}/>}</TabPanel>)}
      </TabContext>
    </Box>
  );
}
