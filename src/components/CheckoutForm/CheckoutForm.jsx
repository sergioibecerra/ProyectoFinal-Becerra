import './CheckoutForm.css'
import { useState } from 'react'

export default function CheckoutForm(props) {
  const [processing, setProcessing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    address1: '',
    address2: ''
  });

  function handleSubmit(event) {
    event.preventDefault()  /* Evita que el formulario se envíe y recargue la página */
    const confirmed = window.confirm('¿Confirma y envía la orden de compra?');
    if (confirmed) {
      setProcessing(true)
      props.onSubmit(formData)
    }
  }

  function cancelForm() {
    props.onCancel()
  }

  function clearForm() {
    setFormData({
      username: '',
      email: '',
      phone: '',
      address1: '',
      address2: ''
    })
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
        <div className='checkout-form'>
          <label htmlFor='username'>Nombre:</label>
          <input id='username' name='username' type='text' placeholder='nombre' required onChange={handleChange} value={formData.username} />

          <label htmlFor='email'>Email:</label>
          <input id='email' name='email' type='email' placeholder='email@email' required onChange={handleChange} value={formData.email} />

          <label htmlFor='phone'>Teléfono:</label>
          <input id='phone' name='phone' type='tel' placeholder='03511234567' required onChange={handleChange} value={formData.phone} />

          <label htmlFor='address1'>Dirección 1:</label>
          <input id='address1' name='address1' type='text' placeholder='calle, número de puerta, unidad, complejo' required onChange={handleChange} value={formData.address1} />

          <label htmlFor='address2'>Dirección 2:</label>
          <input id='address2' name='address2' type='text' placeholder='cp, localidad, provincia, país' required onChange={handleChange} value={formData.address2} />
        </div>
        <div className='section-footer'>
          <button type="submit" className='section-button' disabled={processing}>Confirmar compra</button>
          <button type="button" className='section-button' onClick={cancelForm} disabled={processing}>Cancelar</button>
          <button type="button" className='section-button' onClick={clearForm} disabled={processing}>Limpiar formulario</button>
        </div>
      </form>
    </section>
  )
}
