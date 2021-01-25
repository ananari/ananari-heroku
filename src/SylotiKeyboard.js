import "./SylotiKeyboard.css";
import appscreenshot from './appscreenshot.jpg';

function SylotiApp() {
    return (
        <div className="content">
            <div className="right">
              <img src={appscreenshot} alt="screenshot of Syloti Keyboard app" />
            </div>
            <h2>Syloti Keyboard</h2>
            <p>
                Syloti Keyboard is an app for writing the Syloti Nagri script, 
                used for writing the Sylheti language, which is spoken by 
                eleven million people in northeastern Bangladesh and India. 
                The earliest known work using the script comes from 1549, and 
                it was used continuously until the 20th century, when the 
                language was discouraged in writing in favour of Bengali. 
                Nowadays, it is experiencing a revitalization movement, with 
                Sylhetis both in South Asia and in the diaspora looking to 
                write Sylheti using its traditional script. Sylheti Keyboard is 
                built in Swift for iOS 12.0 and above, and provides a keyboard 
                for iOS users to be able to write Syloti Nagri on their devices. 
                You can find the link for the app on the App Store <a href=
                "https://apps.apple.com/us/app/syloti-keyboard/id1515279890">here</a>.
            </p>
            <h2>For non-iOS users</h2>
            <p>
                If you are interested in typing Syloti Nagri on Android, Gboard 
                now has a Syloti Nagri keyboard available. In addition, there 
                are a few standalone apps on Android as well, such as <a href=
                "https://play.google.com/store/apps/details?id=com.company.nagrikeyboard&hl=en_US&gl=US">
                this one</a>, but I have not used any of them myself. For 
                Windows users, the Sylheti Translation And Research group have 
                released <a href="http://www.sylheti.org.uk/unicode-font">
                an installer</a> made in <a href=
                "https://www.microsoft.com/en-us/download/details.aspx?id=102134">
                MSKLC</a> for a Sylheti keyboard layout, along with their font 
                Surma, which I highly recommend for anyone. 
            </p>
            <h2>Privacy policy</h2>
            <p>
              This policy applies to the app Syloti Keyboard, available on iOS. 
              It is current as of 24 January, 2021.
            </p>
            <h3>Information collected</h3>
            <p>
              This app collects no identifying information — no keystroke or 
              typing data is collected, and no login is required to use Syloti 
              keyboard. The only sort of information collected is that Apple 
              collects crash logs and statistics regarding use of the app. 
              All this information is anonymous and aggregated, used to help  
              improve the app. If you would like your information to be removed, 
              do not hesitate to reach out. This app complies with the California 
              Online Privacy Protection Act, and will not distribute your personal 
              information to outside parties without your consent. This app does 
              not collect information from anyone under 13, and no part of the 
              app is aimed at anyone under 13.
            </p>
            <h3>For European Union Consumers</h3>
            <p>
              By using Syloti Keyboard and providing your information, you 
              authorize this to collect, use, and store your information 
              outside of the European Union.
            </p>
            <h3>International Transfers of Information</h3>
            <p>
              Information may be processed, stored, and used outside of the 
              country in which you are located. Data privacy laws vary across 
              jurisdictions, and different laws may be applicable to your data 
              depending on where it is processed, stored, or used.
            </p>
            <h3>Your Consent, and Contact Info</h3>
            <p>
              By using Syloti Keyboard, you consent to its privacy policy.
            If you have any questions about the privacy policy or would like to 
            request deletion of your information, you can reach out <a href="mailto:anaismahmed@gmail.com">here</a>.
            </p>
        </div>
    )
    
}

export default SylotiApp;