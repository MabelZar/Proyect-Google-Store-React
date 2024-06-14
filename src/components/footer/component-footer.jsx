import footerImages from "../../utils/images-provider.js";
import '../footer/component-footer.css'

function FooterComponent () {
    return (
        <>
            <div className="footer-content">
                <div className="social-media">
                    <img alt="X" src={footerImages.icX}/>
                    <img  alt="Instagram" src={footerImages.icInstagram}/>
                    <img alt="Facebook" src={footerImages.icFacebook}/>
                    <img alt="Youtube" src={footerImages.icYoutube}/>
                    <img alt="Tik Tok" src={footerImages.icTiktok}/>
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
