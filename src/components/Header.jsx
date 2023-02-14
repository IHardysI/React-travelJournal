import logo from "../img/logo.svg"

export default function Header() {
    return(
        <header>
            <img src={logo} className="header__logo"></img>
            <p>
                my travel journal.
            </p>
        </header>
    )
}