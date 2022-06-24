import './color.css';


const color = (props) => {

 const colors = props.colors.map(item => {
    return(
            <div className='col-md-3 remove-padding' key={Math.random(Math.floor() * 10)}>
                <div className='color full-height d-flex align-items-center justify-content-center' style={{backgroundColor: `${item}`}}>
                    <div className='lock-holder'>
                        <i className="fa-solid fa-lock"></i>
                    </div>
                </div>
            </div>
    );

 })

    return(
  
        <div className='row full-height'>
            {/* <div className='col-md-3 remove-padding'>
                <div className='color full-height d-flex align-items-center justify-content-center color-red'>
                    <div className='lock-holder'>
                        <i className="fa-solid fa-lock"></i>
                    </div>
                </div>
            </div> */}

            {colors}
        </div>
    );
}

export default color;