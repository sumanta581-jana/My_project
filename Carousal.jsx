import React from 'react'

export default function Carousal() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}}>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
        
    </div>
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqOhRuRlkj8hrkWewpf1RtjXmZaCKYEWkwqnUW_qBIA&s=10" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUmoxAcq7xkWXZysFiiIvm9rjzd8YBMJm5wwHl6kJ_g&s=10" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_EV-qh4Pu13muRkx4ElZUeOKOb7DLA3HNpUfLreGtA&s=10" className="d-block w-100" alt="..."/>
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
    </div>
  )
}
