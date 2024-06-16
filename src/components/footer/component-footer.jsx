import footerImages from "../../utils/images-provider.js";
import '../footer/component-footer.css'

function FooterComponent () {
    return (
        <>
            <div className="footer-content">
                <div className="social-media">
                    <a href="https://x.com/madebygoogle">
                    <img alt="X" src={footerImages.icX}/>
                    </a>
                    <a href="https://www.instagram.com/madebygoogle/">
                    <img alt="Instagram" src={footerImages.icInstagram}/>
                    </a>
                    <a href="https://www.facebook.com/madebygoogle">
                    <img alt="Facebook" src={footerImages.icFacebook}/>
                    </a>
                    <a href="https://www.youtube.com/madebygoogle">
                    <img alt="Youtube" src={footerImages.icYoutube}/>
                    </a>
                    <a href="https://www.tiktok.com/@googlepixel">
                    <img alt="Tik Tok" src={footerImages.icTiktok}/>
                    </a>
                </div>
                <div className="flag-box">
                <img alt="Spain" src={footerImages.icSpain} className="Spain" id="bandera_desktop"/>
                </div>
                <div className="second-content">
                    <nav>
                        <ul className="footer-list">
                            <li id="pais_desktop"><a href="#">Spain</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Google Nest Commitment to Privacy</a></li>
                            <li><a href="#">Sales Terms</a></li>
                            <li><a href="#">Terms of Services</a></li>
                        </ul>
                    </nav>
                </div>
                <label id="pais_movil">Spain<img alt="Spain" src={footerImages.icSpain}/></label>
            </div> 
        </>
    );
};

export default FooterComponent;
