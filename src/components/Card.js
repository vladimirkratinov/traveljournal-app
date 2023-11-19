import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="container">
        <img src={props.imageURL} alt="description" className="card--image" />
        <div className="card--info">
          <div className="card--country">
            <img src="marker@3x.png" className="marker--logo" />
            <p>{props.location}</p>
            <a href={props.googleMapsURL} className="card--googleMapLink">View on Google Maps</a>
          </div>
          <h1 className="card--title">{props.title}</h1>
          <h4 className="card--date">
            {props.startDate} - {props.endDate}
          </h4>
          <p className="card--description">{props.description}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
