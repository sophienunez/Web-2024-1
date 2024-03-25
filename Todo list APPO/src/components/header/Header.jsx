import './header.css'

export function Header () {
  return (
    <div className='header-container'>
      <img src='../src/assets/Assasin-Logo.png' alt='' className='logo' />
      <h1>¡Planifica tus ataques!</h1>
      <p id='description'>Escribe el nombre de tus próximas víctimas y tacha a quienes hayas eliminado</p>
    </div>
  )
}
