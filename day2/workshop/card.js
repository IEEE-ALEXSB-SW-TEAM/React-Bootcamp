import React from 'react';
import './card.css';

export default function Card(props) {
  return (
      <div id='card'>
          <img src={props.user.image} alt='profile' />
          <div id='content'>
          <h2>{props.user.name}</h2>
          <p><strong>Faculty: </strong>{props.user.faculty}</p>
          <p><strong>Birth Date: </strong>{props.user.BDate}</p>
          <p><strong>Bio: </strong>{props.user.bio}</p>
          <p><strong>Email: </strong>{props.user.email}</p>
          <p><strong>Phone: </strong>{props.user.phone}</p>
          </div>
    </div>
  );
}