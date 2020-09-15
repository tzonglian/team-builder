import React, {useState} from 'react';
//import './styles.less'
import Form from './Form'
import Teammate from './Teammate'

const initialFormValues = {
  name: '', email: '', role: '',
}

function App() {
  const [team, setTeam] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue})
  }

  const submitForm = () =>{
    const newTeammate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newTeammate.name || !newTeammate.email || !newTeammate.role) {
      return
    }

    setTeam([...team, newTeammate])
    setFormValues(initialFormValues)
  }

  return (
    <div className="container">
      <h1>Create Team</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        team.map(teammate => {
          return (
            <Teammate key={teammate.id} details={teammate} />
          )
        })
      }
        
    </div>
  );
}

export default App;
