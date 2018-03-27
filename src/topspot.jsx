import React from 'react';

export default props => {
    let mapUrl = 'https://maps.google.com/?q=' + props.location[0] + "," + props.location[1];

    return (
        <div className='well'>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <a href={mapUrl} target='_blank'  role='button' className='btn btn-link'>Directions Here!</a>
        </div>
    );
}