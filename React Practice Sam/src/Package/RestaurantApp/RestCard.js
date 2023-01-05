import FoodData from './RestaurantAPI.json'
import img1 from './food_img/1.webp'
function ShowRestaurantAPI () {
  const DisplayFood = FoodData.map(data => {
    return (
      <>
        <span className='card' >
          <div className="cardImg">
          <img src={data.Img} className='card-img-top' alt={data.Name} /> 
          </div>
          <div className="card-body">
            <p className='card-text'><b>Name : </b> {data.Name}</p>
            <p className='card-text card-text-desc'><b>Description : </b> {data.Description} </p>
            <p className='card-text'><b>Comment : </b> {data.Comment} </p>
          </div>
        </span>
      </>
    )
  })
  return <>{DisplayFood}</>
}

export default ShowRestaurantAPI
