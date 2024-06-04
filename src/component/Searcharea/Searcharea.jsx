import "./Search.css"

function Searcharea(){

    return(
        
        <>
            <div className="container-fluid searcharea-bg">
                <div className="">
                    <div className="d-flex justify-content-center">
                        <div style={{"width":"305px"}} className="d-flex">
                            <span className="search-text">Show me</span>
                            <div className="" >
                                <div style={{'border-bottom':'2px solid #003B84'}} className="d-flex nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <p className="search-select">Compact SUV</p>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <ul className="dropdown-menu dropdown-menu-width">
                                    <li><a className="dropdown-item">Compact Sedan</a></li>
                                    <li><a className="dropdown-item">Hatchback</a></li>
                                    <li><a className="dropdown-item search-active-c">Compact SUV</a></li>
                                    <li><a className="dropdown-item">SUV</a></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{"width":"397px"}} className="d-flex">
                            <span className="search-text">vehicles that have</span>
                            <div>
                                <div style={{'border-bottom':'2px solid #003B84'}} className="d-flex  nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <p className="search-select1">Petrol, Automatic...</p>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <ul className="dropdown-menu dropdown-menu-width1">
                                    <li><a className="dropdown-item">Petrol, Manual<br/> Transmission</a></li>
                                    <li><a className="dropdown-item">Petrol, Automatic<br/> Manual<br/> Transmission</a></li>
                                    <li><a className="dropdown-item search-active-c">CNG, Manual<br/> Transmission</a></li>
                                    <li><a className="dropdown-item">Petrol, Dual Clutch<br/> Automatic (DCA)<br/> Transmission</a></li>
                                    <li><a className="dropdown-item">Diesel, Manual<br/> Transmission</a></li>
                                    <li><a className="dropdown-item">Diesel, Automatic<br/> Manual<br/> Transmission</a></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{"width":"353px"}} className="d-flex">
                            <span className="search-text">of price range</span>
                            <div>
                                <div style={{'border-bottom':'2px solid #003B84'}} className="d-flex nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <p className="search-select">10 to 15 Lakhs</p>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <ul className="dropdown-menu dropdown-menu-width2">
                                    <li><a className="dropdown-item">10 To 15 Lakhs</a></li>
                                    <li><a className="dropdown-item">15 To 20 Lakhs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div style={{"width":"",'margin-left':'50pxz'}}>
                            <div className="search-bar">
                                <span>Search</span>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searcharea;