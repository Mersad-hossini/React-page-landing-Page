import "./Gallery.css"

export default function Gallery() {
    return(
        <section className="gallery-section">
            <div className="content-text">
                <h2 className="gallery-title">Our Gallery</h2>
                <p className="gallery-text">Here is our latest Pictures. You'll love them!</p>
            </div>

            <div className="img-wrapper">
                <img src="image1.jpg" alt="image" />
                <img src="image2.jpg" alt="image" />
                <img src="image3.jpeg" alt="image" />
                <img src="image4.jpeg" alt="image" />
                <img src="image5.jpeg" alt="image" />
                <img src="image6.jpg" alt="image" />
                <img src="image7.jpg" alt="image" />
                <img src="image8.jpg" alt="image" />
            </div>
        </section>
    )
}