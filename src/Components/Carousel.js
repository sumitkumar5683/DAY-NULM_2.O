function Carousel(){
    return (
        <>
        
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="1.jpg" className="d-block w-100" alt="a" />
          </div>
          <div className="carousel-item">
            <img src="2.png" className="d-block w-100" alt="b" />
          </div>
          <div className="carousel-item">
            <img src="3.jpg" className="d-block w-100" alt="c" />
          </div>
          <div className="carousel-item">
            <img src="4.png" className="d-block w-100" alt="d" />
          </div>
          <div className="carousel-item">
            <img src="5.png" className="d-block w-100" alt="e" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        </>
    )
}
export default Carousel