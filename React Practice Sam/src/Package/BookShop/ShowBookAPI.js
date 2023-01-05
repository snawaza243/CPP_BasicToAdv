import BookData from './BookAPI.json'
import './Sa.css'

function ShowBookAPI () {
  const DisplayBook = BookData.map(data => {
    return (
      <>
        <span class='card'>
          <img src={data.img} class='card-img-top' alt='CartImage'></img>
          <div class='card-body'>
          <button class='card-b'>Add to Cart</button>
            <button class='card-b'>Buy Now</button>
            <div class='card-body'>
              <p class='card-text'>
                <b>{data.book}</b> <br/>
                {data.des}
              </p>
            </div>
            
          </div>
        </span>
      </>
    )
  })
  return <>{DisplayBook}</>
}

export default ShowBookAPI
