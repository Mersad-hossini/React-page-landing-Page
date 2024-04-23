import "./Profit.css"
import Button from "../Button/Button"

function Profit() {
    return (
        <div className="profit">
            <div className="container">
                <div className="profit-wraper">
                    <div className="left-side-img">
                        <img src="macbook-preview-flexible.png" alt="macbook" />
                    </div>
                    <div className="right-side-content">
                        <h3>Html Css Bootstrap</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.</p>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profit