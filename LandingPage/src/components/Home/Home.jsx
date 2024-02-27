import './Home.css';

export function Home() {
    return (
        <div className='home-container' style={{ backgroundImage: 'url(https://www.artsproject.org.au/content/uploads/2023/12/Arts-Project-Australia-Mobile-Header.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%' }}>
            <div className="home_background">
            </div>
            <div>
                <h1>
                    Little artists
                    <br></br>
                    Big Art
                </h1>
                <p>Supporting artists with intellectual disabilities through our studio and gallery. Promoting new and exciting work. Advocating for their inclusion in contemporary art.</p>
                <div className="button_lockup">
                    <a href="#">Browse artists</a>
                </div>
            </div>
        </div>
    );
}
