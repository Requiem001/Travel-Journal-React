export default function Entry() {
    return (
        <div className = "entry">
            <img className = "photo" src = "/japan.png" />

            <div className = "info">
                <div className = "adress">
                    <img className = "marker-icon" src = '/marker.png' />
                    <p className = "city">JAPAN</p>
                    <a className = "google-link" href = "https://google.com">View on Google Maps</a>
                </div>  
                <p className = "description">
                    <span className = "location">
                        Mount Fuji
                    </span>
                    <span className = "date">
                    12 Jan, 2021 - 24 Jan, 2021
                    </span>
                    <span className = "content">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </span>
                </p>
                
            </div>
        </div>
    )
}