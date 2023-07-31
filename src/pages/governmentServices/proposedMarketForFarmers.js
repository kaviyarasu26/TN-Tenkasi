import { MapComponent } from "../../components/map";

export const ProposedMarketForFormers = () => {
    const Src = "https://www.google.com/maps/d/embed?mid=1VRO7RwCLip2mA7HCAOdvv-F07QIpSDM&ehbc=2E312F";
    return (
        <MapComponent iSrc={Src} />
    )
}