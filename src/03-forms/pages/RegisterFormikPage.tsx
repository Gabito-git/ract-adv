
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../styles/styles.css';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {
    
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name:'',
                    email:'',
                    password1:'',
                    password2:''
                }}
                onSubmit={( values ) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                .min(2, 'Debe tener al menos dos caracteres')
                                .max(15, 'Debe tener máximo 15 caracteres')
                                .required('Requerido'),
                        email: Yup.string()
                                .email('El e-mail no tiene un formato válido')
                                .required('Requerido'),
                        password1: Yup.string()
                                .min(6, 'Denbe tener al menos 6 caracteres')
                                .required('Requerido'),
                        password2: Yup.string()
                                .required('Requerido')
                                .oneOf([Yup.ref('password1'), null], "Las constraseñas deben coincidir")
                        
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <label htmlFor='name'>Name</label>
                            <Field name="name" type="text" placeholder="Gabriel"/>
                            <ErrorMessage name="name" component="span"/>
                          
                            <label htmlFor='email'>Email Address</label>
                            <Field name="email" type="email"/>
                            <ErrorMessage name="email" component="span"/>

                            <label htmlFor='password1'>Password</label>
                            <Field name="password1" type="password"/>
                            <ErrorMessage name="password1" component="span"/>

                            <label htmlFor='password2'>Confirm Password</label>
                            <Field name="password2" type="password"/>
                            <ErrorMessage name="password2" component="span"/>
                            
                            <button type="submit">Create</button>
                            <button type="button" onClick={ handleReset }>Reset Form</button>
                        </Form>
                    )
                }
                
            </Formik>

        </div>
    )
}

