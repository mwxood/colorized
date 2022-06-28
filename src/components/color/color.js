import './color.css';




const Color = (props) => {


// console.log(props)
 const colors = props.colorsArray[0].color.map((item, index) => {
    return(
            <div className='col-md-3 remove-padding' key={item.id}>
                <div className='color full-height d-flex align-items-center justify-content-center' style={{backgroundColor: `${item.color}`}}>
                    <div id={item.id} onClick={props.lock} className='lock-holder'>
                        <i className={item.icon}></i>
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