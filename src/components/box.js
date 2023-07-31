import '../StyleSheet/box.css'
export const Box=(props)=>{
    return(
        <div className='box'>
            {<div className="discenter">{props.icon}</div>}
            {<div className="name">{props.name}</div>}
        </div>
    )
}