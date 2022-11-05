import b1 from './img/b1.jpg'
import b2 from './img/b2.jpg'
import b3 from './img/b3.jpg'

import './Sa.css'
function SaSlideshow () {
  return (
    <>
      <div
        id='carouselExampleDark'
        class='carousel carousel-dark slide'
        data-bs-ride='carousel'
      >
        <div class='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='0'
            class='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleDark'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div class='carousel-inner'>
          <div class='carousel-item active' data-bs-interval='10000'>
            <img class='d-block w-100' src={b1} alt='First slide'></img>
            <div class='carousel-caption d-none d-md-block'>
              <h5>(1)</h5>
            </div>
          </div>

          <div class='carousel-item' data-bs-interval='2000'>
            <img class='d-block w-100' src={b2} alt='First slide'></img>
            <div class='carousel-caption d-none d-md-block'>
              <h5>(2)</h5>
            </div>
          </div>

          <div class='carousel-item'>
            <img class='d-block w-100' src={b3} alt='First slide'></img>
            <div class='carousel-caption d-none d-md-block'>
              <h5>(3)</h5>
            </div>
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleDark'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}

export default SaSlideshow
