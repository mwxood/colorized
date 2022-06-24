import './header.css';

const header = (props) => {

    return(
        <header className="header-bg">
            <div className='container'>
                <div className='d-flex align-items-center justify-content-between'>
                    <a className='logo'>Colorized</a>
                    <span className='reload' onClick={props.changeColors}>
                        <i className="icon fa-solid fa-arrow-rotate-right"></i>
                    </span>
                </div>
            </div>
      </header>
    );
}

export default header;