import '../StyleSheet/about.css';


export const About = () => {
  {/*
  import { Member } from '../components/member';
  const memberList = [
    {
      src: "",
      alt: "Profile",
      name: "Exousia Josephine",
      bio: "GIS Developer",
      email: "exousiajsephine7@gmail.com",
      github: "",
      linkedIn: ""
    },
    {
      src: "",
      alt: "Profile",
      name: "Kaviyarasu",
      bio: "MERN Developer",
      email: "kaviyarasu862@gmail.com",
      github: "",
      linkedIn: ""
    }
  ];
 */}

  return (
    <div className="about">
      <div className='about-container'>
        <div className='about-cointainer'>
          <h3 className='abou-heading'>About Us</h3>
          <p className='paragraph'>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            At "TN-Tenkasi," we are on a mission to bridge the gap between the government services and the public, bringing essential facilities closer to the residents of Tenkasi and beyond. Our innovative website harnesses the power of advanced Google Maps API to plot crucial locations that serve as lifelines to the community.
            Imagine having easy access to vital resources such as Agriculture Offices (Beneficiary), Common Service Centers, Community Halls, Fire Stations, Government Art Colleges, Government Schools, Government Subsidization Programs, Libraries, Municipality Offices, Police Stations, Primary Health Centers, Proposed Markets for Farmers, Railway Stations, and Women Police Stations. With just a few clicks, our user-friendly platform empowers you to discover these key government establishments, ensuring convenience and efficiency in availing the services you need.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Through "TN-Tenkasi," we aim to empower every individual, making information readily available and enhancing transparency in government services. Whether you are a farmer seeking agricultural assistance, a student looking for educational opportunities, or a resident in need of emergency services, our website serves as your reliable guide to navigate the rich tapestry of Tenkasi's public services.
            Join us in this transformative journey, as we unlock the potential of technology to bring positive change to our community. Embrace the power of "TN-Tenkasi" and take a step towards a more connected, informed, and empowered tomorrow. Let's build a brighter future together!
          </p>
        </div>
      </div>
      {/*<div className='team'>
        {
          memberList.map((member, index) => (
            <Member
              key={index}
              src={member.src}
              alt={member.alt}
              name={member.name}
              bio={member.bio}
              email={member.email}
              github={member.github}
              linkedIn={member.linkedIn}
            />
          ))
        }
      </div> */}
    </div>
  )
}
