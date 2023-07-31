import { MapComponent } from "../../components/map";

export const PrimaryHealthCenter = () => {
    const Src = "https://www.google.com/maps/d/embed?mid=1Wbdzmi2l6-B-niTWrM-MZ8XeYBnGaRg&ehbc=2E312F";
    return (
        <MapComponent iSrc={Src} />
    )
}
