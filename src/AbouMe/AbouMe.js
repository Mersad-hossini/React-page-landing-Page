import "./AbouMe.css"
import Button from "../Button/Button"

function AbouMe() {
    return (
        <section className="aboutMe-section">
            <div className="container">
                <div className="about-me-wrapper">
                    <h1 className="about-me-title">My Name IS Mersad</h1>

                    <p className="about-me-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis.</p>
                    <Button></Button>
                </div>
            </div>
        </section>
    )
}

export default AbouMe