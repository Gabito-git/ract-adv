import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckBox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css'

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email:'',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={( values ) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                                      .max(15, 'Debe tener máximo 15 caracteres')
                                      .required('Requerido'),
                        lastName: Yup.string()
                                      .max(15, 'Debe tener máximo 15 caracteres')
                                      .required('Requerido'),
                        email: Yup.string()
                                  .email('El E-mail no tiene un formato válido')
                                  .required('Requerido'),
                        terms: Yup.boolean()
                                  .oneOf([true], 'Debe aceptar las condiciones'),
                        jobType: Yup.string()
                                    .notOneOf([ 'it-jr'], 'Esta opción no es permitida')
                                    .required('Requerido')
                    })
                }
            >
                {
                    () =>  (
                        <Form >

                            <MyTextInput 
                                label="First Name" 
                                name="firstName" 
                                placeholder="First name"
                            />

                            <MyTextInput 
                                label="Last Name"
                                name="lastName"
                                placeholder="Last Name"
                            />

                            <MyTextInput 
                                label="Email Address"
                                name="email"
                                type="email"
                            />

                            <label htmlFor='jobType'></label>
                            
                            <MySelect name="jobType" label="Job Type">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-sr">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </MySelect>

                            <MyCheckBox label='Terms & Conditions' name="terms" />
                                        
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>

          
        </div>
    )
}
