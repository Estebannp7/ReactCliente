import { Fragment } from "react"

 export function Esteban(){
let suma = 5+1
let universidad = 'cesde'
    return(
        <body>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="assets/img/tupac1.jpg" className="d-block w-50 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="assets/img/tupac2.jpeg" className="d-block w-50 img-fluid" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="assets/img/tupac3.jpg" className="d-block w-50 img-fluid" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </body>
     
    )
}