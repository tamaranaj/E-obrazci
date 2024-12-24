import { useForm } from 'react-hook-form'
import './PersonalDetailsForm.css'
import { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { GeneralContext, PersonalDetailsID } from '../../context/general.context';
import { ErrorMessage } from "@hookform/error-message"
export interface PersonalDetailsProps {
  handleNext: () => void
}

export const PersonalDetailsForm = (props: PersonalDetailsProps) => {
  const createForm = useForm<PersonalDetailsID>({
    criteriaMode: "all",
  })
  const { updatePersonalDetailsID } = useContext(GeneralContext)
  const { register, handleSubmit, formState: { errors } } = createForm
  const [married, setMarried] = useState<boolean>(false)
  console.log(errors)
  const handleMarried = (value: string) => {
    if (value == 'true') {
      setMarried(true)
    } else {
      setMarried(false)
    }
  }
  const submitForm = (data: PersonalDetailsID) => {
    console.log(data)
    updatePersonalDetailsID(data);
    props.handleNext()
  }
  const getFormattedDate = () => {
    const date = new Date();
    const year = date.getFullYear() - 18
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  return (
    <div className='personalDetailsFormContainer'>
      <form onSubmit={handleSubmit(submitForm)} className='personalDetailsForm'>

        <div className="column">
          <input type="text" className='input' id="firstName" placeholder='Име (пр.Трајче)' {...register("firstName", {
            required: 'Ова поле е задолжително.',
            pattern: {
              value: /[а-шА-Ш]/g,
              message: 'Внесете го вашето име.'
            },
            minLength: {
              value: 2,
              message: 'Името не може да биде пократко од два карактери.'
            }
          })} />

          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className='errorMessage'>{message}</p>
              ))
            }
          /></div>


        <div className="column">
          <input type="text"className='input' id="lastName" placeholder='Презиме (пр.Трајковски)' {...register("lastName", {
            required: 'Ова поле е задолжително.',
            pattern: {
              value: /[а-шА-Ш]/g,
              message: 'Внесете го вашето име.'
            },
            minLength: {
              value: 2,
              message: 'Презимето не може да биде пократко од два карактери.'
            }
          })} />
          <ErrorMessage
            errors={errors}
            name="lastName"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className='errorMessage'>{message}</p>
              ))
            }
          />

        </div>

        <div className="fieldsets">
        <fieldset>
          <legend>Дали сте во брак?</legend>
          <div className="column">
            <div className="row">
              <input
              className='input'
                type="radio"
                id="married"
                name='married'
                value='true'
                onChange={(e) => { handleMarried(e.target.value) }}
              />
              <label htmlFor="married">Да</label>
            </div>


            <div className="row">
              <input
              className='input'
                type="radio"
                id="married"
                name='married'
                value="false"
                onChange={(e) => { handleMarried(e.target.value) }}
              />
              <label htmlFor="single">Не</label>

            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Пол:</legend>
          <div className="column">
            <div className="row">
              <input
                type="radio"
                id="male"
                value="машки"
                {...register("gender", { required: 'Ова поле е задолжително.' })}
              />
              <label htmlFor="male">Машки</label>
            </div>


            <div className="row">
              <input
                type="radio"
                id="female"
                value="женски"
                {...register("gender", { required: 'Ова поле е задолжително.' })}
              />
              <label htmlFor="female">Женски</label>

            </div>
            <ErrorMessage
              errors={errors}
              name="gender"
              render={({ message }) => <p className='errorMessage'>{message}</p>}
            />
          </div>



        </fieldset>
        </div>
        


        {married && (<div className="column">
          <input
            type="text"
            id="married"
            className='input'
            placeholder='Презиме пред склучување на бракот (пр.Петковска)'
            {...register("marriedLastName", {
              pattern: {
                value: /[а-шА-Ш]/g,
                message: 'Внесете го вашето име.'
              },
              minLength: {
                value: 2,
                message: 'Презимето не може да биде пократко од два карактери.'
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name="marriedLastName"
            render={({ message }) => <p className='errorMessage'>{message}</p>}
          />
        </div>)}


        
        <div className="fieldsets"><label htmlFor="birthDate">Дата на раѓање:</label>
          <div className="column">
            <input
              type="date"
              className='input'
              id="birthDate"
              max={getFormattedDate()}
              {...register("birth", { required: 'Ова поле е задолжително.' })}
              min={"1930-01-01"}
            />
            <ErrorMessage
              errors={errors}
              name="birth"
              render={({ message }) => <p className='errorMessage'>{message}</p>}
            />
          </div>

        </div>

        <div className="column">
          <input
          className='input'
            type="text"
            id="placeBirth" placeholder='Место на раѓање (пр.Скопје)'
            {...register("placeBirth", {
              required: 'Ова поле е задолжително.',
              pattern: {
                value: /[а-шА-Ш]/g,
                message: 'Внесете го вашето место на раѓање.'
              },
              minLength: {
                value: 2,
                message: 'Местото на раѓање не може да биде пократко од два карактери.'
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name="placeBirth"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className='errorMessage'>{message}</p>
              ))
            }
          />

        </div>

        <div className="column">
          <input
            type="text"
            className='input'
            id="socialNumber" placeholder='Матичен број (пр.1234567890123)'
            {...register("socialNumber", {
              required: 'Ова поле е задолжително.',
              pattern: {
                value: /[0-9]/,
                message: "Внесете го вашиот матичен број.",
              },
              minLength: {
                value: 13,
                message: 'Матичниот број не може да биде пократок од 13 карактери.'
              },
              maxLength: {
                value: 13,
                message: 'Матичниот број не може да биде подолг од 13 карактери.'
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name="socialNumber"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className='errorMessage'>{message}</p>
              ))
            }
          />
        </div>

        <div className="column">
          <input type="text" className='input' id="address" placeholder='Адреса на живеење (пр.Коста Новакович бр.24)' {...register("address", {
            required: 'Ова поле е задолжително.',
            pattern: {
              value: /[а-шА-Ш0-9]/g,
              message: 'Внесете го вашето име.'
            },
            minLength: {
              value: 5,
              message: 'Адресата на живеење  не може да биде пократка од 5 карактери.'
            }
          })} />
          <ErrorMessage
            errors={errors}
            name="address"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className='errorMessage'>{message}</p>
              ))
            }
          />
        </div>



        <div className="column">
          <input type="tel" className='input' id="phoneNumber" placeholder='Број за контакт (пр.071234567)' {...register("phone", {
            required: 'Ова поле е задолжително.',
            pattern: {
              value: /[0-9]/,
              message: "Внесете го вашиот број за контакт.",
            },
            minLength: {
              value: 9,
              message: 'Бројот за контакт не може да биде пократок од 9 карактери.'
            },
            maxLength: {
              value: 15,
              message: 'Бројот за контакт не може да биде подолг од 15 карактери.'
            }
          })} />
          <ErrorMessage
            errors={errors}
            name="phone"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className='errorMessage'>{message}</p>
              ))
            }
          />
        </div>


        <div className="column">
          <input
          className='input'
            type="text"
            id="fatherName"
            placeholder='Име на татко (пр.Сашо)'
            {...register("fatherName", {
              required: 'Ова поле е задолжително.',
              pattern: {
                value: /[а-шА-Ш]/g,
                message: 'Внесето го името на вашиот татко.'
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name="fatherName"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className='errorMessage'>{message}</p>
              ))
            }
          />
        </div>

        <div className="column">
          <input
          className='input'
            type="text"
            id="motherName"
            placeholder='Име на мајка (пр.Анетка)'
            {...register("motherName", {
              required: 'Ова поле е задолжително.',
              pattern: {
                value: /[а-шА-Ш]/g,
                message: 'Внесето го името на вашaтa мајка.'
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name="motherName"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className='errorMessage'>{message}</p>
              ))
            }
          />
        </div>

        <div>
        <Button
          variant="contained"
          type='submit'
          sx={{ mt: 1, mr: 1, backgroundColor: 'rgb(143, 143, 232) ' }}
        >
          Continue
        </Button>
        </div>
        
      </form>
    </div>

  )
}
