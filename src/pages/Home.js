// image
import HOME_IMG from "../Assets/images/home_image.jpg";

export function Home() {
    return (
        <>
            <section id="first-section">
                <h1>Make a splash.</h1>
                <h4>Ever been blown away by a hotel brand?</h4>
                <h4>From concept to visuals: we sketch and script the story of your hotel.</h4>
                <img className="home-img" src={HOME_IMG} alt="bali interior hotel" />
            </section>

            <section id="second-section">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </section>

            <section id="third-section">
                
            </section>

            <section id="fourth-section">
                
            </section>
        </>
    );
}