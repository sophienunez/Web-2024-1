export function VisitorInfo (){
    return(
        <section id="visitor_info">
            <div id="visitor_header">
                <h2>Visitor Info</h2>
                <p>Visit our Little Art Gallery or Southcore studio</p>
            </div>
            <div id="locations">
                <button id="location_btn">
                    <div id="button_text">
                        <h3>Little Art Gallery</h3>
                        <span>Now Closed</span>
                    </div>
                    <figure id="arrow">
                        acá va el icono
                    </figure>
                </button>
                <div id="toggle_location">
                    <div id="opening_hours">
                        <h4>Opening Hours</h4>
                        <p>
                            Monday to Tuesday: Closed
                            <br />
                            Wednesday to Friday: 11:00 am - 5:00 pm
                            <br />
                            Saturday: 12:00 pm - 4:00 pm
                            <br />
                            Sunday: Closed
                        </p>
                    </div>
                    <div id="location">
                        <h4>Location</h4>
                        <p>
                        Level 1 Perry Street Building
                        <br />
                        Collingwood Yards
                        <br />
                        30 Perry Street, Collingwood
                        </p>
                        <a href="">Get Directions</a>
                    </div>
                    <div id="contact">
                        <h4>Contact</h4>
                        <p>03 1234 5678</p>
                        <a href="">Email us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}