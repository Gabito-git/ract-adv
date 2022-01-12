import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css'

interface FormikValues{
    firstName: string;
    lastName: string;
    email: string;
}

const FormikBasicPage = () => {

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

    const { handleChange, values, handleSubmit } = useFormik({
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
                    onChange={ handleChange }
                    value={ values.firstName}
                />
                <span>First name is required</span>

                <label htmlFor='lastName'>Last Name</label>
                <input 
                    name="lastName"
                    onChange={ handleChange }
                    value={ values.lastName}
                />
                <span>Last name is required</span>

                <label htmlFor='email  '>Email Address</label>
                <input 
                    name="email"
                    type="email"
                    onChange={ handleChange }
                    value={ values.email}
                />
                <span>Email is required</span>
                <span>Check for an invalid email format</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormikBasicPage
