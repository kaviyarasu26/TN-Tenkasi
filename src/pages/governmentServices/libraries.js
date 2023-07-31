import { MapComponent } from "../../components/map";

export const Libraries = () => {
    const Src = "https://www.google.com/maps/d/embed?mid=1YWttZQudSJA7z_j_mVGjyDyb80WIjRQ&ehbc=2E312F";
    return (
        <MapComponent iSrc={Src} />
    )
}