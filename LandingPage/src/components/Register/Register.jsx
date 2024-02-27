export function Register (){
    return(
        <section id="register">
            <header id="register_header">
                <h2>Get the latest news</h2>
                <p>Sign up to our mailing list to receive art-related news and exhibition announcements from Arts Project Australia.</p>
            </header>
            <div id="form_fields">
                <div id="name">
                    <h4>Name</h4>
                    <input type="text" id="name_input" placeholder="Type your name"/>
                </div>
                <div id="email">
                    <h4>Email</h4>
                    <input type="text" id="name_input" placeholder="Type your email"/>
                </div>
            </div>
            <footer id="register_footer">
                <button id="register_btn">
                    <span>Subscribe to email</span>
                </button>
            </footer>
        </section>
    )
}