import data from "./Projects";

const Portfolio = () => {
    

    return (
        <div id="work" className="container">

            <div>
                <h1>Portfolio</h1>
            </div>
            <div className="work-container">
                <div className="work work1">
                    <a href="https://samantha131821.github.io/Topmoviepage/index.html" target="_blank" rel="noreferrer">
                        Top Movie Page
                    </a>
                </div>
                

              {data.map(({ image, link, name }) => (
                <div className="work" style={{backgroundImage: `url("/images/${image}")`}} key={name}>
                    <a href = {link} target="_blank" rel="noreferrer">{name}</a>
                </div>
              ))}
                
            </div>
        </div>
    );
}

export default Portfolio;