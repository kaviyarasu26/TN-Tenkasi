import { MapComponent } from "../../components/map";

export const WomenPoliceStation = () => {
    const Src = "https://www.google.com/maps/d/embed?mid=1QIrEtTjoXHlumDIY913u6P69nLvsVOI&ehbc=2E312F";
    return (
        <MapComponent iSrc={Src} />
    )
}