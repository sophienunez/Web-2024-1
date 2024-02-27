import './Exhibitions.css'

export function Exhibitions (){
    return(
        <section className="exhibition">
            <div>
                <h2>
                    Exhibition at
                    <br />
                    Little art gallery
                </h2>
                <img src="https://www.artsproject.org.au/content/uploads/2023/12/1-2-scaled-1-1536x524.webp" alt="" />
            </div>
            <div className="events">
                <div className="card">
                    <div className='artist-info'>
                       <h3 className="card_title">Aleksandra Art Fair 2024</h3>
                       <h6 className="card_date">10 February - 23 March</h6> 
                    </div> 
                    <p className="card_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam omnis est voluptatum, doloremque quam delectus, voluptatem asperiores perspiciatis adipisci eaque facere amet, sunt molestiae maiores eveniet unde esse! Enim, fuga.</p>
                    <div className="card_button">
                        <a href="#">
                            <span>More Info</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}