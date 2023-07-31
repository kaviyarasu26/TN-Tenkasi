import { MapComponent } from "../../components/map";

export const All =()=>{
    const Src="https://www.google.com/maps/d/embed?mid=1UReK-9Bdqn3pqjeq42iSOCwv1jiF00U&ehbc=2E312F";
    return(
       <MapComponent iSrc={Src}/>
    )
 }
