import React from 'react'
import { Field, reduxForm } from 'redux-form'

let FormLogin = (props) => {
    return (
         <form>
                        <Field className="input" name="username" component="input" type="text" placeholder="Username" /><br /><br/>
                        <Field className="input" name="password" component="input" type="text" placeholder="Password" />
                    </form>
    )
}

FormLogin = reduxForm(
    {
        form: "FormLogin"
    })(FormLogin)
export default FormLogin