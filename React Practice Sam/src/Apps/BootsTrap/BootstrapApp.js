import React from 'react'
import BSACart from './BSACart'
import Footer from './Footer'
import './BootstrapApp.css'
import b1 from './img/b (1).webp'
import b2 from './img/b (2).webp'
import b3 from './img/b (3).webp'
import b4 from './img/b (4).webp'
import b5 from './img/b (5).webp'
import b6 from './img/b (6).webp'
import b7 from './img/b (7).webp'
import b8 from './img/b (8).webp'
import b9 from './img/b (9).webp'
import b10 from './img/b (10).webp'






function BootstrapApp () {
  return (
    <>
      <nav class='navbar navbar-expand-lg bg-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            MyCart
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <a class='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Latest
                </a>
              </li>
              <li class='nav-item dropdown'>
                <a
                  class='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Best Collection
                </a>
                <ul class='dropdown-menu'>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Programming
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Operating System{' '}
                    </a>
                  </li>
                  <li>
                    <hr class='dropdown-divider'></hr>{' '}
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Networking
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class='d-flex' role='search'>
              <input
                class='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              ></input>
              <button class='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <main>
        <BSACart src={b1} CartDis='PowerMind'/>
        <BSACart src={b2} CartDis='PowerMind'/>
        <BSACart src={b3} CartDis='PowerMind'/>
        <BSACart src={b4} CartDis='PowerMind'/>
        <BSACart src={b5} CartDis='PowerMind'/>
        <BSACart src={b6} CartDis='PowerMind'/>
        <BSACart src={b7} CartDis='PowerMind'/>
        <BSACart src={b8} CartDis='PowerMind'/>
        <BSACart src={b9} CartDis='PowerMind'/>
        <BSACart src={b10} CartDis='PowerMind'/>



      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default BootstrapApp
