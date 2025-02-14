import { useForm, useFieldArray } from 'react-hook-form'
import './PersonalDetailsForm.css'
import { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { GeneralContext } from '../../context/general.context';
import { ErrorMessage } from "@hookform/error-message"
import { PersonalDetailsID } from '../../Types/interfaces';
export interface PersonalDetailsProps {
  handleNext: () => void
}

export const PersonalDetailsForm = (props: PersonalDetailsProps) => {

  const { updatePersonalDetailsID, bgColor, language, necessaryDocuments } = useContext(GeneralContext)
  const { register, handleSubmit, formState: { errors }, control } = useForm<PersonalDetailsID>({
    criteriaMode: "all",
    defaultValues: {
      parents: [{ firstName: '', lastName: '', relation: '', socialNumber: '' }]
    }
  })
  const [married, setMarried] = useState<boolean | undefined>(undefined)
  const [child, setChild] = useState<boolean | undefined>(undefined)
  const handleChild = (value: string) => {
    if (value == 'true') {
      setChild(true)
    } else {
      setChild(false)
    }
  }

  const handleMarried = (value: string) => {
    if (value == 'true') {
      setMarried(true)
    } else {
      setMarried(false)
    }
  }
  const submitForm = (data: PersonalDetailsID) => {
    if (married === undefined) return
    if (necessaryDocuments.driverLicense == false && child == undefined) return
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
  const { fields, append, remove } = useFieldArray({
    control,
    name: "parents"
  })

  const handleAddParent = () => {
    append({ firstName: '', lastName: '', relation: '', socialNumber: '' })
  }
  return (
    <div className='personalDetailsFormContainer'>
      <form onSubmit={handleSubmit(submitForm)} className='personalDetailsForm' style={bgColor == true ? { color: 'black' } : { color: 'white' }}>

        <div className='gridWrapper'>
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
              <fieldset >
                <legend >{language == 'mkd' ? 'Дали сте во брак?' : 'Je i martuar?'}</legend>
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
                    <label htmlFor="married" >{language == 'mkd' ? 'Да' : 'Po'}</label>
                  </div>


                  <div className="row">
                    <input
                      className='input'
                      type="radio"
                      id="noMarried"
                      name='married'
                      value="false"
                      onChange={(e) => { handleMarried(e.target.value) }}
                    />
                    <label htmlFor="noMarried" >{language == 'mkd' ? 'Не' : 'Nr'}</label>

                  </div>
                </div>
              </fieldset>

              <fieldset >
                <legend >{language == 'mkd' ? 'Пол:' : 'Gjinia:'}</legend>
                <div className="column">
                  <div className="row">
                    <input
                      type="radio"
                      id="male"
                      value="машки"
                      {...register("gender", { required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.', })}
                    />
                    <label htmlFor="male" >{language == 'mkd' ? 'Машки' : 'Mashkull'}</label>
                  </div>


                  <div className="row">
                    <input
                      type="radio"
                      id="female"
                      value="женски"
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
            </div>



            {married && (<div className="column">
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
            </div>)}



            <div className="fieldsets" style={bgColor == true ? { color: 'black' } : { color: 'white' }}><label htmlFor="birthDate" >{language == 'mkd' ? 'Дата на раѓање:' : 'Data e lindjes:'}</label>
              <div className="column dateInput">
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

          </section>


          <section className='column'>


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
            </div>


            <div className="column">
              <input type="text" className='input' id="address" placeholder={language == 'mkd' ? 'Нова адреса на живеење (пр.Коста Новакович бр.24)' : 'Adresa e re e banimit (psh. Kosta Novakovic nr. 24)'} {...register("address", {
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
              <input type="tel" className='input' id="phoneNumber" placeholder={language == 'mkd' ? 'Број за контакт (пр.071234567)' : 'Numri i kontaktit (p.sh. 071234567)'} {...register("phone", {
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
            </div>



          </section>
        </div>

        {necessaryDocuments.driverLicense == false && (
          <div >
            <fieldset className='childQuest' >
              <legend >{language == 'mkd' ? 'Дали поднесувате барање за вашето дете?' : 'Je i martuar?'}</legend>
              <div className="row-center">
                <div className="row">
                  <input
                    className='input'
                    type="radio"
                    id="child"
                    name='child'
                    value='true'
                    onChange={(e) => { handleChild(e.target.value) }}
                  />
                  <label htmlFor="child" >{language == 'mkd' ? 'Да' : 'Po'}</label>
                </div>


                <div className="row">
                  <input
                    className='input'
                    type="radio"
                    id="noChild"
                    name='child'
                    value="false"
                    onChange={(e) => { handleChild(e.target.value) }}
                  />
                  <label htmlFor="noChild" >{language == 'mkd' ? 'Не' : 'Nr'}</label>

                </div>
              </div>
            </fieldset>
          </div>
        )}


        {child && (
          <section className='dynamicSection'>
            <div className='dynamicFieldsContainer'>
              {fields.map((field, index) => (
                <div key={field.id} className='dynamicFields'>
                  <div className='dynamicColumn'>
                    <div className='dinInputError'>
                      <input type="text" className='dynamicInput' id='parentName' placeholder={language == 'mkd' ? 'Име на родител/старател' : 'Emri i prindit/kujdestarit'}{...register(`parents.${index}.firstName`, {
                        required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                        pattern: {
                          value: /[а-шА-Шa-zA-Z]{2}/g,
                          message: language == 'mkd' ? 'Внесете го името на родителот/старателот.' : "Shkruani emrin e prindit/kujdestarit.",
                        }
                      })} /><ErrorMessage
                        errors={errors}
                        name={`parents.${index}.firstName`}
                        render={({ messages }) =>
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <span key={type} className='errorMessage'>{message}</span>
                          ))
                        }
                      />
                    </div>
                    <div className="dinInputError">
                    <input type="text" placeholder={language == 'mkd' ? 'Презиме на родител/старател' : 'Mbiemri i prindit/kujdestarit'}{...register(`parents.${index}.lastName`, {
                        required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                        pattern: {
                          value: /[а-шА-Шa-zA-Z]{2}/g,
                          message: language == 'mkd' ? 'Внесете го презимето на родителот/старателот.' : "Shkruani mbiemrin e prindit/kujdestarit.",
                        }
                      })} className='dynamicInput' />
                    <ErrorMessage
                        errors={errors}
                        name={`parents.${index}.lastName`}
                        render={({ messages }) =>
                          messages &&
                          Object.entries(messages).map(([type, message]) => (
                            <span key={type} className='errorMessage'>{message}</span>
                          ))
                        }
                      />
                    </div>
                    
                  </div>
                  <div className='dynamicColumn'>
                    <div className="dinInputError">
                    <input type="text" placeholder={language == 'mkd' ? 'Матичен број' : 'Numri i identifikimit'}{...register(`parents.${index}.socialNumber`, {
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
                })} className='dynamicInput' />
                <ErrorMessage
                errors={errors}
                name={`parents[${index}].socialNumber`}
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />
                    </div>
                    
                    <div className="dinInputError">
                    <input type="text" placeholder={language == 'mkd' ? 'Релација' : 'Marrëdhënia'}{...register(`parents.${index}.relation`, {
                        required: language == 'mkd' ? 'Ова поле е задолжително.' : 'Kjo fushë është e detyrueshme.',
                        pattern: {
                          value: /[а-шА-Шa-zA-Z]{2}/g,
                          message: language == 'mkd' ? 'Внесете ја вашата релација со детето.' : "Vendosni marrëdhënien tuaj me fëmijën.",
                        }
                      })} className='dynamicInput' />
                    <ErrorMessage
                errors={errors}
                name={`parents.${index}.relation`}
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span key={type} className='errorMessage'>{message}</span>
                  ))
                }
              />
                    </div>
                    </div>
                  <div>
                    <Button
                      variant="contained"
                      sx={{ mt: 1, mr: 1, backgroundColor: '#C53242', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
                      className="removeButton"
                      type="button"
                      onClick={() => remove(index)}
                    >
                      {language == 'mkd' ? 'Отстрани' : 'Hiqni'}
                    </Button>
                  </div>




                </div>
              ))}
            </div>



            <Button
              type='button'
              variant="contained"
              sx={{ mt: 1, mr: 1, backgroundColor: '#397624', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
              disabled={fields.length == 2}
              onClick={handleAddParent}
            >{language == 'mkd' ? 'Додај родител/старател' : 'Shto një prind/kujdestar'}</Button>
          </section>
        )}


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
    </div>

  )
}
