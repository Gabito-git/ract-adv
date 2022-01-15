import {  Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

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
                            <label htmlFor='firstName'>First Name</label>
                            <Field name="firstName" type="text"/>
                            <ErrorMessage name="firstName" component="span"/>
            
                            <label htmlFor='lastName'>Last Name</label>
                            <Field name="lastName" type="text"/>
                            <ErrorMessage name="lastName" component="span"/>
            
                            <label htmlFor='email'>Email Address</label>
                            <Field name="email" type="email"/>
                            <ErrorMessage name="email" component="span"/>

                            <label>
                                <Field name="terms" type="checkbox"/>
                                Terms and conditions
                            </label>
                            <ErrorMessage name="terms" component="span"/>

                            <label htmlFor='jobType'></label>
                            
                            <Field name="jobType" as="select">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-sr">IT Senior</option>
                                <option value="it-jr">IT Junior</option>
                            </Field>
                            <ErrorMessage name="jobType" component="span"/>
            
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>

          
        </div>
    )
}


