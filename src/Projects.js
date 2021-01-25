import "./Projects.css";

function Projects() {
    return (
        <div className="content">
            <h2>My projects</h2>
            <ul>
                <li>
                    The <a href="http://arcane-badlands-21974.herokuapp.com/">
                    European Sign Language</a> Atlas, a website intended to 
                    show similarities and differences in typological features 
                    in sign languages of Europe, with a Rails backend <a href=
                    "https://github.com/ananari/ESLA-backend"> here</a> and a
                    React frontend <a href="https://github.com/ananari/ESLA-frontend">
                    here</a>.
                </li>
                <br/> <br/>
                <li>
                    A <a href="http://pure-peak-95236.herokuapp.com/">fiber art 
                    pattern finder</a>, which takes a URL of a pattern on 
                    Ravelry, the largest website for knitters and crocheters, 
                    and returns a list of similar patterns, made in conjunction 
                    with <a href="https://github.com/k-christensen">Kate 
                    Christensen</a>. Django backend <a href=
                    "https://github.com/ananari/ravelry-rec-backend">here</a> and
                    React frontend <a href=
                    "https://github.com/ananari/ravelry-similar-patterns-frontend">
                    here</a>.
                </li>
                <br/> <br/>
                <li>
                    An iOS (≥12.0) app that allows a user to type in the Syloti Nagri 
                    script, used for the Sylheti language - more detailed 
                    information available <a href="/sylotikeyboard">here</a>. 
                    Written in Swift with UIKit - source code <a href=
                    "https://github.com/ananari/Syloti-keyboard-iOS">here</a>.
                </li>
                <br/><br/>
                <li>
                    A dictionary for the Sylheti language, made in conjunction 
                    with the Sylheti Project at SOAS University of London - 
                    work in progress, so no finished link available. Cross-platform 
                    mobile code written in Dart+Flutter <a href=
                    "https://github.com/ananari/Sylheti-dictionary">here</a>, 
                    web backend written in Elixir+Phoenix <a href=
                    "https://github.com/ananari/sylheti-backend">here</a>,
                    frontend link will be provided as it becomes available.
                </li>
                <br/><br/>
                <li>
                    This very website, written in React, with source code  <a href="
                    https://github.com/ananari/ananari-heroku">here</a>.
                </li>
            </ul>
        </div>
    )
}

export default Projects;