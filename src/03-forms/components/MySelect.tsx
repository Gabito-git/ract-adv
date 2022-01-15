import { ErrorMessage, useField } from "formik"

interface Props{
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;    // Parámetros extra opcionales
}

export const MySelect = ({label,...props}: Props) => {

    const [field ] = useField( props );
    // console.log(field);  // acá está el value, onchange, onblur y el name

    return (
        <>
            <label htmlFor={props.id || props.name}>{ label }</label>
            <select {...field} {...props}/>
            <ErrorMessage name={ props.name } component="span"/>
        </>
    )
}
