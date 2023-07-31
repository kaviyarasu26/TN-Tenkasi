import { MapComponent } from "../../components/map";

export const RailwayStation = () => {
    const Src = "https://www.google.com/maps/d/embed?mid=1CJB8qE7MrYZArQjfVXqkAVq24Rr3-mg&ehbc=2E312F";
    return (
        <MapComponent iSrc={Src} />
    )
}