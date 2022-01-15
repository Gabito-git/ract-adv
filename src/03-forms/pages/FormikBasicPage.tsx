import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css'

interface FormikValues{
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ( { firstName, lastName, email }: FormikValues) => {
        const errors: FormikErrors<FormikValues> = {};

        if(!firstName){
            errors.firstName = 'Required'
        }else if( firstName.length > 15 ){
            errors.firstName = 'Must be 15 characters or less';
        }

        if(!lastName){
            errors.lastName = 'Required'
        }else if( lastName.length > 10 ){
            errors.lastName = 'Must be 10 characters or less';
        }

        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    }

    const { 
        handleChange, touched, handleBlur,
        values, handleSubmit, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email:'',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    })

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={ handleSubmit }>
                <label htmlFor='firstName'>First Name</label>
                <input 
                    name="firstName"
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor='lastName'>Last Name</label>
                <input 
                    name="lastName"
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.lastName}
                />
                {touched.lastName && errors.lastName && <span>{ errors.lastName}</span>}

                <label htmlFor='email'>Email Address</label>
                <input 
                    name="email"
                    type="email"
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ values.email}
                />
                {touched.email && errors.email && <span>errors.email</span> }

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

