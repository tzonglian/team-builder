import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
			// passes in the name of the form, and the value of the form
			const {name, value} = evt.target 
			update(name, value) // function from parent component App.js
		}
    const onSubmit = evt => {
			evt.preventDefault()
			submit()
		}

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label> Name
                    <input
												type='text'
												name='name'
												onChange={onChange}
												value={values.name}
												placeholder='Type a Name'
												maxLength='30'
												/>
                </label>
                <label> Email
                    <input
												type='email'
												name='email'
												onChange={onChange}
												value={values.email}
												placeholder='Enter Email'
												maxLength='30'
												/>
                </label>
								<label> Role
										<select name='role' value={values.role} 
										onChange={onChange}>
											<option value="">-- Select Role --</option>
											<option value="mainChara">Main Character</option>
											<option value="supChara">Supporting Character</option>
											<option value="teamMascot">Team Mascot</option>
											<option value="advisor">Advisor</option>
										</select>
                </label>

								<div className='submit'>
									<button disabled={!values.name || !values.email || !values.role}>Submit!</button>
								</div>

            </div>
        </form>
    )
}