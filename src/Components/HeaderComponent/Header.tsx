import './Header.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { GeneralContext } from '../../context/general.context';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
interface HeaderProps{
    change: ()=> void
    // theme: string
   
}



export const Header = ({change}: HeaderProps)=>{

    const{language,bgColor, changeLanguage} = useContext(GeneralContext)
    const handleChangeLanguage = () =>{
      changeLanguage()
      change()
    }
    return (
        <header className="header">

        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 ,backgroundColor: 'white', borderRadius: '5px', color: 'black', margin: '2px'}}>
        <InputLabel id="demo-simple-select-standard-label" >{language== 'mkd' ? "Јазик" : 'Gjuha'}</InputLabel>
        <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={language}
          onChange={handleChangeLanguage}
          label="Age"
        >
          
          <MenuItem value={'mkd'}>🇲🇰</MenuItem>
          <MenuItem value={'alb'}>&#x1f1e6;&#x1f1f1;</MenuItem>
         
        </Select>
        </FormControl>

        <div style={{display: 'flex', alignItems: 'center'}}>
        <button className='btn' onClick={change}>{bgColor ? <EmojiObjectsOutlinedIcon/> : <TungstenOutlinedIcon/>}</button>
        </div>
            
        </header>
    )
}
