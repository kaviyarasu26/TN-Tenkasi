import { MapComponent } from "../../components/map";

export const MunicipalityOffice = () => {
    const Src = "https://www.google.com/maps/d/embed?mid=1pa9Z7RgtciKGE68-HKkM8O3lcHZAJTg&ehbc=2E312F";
    return (
        <MapComponent iSrc={Src} />
    )
}