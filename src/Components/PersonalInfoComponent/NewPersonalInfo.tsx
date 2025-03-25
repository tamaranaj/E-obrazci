import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { GeneralContext } from "../../context/general.context"
import { PersonalDetailsID, StepperProps } from "../../Types/interfaces"
import { ErrorMessage } from "@hookform/error-message"
import { Button, TextField } from "@mui/material"

export const NewPersonalForm = (props: StepperProps) => {
  const { updatePersonalDetailsID, language, necessaryDocuments, documentLanguage, idCardDocument, haveChild } = useContext(GeneralContext)
  const { register, handleSubmit, formState: { errors } } = useForm<PersonalDetailsID>({
    criteriaMode: "all"
  })
  const [married, setMarried] = useState<boolean | undefined>(undefined)
  const [email, setEmail] = useState<boolean | undefined>(undefined)
  const [phone, setPhone] = useState<boolean | undefined>(undefined)
  const [errorMarried, setErrorMarried] = useState(false)
  const [errorContact, setErrorContact] = useState(false)
  const [gender, setGender] = useState<boolean | undefined>(undefined)
  const handleMarried = (value: string) => {
    if (value == 'true') {
      setMarried(true)
    } else {
      setMarried(false)
    }
  }
  const handleContact = (value: string) => {
    if (value === 'email') {
      setEmail(true)
      setPhone(false)
    } if (value === 'phone') {
      setEmail(false)
      setPhone(true)
    }
  }
  const submitForm = (data: PersonalDetailsID) => {
    if (gender && married === undefined) {
      setErrorMarried(true)
      return
    }
    if (phone === undefined && email === undefined) {
      setErrorContact(true)
      return
    }
    console.log(data)
    setErrorContact(false)
    setErrorMarried(false)
    updatePersonalDetailsID(data);
    props.handleNext()
  }
  const getFormattedDate = () => {

    if (necessaryDocuments.idCard && haveChild) {
      const date = new Date();
      const year = date.getFullYear() - 15
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    else if (necessaryDocuments.passport && haveChild) {
      const date = new Date();
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    else {
      const date = new Date();
      const year = date.getFullYear() - 18
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }



  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className='personalDetailsForm'>
      <div className="gridWrapper">

        {documentLanguage === 'macedonian' && (<p className='error'>{language === 'mkd' ? 'Пополнете ја формата користејќи кирилично писмо' : 'Plotësoni formularin duke përdorur alfabetin cirilik'}</p>)}
        <div className='flex'>
          <section className='column'>
            <div className="column">
              <input type="text" className='input' id="firstName" placeholder={language == 'mkd' ? 'Име (пр.Трајче)' : 'Emri (p.sh. Aisha)'} {...register("firstName", {
                required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                pattern: {
                  value: /[а-шА-Шa-zA-Z]/g,
                  message: language == 'mkd' ? 'Внесете го вашето име.' : 'Shkruani emrin tuaj.'
                },
                minLength: {
                  value: 2,
                  message: language == 'mkd' ? 'Името не може да биде пократко од два карактери.' : 'Emri nuk mund të jetë më i shkurtër se dy karaktere.'
                }
              })} />

              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              /></div>


            <div className="column">
              <input type="text" className='input' id="lastName" placeholder='Презиме (пр.Трајковски)' {...register("lastName", {
                required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                pattern: {
                  value: /[а-шА-Шa-zA-Z]/g,
                  message: language == 'mkd' ? 'Внесете го вашето презиме.' : 'Shkruani mbiemrin tuaj.'
                },
                minLength: {
                  value: 2,
                  message: language == 'mkd' ? 'Презимето не може да биде пократко од два карактери.' : 'Mbiemri nuk mund të jetë më i shkurtër se dy karaktere.'
                }
              })} />
              <ErrorMessage
                errors={errors}
                name="lastName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />

            </div>


            <div className="fieldsets">
              <label htmlFor="birthDate" >{language == 'mkd' ? 'Дата на раѓање:' : 'Data e lindjes:'}</label>
              <div className="column">
                <input
                  type="date"
                  className='input'
                  id="birthDate"
                  max={getFormattedDate()}
                  {...register("birth", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
                  min={"1930-01-01"}
                />
                <ErrorMessage
                  errors={errors}
                  name="birth"
                  render={({ message }) => <span className='errorMessage'>{message}</span>}
                />
              </div>

            </div>
            <div className="column">
              <input
                className='input'
                type="text"
                id="placeBirth" placeholder={language == 'mkd' ? 'Место на раѓање (пр.Скопје)' : 'Vendi i lindjes (p.sh. Shkupi)'}
                {...register("placeBirth", {
                  required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                  pattern: {
                    value: /[а-шА-Шa-zA-Z]/g,
                    message: language == 'mkd' ? 'Внесете го вашето место на раѓање.' : "Fut vendin e lindjes."

                  },
                  minLength: {
                    value: 2,
                    message: language == 'mkd' ? 'Местото на раѓање не може да биде пократко од два карактери.' : 'Vendi i lindjes nuk mund të jetë më i shkurtër se dy karaktere.'
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="placeBirth"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />

            </div>




            <div className="column">
              <input
                type="text"
                className='input'
                id="socialNumber" placeholder={language == 'mkd' ? 'Матичен број (пр.1234567890123)' : 'Numër identik (p.sh. 1234567890123)'}
                {...register("socialNumber", {
                  required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                  pattern: {
                    value: /^[0-9]*$/,
                    message: language == 'mkd' ? "Внесениот матичен број не е валиден." : "Numri i sigurimeve shoqërore i futur nuk është i vlefshëm.",
                  },
                  minLength: {
                    value: 13,
                    message: language == 'mkd' ? 'Матичниот број не може да биде пократок од 13 карактери.' : "Numri i regjistrimit nuk mund të jetë më i shkurtër se 13 karaktere."
                  },
                  maxLength: {
                    value: 13,
                    message: language == 'mkd' ? 'Матичниот број не може да биде подолг од 13 карактери.' : "Numri i regjistrimit nuk mund të jetë më i gjatë se 13 karaktere."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="socialNumber"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />
            </div>
          </section>

          <section className='column'>
            <div className="column">
              <input
                className='input'
                type="text"
                id="fatherName"
                placeholder={language == 'mkd' ? 'Име на татко (пр.Сашо)' : 'Emri i babait (p.sh. Sasho)'}
                {...register("fatherName", {
                  required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                  pattern: {
                    value: /[а-шА-Шa-zA-Z]{2}/g,
                    message: language == 'mkd' ? 'Внесето го името на вашиот татко.' : "Fut emrin e babait tënd."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="fatherName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />
            </div>

            <div className="column">
              <input
                className='input'
                type="text"
                id="motherName"
                placeholder={language == 'mkd' ? 'Име на мајка (пр.Марија)' : 'Emri i nënës (p.sh. Marija)'}
                {...register("motherName", {
                  required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                  pattern: {
                    value: /[а-шА-Шa-zA-Z]{2}/g,
                    message: language == 'mkd' ? 'Внесете го името на вашата мајка.' : "Fut emrin e nënës suaj.",
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="motherName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />
            </div>



            <div className="column">
              <input type="text" className='input' id="address" placeholder={language == 'mkd' ? 'Aдреса на живеење (пр.Коста Новакович бр.24)' : 'Adresa e banimit (psh. Kosta Novakovic nr. 24)'} {...register("address", {
                required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                pattern: {
                  value: /[а-шА-Ш0-9a-zA-Z]/g,
                  message: language == 'mkd' ? 'Внесете го вашето ново живеалиште и адреса.' : 'Fut vendbanimin dhe adresën tënde të re.'
                },
                minLength: {
                  value: 5,
                  message: language == 'mkd' ? 'Адресата не може да биде пократка од 5 карактери.' : 'Adresa nuk mund të jetë më e shkurtër se 5 karaktere.'
                }
              })} />
              <ErrorMessage
                errors={errors}
                name="address"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />
            </div>


            <div className="column">
              <input type="text" className='input' id="city" placeholder={language == 'mkd' ? 'Град' : 'Qyteti'} {...register("city", {
                required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                pattern: {
                  value: /[а-шА-Шa-zA-Z]/g,
                  message: language == 'mkd' ? 'Внесете го вашиот град/општина на живеење.' : 'Shkruani qytetin/komunën tuaj të banimit.'
                },
                minLength: {
                  value: 3,
                  message: language == 'mkd' ? 'Градот/општината не може да биде пократок од 3 карактери.' : 'Qyteti/bashkia nuk mund të jetë më e shkurtër se 3 karaktere.'
                }
              })} />
              <ErrorMessage
                errors={errors}
                name="city"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />

            </div>
            {idCardDocument.reason === '3' && (<div className="column">
              <input type="text" className='input' placeholder={language == 'mkd' ? 'Претходно живеалиште и адреса' : 'Banesa dhe adresa e mëparshme'} {...register("previousAddress", {
                required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                pattern: {
                  value: /[а-шА-Ш0-9a-zA-Z]/g,
                  message: language == 'mkd' ? 'Внесете го вашето претходно живеалиште и адреса.' : 'Fut vendbanimin dhe adresën tënde të mëparshme.'
                },
                minLength: {
                  value: 5,
                  message: language == 'mkd' ? 'Адресата не може да биде пократка од 5 карактери.' : 'Adresa nuk mund të jetë më e shkurtër se 5 karaktere.'
                }
              })} />
              <ErrorMessage
                errors={errors}
                name="previousAddress"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />
            </div>)}

            <div className="column">
              <input
                className='input'
                type="text"
                id="citizen"
                placeholder={language == 'mkd' ? 'Државјанство (пр.Македонско)' : 'Shtetësia (p.sh. Maqedonase)'}
                {...register("citizenship", {
                  required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                  pattern: {
                    value: /[а-шА-Шa-zA-Z]/g,
                    message: language == 'mkd' ? 'Внесето го вашето државјанство.' : 'Shtetësia juaj ka hyrë.'
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="citizenship"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />
            </div>


            {necessaryDocuments.passport && documentLanguage === 'albanian' && (<div className="column">
              <input
                className='input'
                type="text"
                id="nationality"
                placeholder={language == 'mkd' ? 'Национална припадност (пр.македонец)' : 'Përkatësia nacionale (p.sh. maqedonase)'}
                {...register("nationality", {
                  required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                  pattern: {
                    value: /[а-шА-Шa-zA-Z]/g,
                    message: language == 'mkd' ? 'Внесето го вашето државјанство.' : 'Shtetësia juaj ka hyrë.'
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="nationality"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />
            </div>)}

          </section>
        </div>

        <div className="gridWrapper">
          <div className='flex'>
            <fieldset className='fieldsetGroups'>
              <legend >{language == 'mkd' ? 'Пол:' : 'Gjinia:'}</legend>

              <div className="gender">

                <div className="row">
                  <input
                    type="radio"
                    id="male"
                    value="машки"
                    onClick={() => setGender(false)}
                    {...register("gender", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
                  />
                  <label htmlFor="male" >{language == 'mkd' ? 'Машки' : 'Mashkull'}</label>
                </div>


                <div className="row">
                  <input
                    type="radio"
                    id="female"
                    value="женски"
                    onClick={() => setGender(true)}
                    {...register("gender", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
                  />
                  <label htmlFor="female" >{language == 'mkd' ? 'Женски' : 'Femër'}</label>

                </div>
                <ErrorMessage
                  errors={errors}
                  name="gender"
                  render={({ message }) => <span className='errorMessage'>{message}</span>}
                />
              </div>
            </fieldset>


            {gender &&
              <fieldset className='fieldsetGroups'>
                <legend >{language == 'mkd' ? 'Дали сте во брак?' : 'Je i martuar?'}</legend>

                <div className="marriage">

                  <section className='row'>
                    <input
                      type="radio"
                      id="married"
                      name='married'
                      value='true'
                      onChange={(e) => { handleMarried(e.target.value) }}
                    />
                    <label htmlFor="married" >{language == 'mkd' ? 'Да' : 'Po'}</label>
                  </section>

                  <section className='row'>
                    <input
                      type="radio"
                      id="noMarried"
                      name='married'
                      value="false"
                      onChange={(e) => { handleMarried(e.target.value) }}
                    />
                    <label htmlFor="noMarried" >{language == 'mkd' ? 'Не' : 'Nr'}</label>
                  </section>

                  {errorMarried && <span className='errorMessage'>{language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.'}</span>}
                </div>
              </fieldset>
            }
            <fieldset className='fieldsetGroups'>
              <legend >{language == 'mkd' ? 'Како сакате да бидете контактирани:' : 'Si dëshironi të kontaktoheni:'}</legend>

              <div className="marriage">

                <section className='row'>
                  <input
                    type="radio"
                    id="email"
                    name='contact'
                    value='email'
                    onChange={(e) => { handleContact(e.target.value) }}
                  />
                  <label htmlFor="email" >{language == 'mkd' ? 'е-пошта' : 'e-mail'}</label>
                </section>

                <section className='row'>
                  <input
                    type="radio"
                    id="phone"
                    name='contact'
                    value="phone"
                    onChange={(e) => { handleContact(e.target.value) }}
                  />
                  <label htmlFor="phone" >{language == 'mkd' ? 'телефонски број' : 'numrin e telefonit'}</label>
                </section>

                {errorContact && <span className='errorMessage'>{language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.'}</span>}
              </div>
            </fieldset>
          </div>
          {married && gender && (
            <div className="column">
              <input
                type="text"
                id="married"
                className='input'
                placeholder={language == 'mkd' ? 'Презиме пред склучување на бракот (пр.Петковска)' : 'Mbiemri para martesës (p.sh. Osmani)'}
                {...register("marriedLastName", {
                  pattern: {
                    value: /[а-шА-Шa-zA-Z]/g,
                    message: language == 'mkd' ? 'Внесете го вашето презиме пред склучување на бракот.' : "Fut emrin e vajzërisë."
                  },
                  minLength: {
                    value: 2,
                    message: language == 'mkd' ? 'Презимето не може да биде пократко од два карактери.' : 'Mbiemri nuk mund të jetë më i shkurtër se dy karaktere.'
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="marriedLastName"
                render={({ message }) => <span className='errorMessage'>{message}</span>}
              />
            </div>
          )}
          {phone && (<div className="column">
            <input type="text" className='input' id="phoneNumber" placeholder={language == 'mkd' ? 'Број за контакт (пр.071234567)' : 'Numri i kontaktit (p.sh. 071234567)'} {...register("phone", {
              required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
              pattern: {
                value: /^[0-9]*$/,
                message: language == 'mkd' ? "Внесениот број за контакт не е валиден." : "Numri i kontaktit i futur nuk është i vlefshëm."
              },
              minLength: {
                value: 9,
                message: language == 'mkd' ? 'Бројот за контакт не може да биде пократок од 9 карактери.' : 'Numri i kontaktit nuk mund të jetë më i shkurtër se 9 karaktere.'
              },
              maxLength: {
                value: 15,
                message: language == 'mkd' ? 'Бројот за контакт не може да биде подолг од 15 карактери.' : "Numri i kontaktit nuk mund të jetë më i gjatë se 15 karaktere."
              }
            })} />
            <ErrorMessage
              errors={errors}
              name="phone"
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <span key={type} className='errorMessage'>{message}</span>
                ))
              }
            />
          </div>)}


          {email && (<div className="column">
            <input type="text" className='input' id="email" placeholder={language == 'mkd' ? 'Е-пошта' : 'Adresën e emailit'} {...register("phone", {
              required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: language == 'mkd' ? "Внесената е-пошта не е валидна." : "Adresa e emailit e futur nuk është e vlefshme."
              }
            })} />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <span className='errorMessage'>{message}</span>}
            />
          </div>)}
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          type='submit'

          sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
        >
          {language == 'mkd' ? 'Понатаму' : 'Më tej'}
        </Button>
      </div>

    </form>
  )
}
