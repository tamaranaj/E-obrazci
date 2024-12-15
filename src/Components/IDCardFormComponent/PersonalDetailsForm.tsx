import { useForm } from 'react-hook-form'
import './PersonalDetailsForm.css'
import { FormEvent, useContext } from 'react'
import Button from '@mui/material/Button';
import { GeneralContext } from '../../context/general.context';

export interface PersonalDetailsProps{
    handleNext: ()=>void
}

export const PersonalDetailsForm = (props: PersonalDetailsProps)=>{
    const createForm = useForm({
        defaultValues:{
            firstName: "",
            lastName: "",
            marriedLastName: "",
            fatherName: "",
            motherName: "",
            birth: "",
            placeBirth: "",
            socialNumber: "",
            gender: "",
            address: "",
            phone: "",
        }
    })
    const{updatePersonalDetailsID} = useContext(GeneralContext)
    const{register, getValues} = createForm
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let result = getValues();
        console.log("form results:", result);
        updatePersonalDetailsID(result);
        props.handleNext()
        
      };

    return (
        <div className='container'>
            <form onSubmit={async (e) => { await submitForm(e); }}>
             <div className="row">
              <label htmlFor="firstName">Име:</label>
              <input type="text" id="firstName" {...register("firstName")}  />
            </div>

            <div className="row"><label htmlFor="lastName">Презиме:</label>
              <input type="text" id="lastName" {...register("lastName")} />
            </div>

            <div className="row">
              <label htmlFor="married">
                За омажени/оженети (Презиме пред склучување на бракот):
              </label>
              <input
                type="text"
                id="married"
                {...register("marriedLastName")}
              />
            </div>

            <fieldset>
            <legend>Пол:</legend>

            <div className="row">
            <input
              type="radio"
              id="male"
              value="машки"
              {...register("gender")}
            />
            <label htmlFor="male">Машки</label>
            </div>
            

            <div className="row">
            <input
              type="radio"
              id="female"
              value="женски"
              {...register("gender")}
            />
            <label htmlFor="female">Женски</label>
            </div>
            


          </fieldset>
          <div className="row"><label htmlFor="birthDate">Дата на раѓање:</label>
              <input
                type="date"
                id="birthDate"
                max="2010-01-01"
                {...register("birth")}
                min={"1930-01-01"}
              /></div>
            <div className="row">
              <label htmlFor="placeBirth">
                Место на раѓање (лице родено во странство ја запишува и
                државата)
              </label>
              <input
                type="text"
                id="placeBirth"
                {...register("placeBirth")}
              />
            </div>

            <div className="row">
                <label htmlFor="socialNumber">Матичен број</label>
                <input
                  type="text"
                  id="socialNumber"
                  {...register("socialNumber")}
                />
            </div>
            <div className="row"><label htmlFor="address">Адреса на живеење:</label>
                <input type="text" id="address" {...register("address")} /></div>

            <div className="row"><label htmlFor="phoneNumber">Телефонски број:</label>
                <input type="tel" id="phoneNumber" {...register("phone")} />
            </div>
            <div className="row"><label htmlFor="fatherName">Име на татко</label>
                <input
                  type="text"
                  id="fatherName"
                  {...register("fatherName")}
                />
            </div>

            <div className="row">
                <label htmlFor="motherName">Име на мајка</label>
                <input
                  type="text"
                  id="motherName"
                  {...register("motherName")}
                />
            </div>
            <Button
               variant="contained"
               type='submit'
               sx={{ mt: 1, mr: 1 }}
             >
               Continue
             </Button>
        </form>
        </div>
        
    )
}
