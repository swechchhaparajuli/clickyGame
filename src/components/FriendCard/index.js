import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card remove" onClick={() => props.shuffle(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Hogwarts House:</strong> {props.house}
          </li>
        </ul>
      </div>

    </div>
  );
}

export default FriendCard;
