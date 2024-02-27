import './Footer.css'

export function Footer (){
    return(
        <footer>
            <header className="footer_header">
                <a href="#" className="logo">
                    <img src="https://i.ibb.co/VJDxVyq/Frame-3.png" alt="" />
                </a>
                <a href="#" className="donate_btn">Donate</a>
            </header>
            <div className="footer_content_wrap">
                <h4>Little Art Project respectfully acknowledges the traditional custodians of the land on which we meet, exhibit and create art.</h4>
                <div className="footer_policy">
                    <ul className="footer_policy_menu">
                        <li className="privacy_policy">
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li className="disclaimer">
                            <a href="#">Disclaimer</a>
                        </li>
                        <li className="built_by_bone">
                            <a href="#">Built by Bone</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}