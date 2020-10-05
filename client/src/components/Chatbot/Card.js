
import React from 'react';

const Card = (props) => {
    return (
        <div  style={{ paddingRight:30, float: 'left'}}>
            <div className="card">
                <div className="card-image" style={{ width: 240}}>
                    <img alt={props.payload.fields.header.stringValue} style={{height:180}} src={props.payload.fields.image.stringValue} />
                    
                </div>
                <div className="card-content">
                    <p>{props.payload.fields.header.stringValue}</p>
                    <p> หมวดหมู่ : {props.payload.fields.category.stringValue}</p>
                    <p> ราคา : {props.payload.fields.price.stringValue}</p>
                </div>
                <div className="card-action">
                    <a target="_blank" rel="noopener noreferrer" href={props.payload.fields.link.stringValue}>ดูข้อมูลเพิ่มเติม</a>
                </div>
            </div>
        </div>
    );
};

export default Card; 

