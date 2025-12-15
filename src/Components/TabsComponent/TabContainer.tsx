import { useContext, useState } from "react";
import { GeneralContext } from "../../context/general.context";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { IDCardForm } from "../IDCardFormComponent/IDCardForm";
import { PassportForm } from "../PassportFormComponent/PassportFormComponent";
import { DriverLicenseForm } from "../DriverLicenseFormComponent/DriverLicenseForm";
import "./TabContainer.css";
import { TabsConfig } from "../HelperFunc/tabContainerProps";

export interface TabsComponentChildrenProps {
  tabsProps: (newValue: string) => void;
}
export interface TabContainerProps {
  tabsConfig: TabsConfig;
  next: string;
}

export const TabContainer = ({ tabsConfig, next }: TabContainerProps) => {
  const { tabs, idCardDocument, passport, driverLicense } =
    useContext(GeneralContext);
  const [value, setValue] = useState("1");
  const checkAnswers = (index: number) => {
    let checkItem = tabs.at(Number(value) - 1);
    if (checkItem === "idCard") {
      if (idCardDocument.reason === "" || idCardDocument.procedure === "") {
        return;
      }
    } else if (checkItem === "passport") {
      if (passport.reason === "" || passport.procedure === "") {
        return;
      }
    } else if (checkItem === "driverLicense") {
      if (driverLicense.reason === "" || driverLicense.procedure === "") {
        return;
      }
    }
    setValue(`${index + 1}`);
  };
  const hideButtons = () => {
    let check: boolean[] = [];
    if (tabs.includes("idCard")) {
      if (idCardDocument.reason !== "" && idCardDocument.procedure !== "") {
        check.push(true);
      } else {
        check.push(false);
      }
    }
    if (tabs.includes("passport")) {
      if (passport.reason !== "" && passport.procedure !== "") {
        check.push(true);
      } else {
        check.push(false);
      }
    }
    if (tabs.includes("driverLicense")) {
      if (driverLicense.reason !== "" && driverLicense.procedure !== "") {
        check.push(true);
      } else {
        check.push(false);
      }
    }
    let test = check.includes(false);
    if (test) {
      return false;
    } else {
      return true;
    }
  };
  const tabsProps = (newValue: string) => {
    setValue(newValue);
  };
  const addTabLabel = (item: string) => {
    if (item === "idCard") return tabsConfig.idCard;

    if (item === "passport") return tabsConfig.passport;

    if (item === "driverLicense") return tabsConfig.driverLicense;
  };
  return (
    <Box sx={{ typography: "section" }} className="tabCont">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList aria-label="lab API tabs example">
            {tabs.map((item, index) => (
              <Tab
                label={addTabLabel(item)}
                wrapped
                value={`${index + 1}`}
                key={item}
                onClick={() => checkAnswers(index)}
              />
            ))}
          </TabList>
        </Box>
        {tabs.map((item, index) => (
          <TabPanel value={`${index + 1}`} key={index}>
            {item === "idCard" ? (
              <IDCardForm
                hideButtons={hideButtons}
                next={next}
                tabsProps={tabsProps}
                notRequired={tabsConfig.notRequired}
                errorRequired={tabsConfig.errorRequired}
                idConfig={tabsConfig.idCardProps}
                languageFormProps={tabsConfig.languageFormProps}
              />
            ) : item === "passport" ? (
              <PassportForm
                hideButtons={hideButtons}
                next={next}
                passportConfig={tabsConfig.passportProps}
                languageFormProps={tabsConfig.languageFormProps}
                errorRequired={tabsConfig.errorRequired}
                notRequired={tabsConfig.notRequired}
                tabsProps={tabsProps}
              />
            ) : (
              <DriverLicenseForm
                hideButtons={hideButtons}
                next={next}
                dLicenseConfig={tabsConfig.driverLicenseProps}
                languageFormProps={tabsConfig.languageFormProps}
                errorRequired={tabsConfig.errorRequired}
                notRequired={tabsConfig.notRequired}
                tabsProps={tabsProps}
              />
            )}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};
