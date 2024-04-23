import "./Header.css"

import Button from "../Button/Button"

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <h1 className="header-title">It Will Change Everything <br /> By Mersad</h1>
                    <p className="header-text">I'm The Only One Who Possibly Can</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    )
}

export default Header