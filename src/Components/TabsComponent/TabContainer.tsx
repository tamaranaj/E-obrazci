import { useContext, useState } from "react"
import { GeneralContext } from "../../context/general.context"
import { IDCardForm } from "../IDCardFormComponent/IDCardForm"
import { PassportForm } from "../PassportFormComponent/PassportFormComponent"
import { DriverLicenseForm } from "../DriverLicenseFormComponent/DriverLicenseForm"
import { Button } from "@mui/material"
import './TabContainer.css'


export const TabContainer = () => {
    const { necessaryDocuments, language } = useContext(GeneralContext)
        const values = Object.values(necessaryDocuments)
        const keys = Object.keys(necessaryDocuments)
        const findFirst = (value : boolean)=>{
            return value===true
        }
        let index = values.findIndex(findFirst)
    
    const [showId, setShowId] = useState(keys[index]=='idCard'? true: false)
    const [showPassport, setPassport] = useState(keys[index]=='passport'? true: false)
    const [showDriverLicense, setDriverLicense] = useState(keys[index]=='driverLicense'? true: false)
    const handleChangeID = () => {
        setShowId(true)
        if (showDriverLicense || showPassport) {
            setDriverLicense(false)
            setPassport(false)
        }
    }
    const handleChangePassport = () => {
        setPassport(true)
        if (showDriverLicense || showId) {
            setDriverLicense(false)
            setShowId(false)
        }
    }
    const handleChangeDL = () => {
        setDriverLicense(true)
        if (showId || showPassport) {
            setShowId(false)
            setPassport(false)
        }
    }
    return (

        <div className="gridContainer" >
            <div className="flexContainer">
                {necessaryDocuments.idCard && (<Button
                    variant="contained"
                    type='button'
                    onClick={handleChangeID}
                    sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
                >
                    {language==='mkd'? 'Лична карта': 'Karta e identitetit'}
                </Button>)}

                {necessaryDocuments.passport && (<Button
                    variant="contained"
                    type='button'
                    onClick={handleChangePassport}
                    sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
                >
                    {language==='mkd'? 'Патна исправа': 'Dokument rrugor'}
                </Button>)}

                {necessaryDocuments.driverLicense && (<Button
                    variant="contained"
                    type='button'
                    onClick={handleChangeDL}
                    sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
                >
                    {language==='mkd'? 'Возачка дозвола': 'Patentë shoferi'}
                </Button>)}
            </div>

            <div>
                {showId && <IDCardForm />}
                {showDriverLicense && <DriverLicenseForm />}
                {showPassport && <PassportForm />}
            </div>
        </div>
    )
}
