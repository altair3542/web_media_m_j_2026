function SuccessMessage({ user, onReset }) {
  return (
    <section className="success-box">
      <p>
        Bienvenido, <strong>{user.nombre}</strong>
      </p>
      <p>Tu correo registrado es: {user.correo}</p>
      <p>Programa seleccionado es: {user.programa}</p>
      <button type="button" onClick={onReset}>
        Registrar otro usuario
      </button>
    </section>
  )
}

export default SuccessMessage
