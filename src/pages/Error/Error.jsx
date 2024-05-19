// CSS
import './Error.css'

// Packages
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='errorContainer'>
        <img src='./error.png' alt="" width={'320px'} />
        <h2>404</h2>
        <h3>Página não encontrada.</h3>
        <Link to={'/'}>Voltar para a página inicial</Link>
    </div>
  )
}

export default Error