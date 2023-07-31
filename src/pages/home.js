import '../StyleSheet/home.css';
import { Box } from '../components/box';
import tenkasi from '../images/Tn-tenkasi-removebg-preview.png'
import { BiMap } from "react-icons/bi";
import { BsInfo } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import dis from '../images/dus.jpg';

export const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='full'>
                    <div className='main-cointainer'>
                        <div className='left-container'>
                            <div>
                                <h1 className='question'><span className='logo'>TN-<span className='second'>Tenkasi</span></span></h1>
                                <p className='ans'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TN-Tenkasi provides geolocation-based information about the government's services providing areas in Tenkasi.</p>
                            </div>
                        </div>
                        <div className='right-cointainer'>
                            <img src={tenkasi} alt='TamilNadu distict map' className='tn-img' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='middle-full'>
                <h3 className='middle-head-home'>
                    Features
                </h3>
                <div className='home-middle'>
                    <Box name="Comprehensive Mapping" icon={<BiMap size="60px" color='orangered' />} />
                    <Box name="Detailed Information" icon={<BsInfo size="60px" color='orangered' />} />
                    <Box name="User-Friendly Interface" icon={<CgWebsite size="60px" color='orangered' />} />
                    <Box name="Community" icon={<MdGroups2 size="60px" color='orangered' />} />

                </div>
            </div>
            <div className='middle-full-lower'>
                <div className='home-middle-lower'>
                    <div className='left'>
                        <img src={dis} alt='Tenkasi mao' className='img-ten' />
                    </div>
                    <div className='right'>
                        <p className='con' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The decision to choose Tenkasi as the geographical focus of the project stems from careful consideration of various factors that make this region particularly noteworthy. Situated in the southern Indian state of Tamil Nadu, Tenkasi holds immense significance due to its cultural heritage, historical landmarks, and vibrant community. As a growing town with a substantial population, it serves as a crucial hub for trade, agriculture, and commerce, making it an ideal location to implement the project's objectives.</p>
                        <br />
                        <p className='con'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furthermore, Tenkasi's unique characteristics set it apart as a deserving area of attention. Its rich agricultural landscape contributes significantly to the region's economy, and establishing streamlined access to government services could be transformative for local farmers and beneficiaries.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}