import { useState } from 'react'

export default function CheckoutForm(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    address: ''
  });

  function handleSubmit(event) {
    // cada vez que se cambie un dato en el formulario, vamos a estar cambiando el estado formData
    console.log(event)
    event.preventDefault()
    props.handleCheckout(formData)
  }

  function handleChange(event) {
    console.log(event.target)
    const inputName= event.target.name;
    const inputValue= event.target.value;

    //const newFormData = {...formData, [inputName]: inputValue};
    const newFormData = {...formData}
    newFormData[inputName] = inputValue
    setFormData(newFormData);
  }


  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h4>Ingresa tus datos personales</h4>
        <div className='checkout-form'>
          <label>
            Nombre:
            <input value={formData.username} onChange={handleChange} name='username' type="text" placeholder="nombre" required />
          </label>
          <label>
            Email:
            <input value={formData.email} onChange={handleChange} name="email" type="email" placeholder="email@email" required />
          </label>
          <label>
            Teléfono:
            <input value={formData.phone} onChange={handleChange} name="phone" type="tel" placeholder="545315671234" required />
          </label>
          <label>
            Dirección:
            <input value={formData.address} onChange={handleChange} name="address" type="text" placeholder="dirección" required />
          </label>
        </div>
        <button type="submit">Confirmar</button>
        <button type="button">Cancelar u otra cualquier cosa</button>
        <button type="reset">Limpiar formulario</button>
      </form>
    </section>
  )
}