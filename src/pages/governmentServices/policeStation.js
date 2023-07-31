import { MapComponent } from "../../components/map";

export const PoliceStation = () => {
    const Src = "https://www.google.com/maps/d/embed?mid=1Z_dbTONQamUU8gUsMWqS821-YciE308&ehbc=2E312F";
    return (
        <MapComponent iSrc={Src} />
    )
}

