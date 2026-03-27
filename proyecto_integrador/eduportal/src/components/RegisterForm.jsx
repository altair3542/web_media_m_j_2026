import { useState } from 'react'
import FormField from './FormField'
import SuccessMessage from './SuccessMessage'

const INITIAL_FORM = {
  nombre: '',
  correo: '',
  programa: '',
  password: '',
}

function RegisterForm() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submittedUser, setSubmittedUser] = useState(null)

    const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
        if (!value.trim()) return 'El nombre es obligatorio.';
        if (value.trim().length < 3) {
          return 'Debe tener al menos 3 caracteres.';
        }
        return '';

      case 'correo':
        if (!value.trim()) return 'El correo es obligatorio.';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Correo no válido.';
        return '';

      case 'programa':
        if (!value.trim()) return 'El programa es obligatorio.';
        return '';

      case 'password':
        if (!value) return 'La contraseña es obligatoria.';
        if (value.length < 6) return 'Debe tener al menos 6 caracteres.';
        return '';

      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {}

    Object.keys(formData).forEach((field) => {
      const errorMessage = validateField(field, formData[field])
      if (errorMessage) {
        newErrors[field] = errorMessage
      }
    })

    return newErrors;
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value)
    }))
  }

   const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setSubmittedUser({ ...formData });
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  const handleReset = () => {
    setSubmittedUser(null);
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  if (submittedUser) {
    return <SuccessMessage user={submittedUser} onReset={handleReset} />
  }

  return (
    <section className="card">
      <h2>Registro de usuario</h2>
      <p className="card-description">
        Completa los campos para crear un nuevo registro académico.
      </p>

      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <FormField
          label="Nombre completo"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          error={errors.nombre}
          placeholder="Ej. Laura Martínez"
        />

        <FormField
          label="Correo electrónico"
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          error={errors.correo}
          placeholder="ejemplo@correo.com"
        />

        <FormField
          label="Programa"
          name="programa"
          value={formData.programa}
          onChange={handleChange}
          error={errors.programa}
          placeholder="Ej. Análisis y Desarrollo de Software"
        />

        <FormField
          label="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Mínimo 6 caracteres"
        />

        <button type="submit">Registrar usuario</button>
      </form>
    </section>

  )

}

export default RegisterForm

