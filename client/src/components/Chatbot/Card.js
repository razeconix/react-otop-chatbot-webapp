
import React from 'react';

const Card = (props) => {
    return (
        <div  style={{ height: 270, paddingRight:30, float: 'left'}}>
            <div className="card">
                <div className="card-image" style={{ width: 160}}>
                    <img alt={props.payload.fields.header.stringValue} src={props.payload.fields.image.stringValue} />
                </div>
                <div className="card-content" style={{ height: 100}}>
                <p className="card-title">{props.payload.fields.header.stringValue}</p>
                    <p> <a href="/">{props.payload.fields.price.stringValue}</a></p>
                </div>
                <div className="card-action">
                    <a target="_blank" rel="noopener noreferrer" href={props.payload.fields.link.stringValue}>ดูข้อมูลเพิ่มเติม</a>
                </div>
            </div>
        </div>
    );
};

export default Card; 

