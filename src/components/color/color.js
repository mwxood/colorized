import './color.css';

const color = () => {
    return(
        <div className='row full-height '>
            <div className='col-md-3 remove-padding'>
                <div className='color full-height d-flex align-items-center justify-content-center color-red'>
                    <div className='lock-holder'>
                        <i className="fa-solid fa-lock"></i>
                    </div>
                </div>
            </div>
            <div className='col-md-3 d-flex align-items-center justify-content-center remove-padding'>
                <div className='color full-height d-flex align-items-center justify-content-center color-green'>
                    <div className='lock-holder'>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                    </div>
            </div>
            <div className='col-md-3 remove-padding'>
                <div className='color full-height d-flex align-items-center justify-content-center color-blue'>
                    <div className='lock-holder'>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                    </div>
            </div>
            <div className='col-md-3 remove-padding'>
                <div className='color full-height d-flex align-items-center justify-content-center color-yellow'>
                    <div className='lock-holder'>
                        <i className="fa-solid fa-lock"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default color;