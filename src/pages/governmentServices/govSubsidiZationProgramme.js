import { MapComponent } from "../../components/map";

export const GovSubsidizationProgramme = () => {
    const Src = "https://www.google.com/maps/d/embed?mid=1N9-qdEtQgKXrVqaFRC-4KhSeQ5B6L8E&ehbc=2E312F";
    return (
        <MapComponent iSrc={Src} />
    )
}
