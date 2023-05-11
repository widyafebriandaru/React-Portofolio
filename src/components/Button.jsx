import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate()
    return(
        <>
        <div className="button-container">
        <button type="button" className="intro-button" onClick={() => navigate('/')}>
        Home
      </button>
        <button type="button" className="intro-button" onClick={() => navigate('/portfolio')}>
        Portfolio
      </button>
      <button type="button" className="intro-button" onClick={() => navigate('/contact')}>
        Kontak
      </button>
      </div>
      </>
    )
}

export default Button;