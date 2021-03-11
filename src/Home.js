import "./Home.css"
import resumé from "./resumé.pdf";

function Home() {
    return (
        <div className="content">
            <h2>About me</h2>
            <p>
                My name is Anaïs Ahmed, and I live is Austin, Texas. 
                I graduated from the Uni­versity of Chicago in 2016, with a BA 
                in Linguistics.
            </p>
            <p>   
                Nowadays, I am a web and mobile developer. The bulk 
                of projects that I have worked on are language-related — I have 
                made an iOS keyboard to help type the Syloti Nagri alphabet, 
                used to write the Sylheti language, spoken in north­eastern 
                Bangladesh and India. Currently, I am working on a Sylheti 
                dic­tionary in conjunction with the Sylheti Project at SOAS 
                University of London, available for both mobile and web. My
                resumé can be found <a href={resumé} target="_blank" rel="noreferrer">here</a>, 
                and a list of all my projects can be found <a href="/projects">
                here</a>. My Github is <a href="https://github.com/ananari/">here</a>.
                You can also find me regularly Tweeting about languages 
                and programming <a href="https://twitter.com/tramslinguistic">
                here</a>.
             </p>
             <p>
                Apart from linguistics and programming, my biggest interests 
                are music and typography. I am an accordionist and singer, and 
                I used to sing and play with the choir <a href="http://www.golosa.org/">
                Golosa</a> for many years. Lately I have been getting into 
                type design, with a particular interest in making typefaces 
                for Syloti Nagri that represent the diversity in Sylheti books, 
                as well as exercising my own creativity in making new Sylheti 
                typefaces.
            </p>
        </div>
    )
}

export default Home;