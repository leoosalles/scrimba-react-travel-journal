import marker from "../images/marker.png";

function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="article-image-container">
                <img className="article-image" src={props.obj.img.src} alt={props.obj.img.alt} />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src={marker}
                    alt="Map marker icon"
                />
                <span className="country">{props.obj.country}</span>
                <a href={props.obj.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.obj.title}</h2>
                <p className="trip-dates">{props.obj.dates}</p>
                <p className="entry-text">{props.obj.text}</p>
            </div>
        </article>
    )
};

export { Entry }