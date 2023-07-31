import { MapComponent } from "../../components/map";

export const GovSchool = () => {
    const Src = "https://www.google.com/maps/d/embed?mid=1hsW3gV48GPcoPTvrj2dfdl6tHUkCLW4&ehbc=2E312F";
    return (
        <MapComponent iSrc={Src} />
    )
}