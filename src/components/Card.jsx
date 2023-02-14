import locationImg from "../img/location.svg"

export default function Card(props) {
    return(
        <div className="card__above">
            <div className="card__item">
                <img src={props.post.imageUrl} alt="place"></img>
                <div className="card__div">
                    <div className="card__first-line">
                        <img src={locationImg} alt='marker'></img>
                        <span className="card__country">{props.post.location}</span>
                        <a className="card__maps" href={props.post.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h2 className="card__place">{props.post.title}</h2>
                    <p className="card__date">{props.post.startDate} - {props.post.endDate}</p>
                    <p className="card__text">{props.post.description}</p>
                </div>
            </div>
        </div>
    )
}