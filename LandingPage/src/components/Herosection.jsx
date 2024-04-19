export default function Herosection(){
    return(
        <>
            <div className="main-hero-section">
                <div className="left-hero-section">
                            <h1 className="left-hero-upper-text">Innovating Today.</h1>
                            <h1 className="left-hero-upper-text">Sustaining Tomorrow.</h1>
                            <p className="left-hero-lower-text">WHERE ARTIFICIAL INTELLIGENCE </p>
                            <p className="left-hero-lower-text">MEETS ENVIRONMENT STEWARDSHIP</p>
                            <button className="navbar-links-button button-margin">Contact Us</button>
                </div>
                <div className="right-hero-section">
                            <video className="right-hero-section-video" src="/public/images/AI Homepage gif.mp4" typeof="video/mp4"></video>
                </div>
            </div>
        </>
    )
}