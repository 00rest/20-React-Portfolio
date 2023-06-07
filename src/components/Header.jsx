import { About, Portfolio, Contact, Resume } from "./Navigation";

const Header = () => {

    return (
        <header>
            <nav className="header-container">
                <h1>Orest Panas</h1>
                <ul>
                    <About />
                    <Portfolio />
                    <Contact />
                    <Resume />
                </ul>
            </nav>
            <div className="header-image">
                <h2>Making the world a better place</h2>
            </div>
        </header>
    )
};


export default Header;

