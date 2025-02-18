import { Children, StepperProps } from "../../Types/interfaces";
import { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { GeneralContext } from '../../context/general.context';
import { ErrorMessage } from "@hookform/error-message"
import { useForm, useFieldArray } from 'react-hook-form'
export const ChildrenComponent = ({handleNext}: StepperProps)=>{
  const { updateSetChild, bgColor, language, necessaryDocuments } = useContext(GeneralContext)
  const { register, handleSubmit, formState: { errors }, control } = useForm<Children>({
    criteriaMode: "all",
    defaultValues: { 
      parents: [{ firstName: '', lastName: '', relation: '', socialNumber: '' }]
    }
  })
  const [child, setChild] = useState<boolean | undefined>(undefined)
  const handleChild = (value: string) => {
    if (value == 'true') {
      setChild(true)
    } else {
      setChild(false)
    }
  }

    const { fields, append, remove } = useFieldArray({
    control,
    name: "parents"
  })

  const handleAddParent = () => {
    append({ firstName: '', lastName: '', relation: '', socialNumber: '' })
  }

  const submitForm = (data:Children)=>{
    updateSetChild(data)
    handleNext()
  }
    return(
        <div>
            

          <form onSubmit={handleSubmit(submitForm)}>

            
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
          </form>


          <div>
          <Button
            variant="contained"
            type='submit'

            sx={{ mt: 1, mr: 1, backgroundColor: '#1976D2', borderRadius: '10px', border: 'none', textShadow: '1px 1px 1px black' }}
          >
            {language == 'mkd' ? 'Понатаму' : 'Më tej'}
          </Button>
        </div>
        </div>
    )
}
