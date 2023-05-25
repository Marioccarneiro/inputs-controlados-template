import React , {useState} from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')
  const [maritalStatus, setMaritalStatus] = useState ('')
  const [emailInput, setEmailinput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleChange = (event) => {
    setNameInput(event.target.value)
  }
  const handleChange2 = (event) => {
    if (event.target.value >= 0)setAgeInput(event.target.value)
  }
  const handleChange3 = (event) => {
    setMaritalStatus(event.target.value)
  }

  const handleChange4 = (event) => {
    setEmailinput(event.target.value)
  }
  const handleChange5 = (event) => {
    setPasswordInput(event.target.value)
  }

  const cleanInputValues = (event) => {
    event.preventDefault()

    setNameInput('')
    setAgeInput('')
    setEmailinput('')
    setPasswordInput('')
    setMaritalStatus('')
  }



  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={cleanInputValues}>
        <label>
          Nome:
          <Input onChange={handleChange} value={nameInput}/>
        </label>
        <label>
          Idade:
          <Input onChange={handleChange2} value={ageInput} type = 'Number'/>
        </label>
        <label>
          E-mail:
          <Input onChange={handleChange4} value={emailInput} />
        </label>
        <label>
          Senha:
          <Input onChange={handleChange5} value={passwordInput} type = 'password'/>
        </label>
        <select onChange={handleChange3} valeu = {maritalStatus}>
          <option value='' disabled selected>Nenhum</option>
          <option value='Solteiro'>Solteiro (a)</option>
          <option value='Casado'>Casado (a)</option>
          <option value='Viuvo'>Viuvo (a)</option>
          <option value='Divorciado'>Divorciado (a)</option>
        </select>
        <button
        disabled={
          nameInput.length && ageInput.length && maritalStatus.length
           ? false
           : true}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
