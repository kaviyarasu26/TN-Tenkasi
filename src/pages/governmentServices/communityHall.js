

import { MapComponent } from "../../components/map";

export const  CommunityHall =()=>{
    const Src="https://www.google.com/maps/d/embed?mid=1PMp6qyaHsITmgMgupbH9UmKYTaNMO-s&ehbc=2E312F";
    return(
       <MapComponent iSrc={Src}/>
    )
 }