import { useState } from 'react'

export default function CheckoutForm(props) {
  // Usamos este objeto de estado para controlar los datos ingresados en el formulario
  // cada vez que se cambie un dato en el formulario, vamos a estar cambiando el estado formData, por el onChange
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    address: ''
  });

  function clearForm() {
    setFormData({
      username: '',
      email: '',
      phone: '',
      address: ''
    })
  }

  function handleSubmit(event) {
    event.preventDefault()      /* Evita que el formulario se envíe y recargue la página */
    props.onSubmit(formData)
  }

  function handleChange(event) {
    const inputName= event.target.name
    const inputValue= event.target.value
    const newFormData = {...formData}     /* Alternativa: const newFormData = {...formData, [inputName]: inputValue}; */
    newFormData[inputName] = inputValue
    setFormData(newFormData);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h4>Ingresa tus datos personales</h4>
        <div className='checkout-form'>
          <label>Nombre:
            <input name='username' type='text' placeholder='nombre' required onChange={handleChange} value={formData.username} />
          </label>
          <label>Email:
            <input name='email' type='email' placeholder='email@email' required onChange={handleChange} value={formData.email} />
          </label>
          <label>Teléfono:
            <input name='phone' type='tel' placeholder='5493151234567' required onChange={handleChange} value={formData.phone} />
          </label>
          <label>Dirección:
            <input name='address' type='text' placeholder='dirección' required onChange={handleChange} value={formData.address} />
          </label>
        </div>
        <button type="submit">Confirmar</button>
        <button type="button">Cancelar u otra cualquier cosa</button>
        <button type="button" onClick={clearForm}>Limpiar formulario</button>
      </form>
    </section>
  )
}
