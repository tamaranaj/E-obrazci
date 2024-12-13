import { useForm } from "react-hook-form";
import { FormEvent, useContext, useState } from "react";
import { GeneralContext } from "../../context/general.context";
import { IDCardDocument } from "./IDCardDocument";
import "./Form.css";
export const FormCreate = () => {
  const [submitted, setSubmitted] = useState(false);
  const { updateProps } = useContext(GeneralContext);
  const createForm = useForm({
    defaultValues: {
      reason: "",
      firstName: "",
      lastName: "",
      cardLanguage: "српски",
      nameLanguage: "српски",
      marriedLastName: "",
      fatherName: "",
      motherName: "",
      birth: "",
      placeBirth: "",
      socialNumber: "",
      gender: "",
      address: "",
      phone: "",
    },
  });
  const { register, getValues, setValue } = createForm;
  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let result = getValues();
    console.log("form results:", result);
    updateProps(result);
    setSubmitted(true);
    setValue("reason", "");
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("fatherName", "");
    setValue("motherName", "");
    setValue("cardLanguage", "српски");
    setValue("nameLanguage", "српски");
    setValue("marriedLastName", "");
    setValue("birth", "");
    setValue("placeBirth", "");
    setValue("socialNumber", "");
    setValue("gender", "");
    setValue("address", "");
    setValue("phone", "");
  };

  // let year = new Date().getFullYear()-15
  // let month = new Date().getMonth().toString()
  // let day = new Date().getDate().toString()

  // const maxDate = `${year}-${month}-${day}`

  return (
    <>
      <div className="container">
        <form
          onSubmit={async (e) => {
            await submitForm(e);
          }}
        >
          {/* <h1>{maxDate}</h1> */}

          <div className="row">
            <div className="row">
              <div>
              <fieldset className="reasons">
                <legend>Причина за барање:</legend>
                <div
                  className="
        radioCont"
                >
                  <input
                    type="radio"
                    id="first"
                    value="прв пат"
                    {...register("reason")}
                  />
                  <label htmlFor="first">Прв пат</label>
                </div>

                <div
                  className="
        radioCont"
                >
                  <input
                    type="radio"
                    id="change"
                    value="замена поради истечен рок на важење"
                    {...register("reason")}
                  />
                  <label htmlFor="change">
                    Замена поради истечен рок на важење
                  </label>
                </div>

                <div
                  className="
        radioCont"
                >
                  <input
                    type="radio"
                    id="copy"
                    value="дупликат лична карта(изгубена, кражба или исчезнување)"
                    {...register("reason")}
                  />
                  <label htmlFor="copy">
                    Дупликат лична карта(изгубена, кражба или исчезнување)
                  </label>
                </div>

                <div
                  className="
        radioContainer"
                >
                  <input
                    type="radio"
                    id="newPlace"
                    value="предвремена поради оштетување, промена на лични податоци, промена на адреса на живеење, промена на живеалиште и др."
                    {...register("reason")}
                  />
                  <label htmlFor="newPlace">
                    Предвремена поради оштетување, промена на лични податоци,
                    промена на адреса на живеење, промена на живеалиште.
                  </label>
                </div>
              </fieldset>

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
              </div>
              
              <fieldset className="personalDetails">
                <legend >Лични Податоци</legend>

                <div className="firstPersonalDetails">
                  <div className="row">
                  <label htmlFor="firstName">Име</label>
                  <input type="text" id="firstName" {...register("firstName")} />
                  </div>
                
                  <div className="row"><label htmlFor="lastName">Презиме</label>
                  <input type="text" id="lastName" {...register("lastName")} /></div>
                
                  <div className="row">
                   <label htmlFor="maried">
                   За омажени/оженети (Презиме пред склучување на бракот)
                   </label>
                   <input
                   type="text"
                   id="maried"
                    {...register("marriedLastName")}
                    />
                  </div>
                
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
                
                </div>
                
                
                <div className="secPersonalDetails">

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
                    <input type="tel" id="phoneNumber" {...register("phone")} /></div>
                
              

                {/* <fieldset>
                <legend>Податоци за родителите</legend> */}
                  <div className="row"><label htmlFor="fatherName">Име на татко</label>
                <input
                  type="text"
                  id="fatherName"
                  {...register("fatherName")}
                /></div>
                
                  <div className="row">
                    <label htmlFor="motherName">Име на мајка</label>
                <input
                  type="text"
                  id="motherName"
                  {...register("motherName")}
                />
                  </div>
                
                {/* </fieldset> */}
                </div>
              </fieldset>
            </div>

            
          </div>

          <div className="columns">
            <fieldset>
              <label htmlFor="named-select">
                Барам образецот да биде изготвен на еден од наведените јазици и
                писмо:
              </label>
              <select id="named-select" {...register("cardLanguage")}>
                <option value={"турски"}>турски</option>
                <option value={"влашки"}>влашки</option>
                <option value={"српски"}>српски</option>
                <option value={"ромски"}>ромски</option>
                <option value={"босански"}>босански</option>
              </select>

              <label htmlFor="language-select">
                Барам податоците за личното име во образецот да бидат испишани
                на еден од наведените јазици и писмо:
              </label>
              <select id="language-select" {...register("nameLanguage")}>
                <option value={"турски"}>турски</option>
                <option value={"влашки"}>влашки</option>
                <option value={"српски"}>српски</option>
                <option value={"ромски"}>ромски</option>
                <option value={"босански"}>босански</option>
              </select>
            </fieldset>

            <button type="submit">Create</button>
          </div>
        </form>

        <div>{submitted === true && <IDCardDocument />}</div>
      </div>
    </>
  );
};
