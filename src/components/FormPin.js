import React from 'react'
import { Field, reduxForm } from 'redux-form'

let FormPin = (props) => {
        let {addCurrentUser,Loading} = props    
    return (
        <div className="column is-4 is-offset-4">
        <form>
                       <center><h1 className="subtitle">PIN <Field className="input" name="pin" component="input" type="text" placeholder="PIN" /></h1></center>
                        
                    </form><br/>
                    <center>{Loading >= 1 ? <a className="button is-primary is-loading">Loading</a>:<button className="button is-primary" onClick={() => addCurrentUser()} >OK</button>}
                    </center>
            </div>
         
    )
}

FormPin = reduxForm(
    {
        form: "Pin"
    })(FormPin)
export default FormPin