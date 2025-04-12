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
import { TabsConfig } from "../HelperFunc/tabContainerProps";

export interface TabsComponentChildrenProps{
    tabsProps: (newValue: string) => void
}
export interface TabContainerProps{
  tabsConfig: TabsConfig
}

export const TabContainer = ({tabsConfig}: TabContainerProps) => {
    const{tabs} = useContext(GeneralContext)
    const [value, setValue] = useState('1');
   
    const tabsProps = (newValue:string)=>{
        setValue(newValue);
    }
    const addTabLabel = (item: string)=>{
        if(item==='idCard')return tabsConfig.idCard
        
        if(item==='passport')return tabsConfig.passport
       
        if(item==='driverLicense' )return tabsConfig.driverLicense
    }
  return (
    <Box sx={{ typography: 'section' }} className="tabCont">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="lab API tabs example">
            {tabs.map((item,index)=> <Tab label={addTabLabel(item)} wrapped value={`${index +1}`} key={item}/>)}
          </TabList>
        </Box>
        {tabs.map((item,index)=> <TabPanel value={`${index+1}`} key={index}>{item==='idCard'? <IDCardForm tabsProps={tabsProps} notRequired={tabsConfig.notRequired} errorRequired={tabsConfig.errorRequired} idConfig={tabsConfig.idCardProps} languageFormProps={tabsConfig.languageFormProps}/> : item==='passport' ? <PassportForm passportConfig={tabsConfig.passportProps} languageFormProps={tabsConfig.languageFormProps} errorRequired={tabsConfig.errorRequired} notRequired={tabsConfig.notRequired} tabsProps={tabsProps}/> : <DriverLicenseForm dLicenseConfig={tabsConfig.driverLicenseProps} languageFormProps={tabsConfig.languageFormProps} errorRequired={tabsConfig.errorRequired} notRequired={tabsConfig.notRequired} tabsProps={tabsProps}/>}</TabPanel>)}
      </TabContext>
    </Box>
  );
}
