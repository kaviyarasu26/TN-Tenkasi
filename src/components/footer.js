import '../StyleSheet/footer.css';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer'>
                <div className="foot">
                    <ul type="none">
                        <lh className="footer-lh" >Service</lh>
                        <li className="footer-li"><Link className="link" to="/gov/agricultureOffices">Agriculture Offices</Link></li>
                        <li className="footer-li"><Link className="link" to="/gov/communityhall">Community Hall</Link></li>
                        <li className="footer-li"><Link className="link" to="/gov/firestation">Fire Station</Link></li>
                        <li className="footer-li"><Link className="link" to="/gov/govartcollege">Government Art College</Link></li>
                    </ul>
                </div>
                <div className="foot">
                    <ul type="none">
                        <li className="footer-li"><Link className="link" to="/gov/governmentschool">Government School</Link></li>
                        <li className="footer-li"><Link className="link" to="/gov/govsubsidizitionprogram">Government Subsidizition Program</Link></li>
                        <li className="footer-li"><Link className="link" to="/gov/libraries">Libraries</Link></li>
                        <li className="footer-li"><Link className="link" to="/gov/municipalityoffice">Municipality Office</Link></li>
                    </ul>
                </div>
                <div className="foot">
                    <ul type="none">
                        <li className="footer-li"><Link className="link" to="/gov/policestation">Police Station</Link></li>
                        <li className="footer-li"><Link className="link" to="/gov/primaryhealthcenter">Primary Health Center</Link></li>
                        <li className="footer-li"><Link className="link" to="/gov/proposedmarketforfarmers">Proposed Market For Farmers</Link></li>
                        <li className="footer-li"><Link className="link" to="/gov/railwaystation">Railway Station</Link></li>
                        <li className="footer-li"><Link className="link" to="/gov/womenpolicestation">Women Police Station</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}