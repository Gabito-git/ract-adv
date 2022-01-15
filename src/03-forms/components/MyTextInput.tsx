import { ErrorMessage, useField } from "formik"

interface Props{
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;    // Parámetros extra opcionales
}

export const MyTextInput = ({label,...props}: Props) => {

    const [field ] = useField( props );
    console.log(field);  // acá está el value, onchange, onblur y el name

    return (
        <>
            <label htmlFor={props.id || props.name}>{ label }</label>
            <input {...field} {...props}/>
            {/* {
                meta.touched && meta.error && (                         // Asi tambien se puede manejar el error
                    <span>{meta.error}</span>                           // meta se extrae de useField
                )
            } */}
            <ErrorMessage name={ props.name } component="span"/>
        </>
    )
}
