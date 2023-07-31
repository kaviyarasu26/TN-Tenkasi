import { Link } from 'react-router-dom';
import '../StyleSheet/member.css';
import {BsGithub,BsLinkedin} from 'react-icons/bs';
export const Member=(props)=>{
    return(
        <div className="member">
                <img src={props.src} alt={props.alt} className='member-img'/>
                <h3 className='name'> {props.name}</h3>
                <div className='bio'>
                    {props.bio}
                </div>
                <p className='email'>Email :{props.email}</p>
                <Link to={props.github}><BsGithub/></Link>
                <Link to={props.linkedIn}><BsLinkedin/></Link>
        </div>
    )
}