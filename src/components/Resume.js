import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div id="about-me" className="container">

            <div>
                <h1>Resume</h1>
            </div>

            <p>
                <img src="./images/resume.jpg" alt="Resume" />
                <Link to="/images/resume.pdf" target="_blank" download >Download</Link>               
            </p>
            
        </div>
    );
}

export default Resume;