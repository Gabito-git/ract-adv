import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

const RegisterPage = () => {

    const { 
        name, 
        email, 
        password1, 
        password2, 
        onChange, resetForm, isValidEmail } =useForm({
        name: '',
        email: '',
        password1:'',
        password2:''
    });

    const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input 
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange = {( ev )=> onChange( ev ) }
                    className={`${name.trim().length <=0 && 'has-error'}`}
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange = { onChange }
                    className={`${ !isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail(email) && <span>Email no es válido</span>}

                <input 
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={password1}
                    onChange = { onChange }
                />
                { password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span>}

                <input 
                    type="password"
                    placeholder="Repeat Password"
                    name="password2"
                    value={password2}
                    onChange = { onChange }
                />
                { password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </form>

        </div>
    )
}

export default RegisterPage
