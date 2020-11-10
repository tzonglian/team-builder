import React from 'react'

export default function Form(props){
    const {values, update, submit}= props
}






return(
<form className="form container" onSubmit={onSubmit}>
<div className="form-group inputs">

{/* // STEP 3 - Make an input of type `text` for username.
//               Controlled inputs need `value` and `onChange` props.
//               Inputs render what they're told - their current value comes from app state.
//               At each keystroke, a change handler fires to change app state.  */}

<label>Username
<input 
type="text"
name="username"
onChange={onChange}
vaule={values.username.}
placeholder="type a Name"
maxLength="30"
></input>
</label>


{/* STEP 4 - Make an input of type `email` or `text` for email. */}
<label>
    Email
    <input
    type="email"
    name="email"
    onChange={onChange}
    value={value.email}>
        </input>
    </label>
{/* STEP 5 - Make dropdown for role. */}
    <label>
        Role
        <select name="role" value={values.role}
        onchange={onChange}>
            <option value="Tank">Tank/</option>
            <option value="Healer">Healer</option>
            <option value="Damage">Damge</option>
        </select>
    </label>
</div>
</form>
);
