export const ShadedSpinner=()=>{
    return(
        <div className="loading">
            <div className="ball" style={{"--rotation-step":"1"}}></div>
            <div className="ball" style={{"--rotation-step":"2"}}></div>
            <div className="ball" style={{"--rotation-step":"3"}}></div>
            <div className="ball" style={{"--rotation-step":"4"}}></div>
            <div className="ball" style={{"--rotation-step":"5"}}></div>
            <div className="ball" style={{"--rotation-step":"6"}}></div>
            <div className="ball" style={{"--rotation-step":"7"}}></div>
            <div className="ball" style={{"--rotation-step":"8"}}></div>
            <div className="ball" style={{"--rotation-step":"9"}}></div>
        </div>
    )
}