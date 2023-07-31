import '../StyleSheet/map.css'
export const MapComponent =(propos)=>{
    return(
        <div className="map-cointainer">
            <iframe className="map" src={propos.iSrc} width="640" height="480"></iframe>
        </div>
    )
 }