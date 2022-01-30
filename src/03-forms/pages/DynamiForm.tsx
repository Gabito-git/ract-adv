
import formJson from '../data/custom-form.json'
import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues:{[key: string]: any} = {}               // Construccion del objeto a partir de valires dinámicos
const validatedFields: {[key: string]: any} = {}

for (const input of formJson) {                             
    initialValues[ input.name ] = input.value               // Se saca cada input del json y se construye el initial values

    if(!input.validations) continue                         // Si no trae campo validaciones continúe con el ciclo
    let schema = Yup.string()                               // Se inicia el esquema de validaciones
    for( const rule of input.validations ){
        if( rule.type === 'required' ){
            schema = schema.required('Requerido')           // Se le van agregadon las propiedades
        }

        if( rule.type === 'minLength' ){
            schema = schema.min((rule as any).value,'Debe tener más de 5 caracteres');
        }

        if( rule.type === 'email' ){
            schema = schema.email('El formato de e-mail no es correcto');
        }
        // Más reglas
    }

    validatedFields[input.name] = schema                    // Con el esquema completo, se agrega al objeto con el nombre del campo
}

/*
 La estuctura del objeto de validaciones es Yup.object({
     firstName: Yup.string()
                .required('Requerido)
    .... etc
 })
*/

const validationSchema = Yup.object( {...validatedFields} )

export const DynamicForm = () => {

  return (
      <div>
          <h1>Dynamic Form</h1>
          <Formik
            initialValues={ initialValues }
            onSubmit={( values ) => console.log(values)}
            validationSchema={ validationSchema }
          >
              {
                  (formik) => (
                      <Form noValidate>
                          {formJson.map( ({type, placeholder, name, label, options}) => {

                            const inputTypes = ['text', 'email', 'password']

                            if(inputTypes.includes( type )){
                                return<MyTextInput 
                                        key={ name }
                                        type={ type as any }
                                        label={label} 
                                        name={name} 
                                        placeholder={ placeholder }
                                    />
                            }else if(type === 'select'){
                                return(
                                    <MySelect 
                                        key={ name }
                                        name={ name }
                                        label={label}
                                    >
                                        <option value="">Select an option</option>
                                        { options?.map( ({ id, label }) => 
                                          (<option key={id} value={id} >{ label }</option> )) 
                                        }
                                    </MySelect>
                                )
                            }


                            throw new Error(`El tipo ${type} no es soportado`)
                          } )}
                          <button type="submit">Submit</button>
                      </Form>
                  )
              }
          </Formik>
      </div>
  )
};
