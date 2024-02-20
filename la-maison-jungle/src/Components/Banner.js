import "../styles/Banner.css"
import logo from "../assets/logo.png"

function Banner(){
    const title = "La maison jungle"

    return (
        <div className="lmj-banner">
            <div className="lmj-banner-row">
                <img src={logo} alt="La maison jungle" className="lmj-logo"/>
                <h1 className="lmg-title">{title}</h1>
            </div>
        </div>
    );
}

export default Banner