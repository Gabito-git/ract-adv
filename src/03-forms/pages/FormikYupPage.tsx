import {  useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'

export const FormikYupPage = () => {

    const { touched, handleSubmit, errors, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email:'',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                          .max(15, 'Debe tener máximo 15 caracteres')
                          .required('Requerido'),
            lastName: Yup.string()
                          .max(15, 'Debe tener máximo 15 caracteres')
                          .required('Requerido'),
            email: Yup.string()
                      .email('El E-mail no tiene un formato válido')
                      .required('Requerido')
        })
    })

    return (
        <div>
            <h1>Formik Yup</h1>

            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor='firstName'>First Name</label>
                <input {...getFieldProps('firstName')}/>
                {touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor='lastName'>Last Name</label>
                <input {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName && <span>{ errors.lastName}</span>}

                <label htmlFor='email'>Email Address</label>
                <input 
                    type="email"
                    {...getFieldProps('email')}
                />
                {touched.email && errors.email && <span>{errors.email}</span> }

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


