import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useContext, useEffect, useRef, useState } from "react";
import { GeneralContext } from "../../context/general.context";

export const LanguageSwitcher=()=> {
  const{language,documentLanguage, updateDocumentLanguage}=useContext(GeneralContext)
  let options = [
    { label: language==='mkd'? "Македонски": 'Maqedonase', value: "мк" },
    { label: language==='mkd'?"Албански":'Shqiptare', value: "ал" },
  ];
  ;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  
  useEffect(() => {
    const currentLang = documentLanguage; 
    const foundIndex = options.findIndex((opt) => opt.value === currentLang);
    setSelectedIndex(foundIndex >= 0 ? foundIndex : null);
  }, [documentLanguage]); 


  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault()
    const selectedLang = options[index].value;
    setSelectedIndex(index);
    setOpen(false);
    updateDocumentLanguage(selectedLang)
    
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <ButtonGroup
        variant="outlined"
        ref={anchorRef}
        aria-label="language switcher"
      >
        <Button onClick={handleToggle}>
          {selectedIndex === null ? language ==='mkd'?"Изберете јазик":'Zgjidhni një gjuhë' : options[selectedIndex].label}
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.value}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
