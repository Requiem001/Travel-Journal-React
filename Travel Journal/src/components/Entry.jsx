export default function Entry(props) {
    return (
        <div className = "entry">
            <img className = "photo" src = {props.entry.img.src} />

            <div className = "info">
                <div className = "adress">
                    <img className = "marker-icon" src = '/marker.png' />
                    <p className = "city">{props.entry.country}</p>
                    <a className = "google-link" href = {props.entry.googleMapsLink}>View on Google Maps</a>
                </div>  
                <p className = "description">
                    <span className = "location">
                        {props.entry.title}
                    </span>
                    <span className = "date">
                        {props.entry.dates}
                    </span>
                    <span className = "content">
                        {props.entry.text}
                    </span>
                </p>
                
            </div>
        </div>
    )
}