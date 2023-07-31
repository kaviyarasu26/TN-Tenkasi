import "../StyleSheet/gis.css";
import gisComponent from "../images/GGIS.png";
import gisInTenkasi from '../images/GIS-Images/Tenkasi_NATGEO.jpg';
import map21 from '../images/GIS-Images/MAP.jpg';
import map22 from '../images/GIS-Images/SATE1.png';
import map20 from '../images/GIS-Images/SATE.png';
import map23 from '../images/GIS-Images/SPATIAL DATA.jpg';
import map24 from '../images/GIS-Images/Tenkasi_India street map.jpg';
import map25 from '../images/GIS-Images/Tenkasi_NATGEO.jpg';
import map26 from '../images/GIS-Images/Tenkasi_Oceanbase map.jpg';
import map27 from '../images/GIS-Images/Tenkasi_Topograph map.jpg';
import map28 from '../images/GIS-Images/Tenkasi_world imagery.jpg';
import map29 from '../images/GIS-Images/vector.jpg';




export const Gis = () => {
    const GisMap = [
        {
            src: map21,
            alt: "Tenkasi Map"
        },
        {
            src:map20,
            alt:"Tenkasi Satellite Map(Spactial)"
        },
        {
            src: map22,
            alt: "Tenkasi Satellite Map(Spactial)"
        }, {
            src: map23,
            alt: "Tenkasi Spatial Data Map"
        }, {
            src: map24,
            alt: "Tenkasi India street map"
        }, {
            src: map25,
            alt: "Tenkasi Natgeo Map"
        }, {
            src: map26,
            alt: "Tenkasi Oceanbased Map"
        }, {
            src: map27,
            alt: "Tenkasi Topograph Map"
        }, {
            src: map28,
            alt: "Tenkasi World Map"
        }, {
            src: map29,
            alt: "Tenkasi Vector Map"
        }
    ];
    return (
        <div className='gis'>
            <div className="gis-main">
                <div className="gis-left cen">
                    <img src={gisComponent} alt="GIS-Component iMAGE" className="gis-img1" />
                </div>
                <div className="gis-right">
                    <h3 className="gis-heading">
                        GIS-Geographic Information Systems
                    </h3>
                    <p className="gis-para">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        GIS stands for Geographic Information Systems. It is a powerful and versatile technology that allows for the collection, storage, analysis, and visualization of geographic data. GIS combines hardware, software, and data to capture, manage, analyze, and display various types of spatial information on a map. This spatial data can include features such as points (e.g., cities, landmarks), lines (e.g., roads, rivers), and polygons (e.g., boundaries of countries, states, or regions).
                        <br />
                        The primary components of GIS are:
                    </p>
                    <p className="gis-para"><span className="sub-heading">Data :</span> GIS relies on a wide range of data sources, including satellite imagery, aerial photographs, GPS (Global Positioning System) data, survey data, and existing maps.</p>
                    <p className="gis-para"><span className="sub-heading">Software :</span> GIS software allows users to manipulate, analyze, and visualize geographic data. Some popular GIS software includes ArcGIS, QGIS, and Google Earth.</p>
                    <p className="gis-para"><span className="sub-heading">Hardware :</span>This includes computers, GPS receivers, scanners, printers, and other devices used to collect, process, and display geographic information.</p>
                    <p className="gis-para"><span className="sub-heading">Methods :</span>This methods manipulate the collection of data and filter the data.The data is diplayed to the people who use GIS software and products.</p>
                    <p className="gis-para"><span className="sub-heading">People :</span>GIS professionals, such as geographers, cartographers, urban planners, and environmental scientists, are essential for using and interpreting the data and analysis provided by GIS.</p>
                    <p className="gis-para">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GIS finds applications in various fields, including urban planning, natural resource management, environmental monitoring, transportation, public health, disaster management, and business analytics. It enables users to make informed decisions based on spatial patterns and relationships, providing valuable insights for addressing complex challenges and improving decision-making processes.</p>
                </div>
            </div>
            <div className="gis-main">
                <div className="gis-left">
                    <h3 className="gis-heading">
                        GIS in Tenkasi
                    </h3>
                    <p className="gis-para">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Tenkasi district, located in the southern Indian state of Tamil Nadu, is a region of captivating natural beauty and cultural significance. With its diverse landscape of lush forests, picturesque mountains, and fertile plains, Tenkasi offers a mesmerizing blend of the scenic Western Ghats and the serene Kaveri River basin. The district's rich history is reflected in its numerous ancient temples and historical landmarks that attract pilgrims and history enthusiasts alike. Leveraging the power of Geographic Information Systems (GIS), Tenkasi district has embarked on a journey of sustainable development and efficient governance. Through GIS, the district authorities can effectively manage land resources, plan urban development, and optimize infrastructure, ensuring the well-being of its residents and preserving the unique ecological heritage. By harnessing this advanced technology, Tenkasi stands poised to navigate the challenges of the future while cherishing its splendid past.
                    </p>
                </div>
                <div className="gis-right cen">
                    <img src={gisInTenkasi} alt="Tenkasi Map" className="gis-img" />
                </div>
            </div>
            <div className="gis-last-para">
                <p className="gis-para">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Remote Sensing is a technology used to gather information about the Earth's surface and atmosphere from a distance, without direct physical contact. It involves the detection and measurement of various characteristics of objects and phenomena using sensors mounted on satellites, aircraft, drones, or other platforms. These sensors capture electromagnetic radiation (light) reflected or emitted from the Earth's surface, which is then processed to obtain valuable data and images.
                    Electromagnetic Spectrum: Remote sensing instruments operate across different portions of the electromagnetic spectrum, including visible, infrared, and microwave wavelengths. Each range provides unique information about the Earth's surface and allows scientists to study different aspects, such as land cover, vegetation health, temperature, and more.
                    Passive and Active Sensors: Remote sensing sensors can be classified as passive or active. Passive sensors detect natural radiation emitted or reflected from the Earth's surface, while active sensors emit their own energy (e.g., radar) and measure the response.
                    Remote Sensing technology plays a crucial role in various fields, providing valuable insights for decision-making, resource management, environmental conservation, disaster response, and scientific research. It enables us to study our planet from a broader perspective, contributing to a better understanding of its dynamic processes and changes over time.
                </p>
            </div>
            <div className="Map-heading">GIS maps of Tenkasi</div>
            <div className="Tenkasi-gis-map">
                {GisMap.map((member, key) => (
                    
                    <div>
                        <img src={member.src} id={"map" + key} alt={member.alt} width="200px" height="200px" className="gis-img-map" />
                    <p className="nameOfTheMap">{member.alt}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}