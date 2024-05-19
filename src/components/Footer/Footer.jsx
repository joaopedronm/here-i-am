import './Footer.css'

const Footer = () => {
  return (
    <footer>

        <div className='footerLogo'>
            <img src={'./logo-2.png'} alt="" width={'75px'} />
        </div>

        <div className='footerCredits'>
            <p className="footer__copy">&#169; <a href='https://mrfrontend.tech' target={'_blank'}>João Pedro</a>, 2024. Todos os direitos reservados.</p>
        </div>

    </footer>
  )
}

export default Footer