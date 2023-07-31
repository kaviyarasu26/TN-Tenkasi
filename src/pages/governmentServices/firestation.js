import { MapComponent } from "../../components/map";

export const FireStation = () => {
    const Src = "https://www.google.com/maps/d/embed?mid=1FtDJyOLYvfp6eEn9sPtJucCEUivMOjs&ehbc=2E312F";
    return (
        <MapComponent iSrc={Src} />
    )
}