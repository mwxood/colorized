import React, { useState } from 'react';
import './color.css';




const Color = (props) => {
    const [isLocked, setLock] = useState(false);
    
    const locked = () => {
        setLock(!isLocked)
    }


// console.log(props)
 const colors = props.colorsArray[0].color.map((item, index) => {
  
    return(
            <div  className='col-md-3 remove-padding' key={item.id}>
                <div className='color full-height d-flex align-items-center justify-content-center' style={{backgroundColor: `${item.color}`}}>
                    <div id={props.id} onClick={locked} className='lock-holder'>
                        <i className={isLocked ? 'icon icon fa-solid fa-lock' : 'icon fa-solid fa-lock-open'}></i>
                    </div>
                </div>
            </div>
    );

 })

    return(
        <div className='row full-height'>
            {colors}
        </div>
    );
}

export default Color;