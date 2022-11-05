function SaNav () {
  return (
    <>
      <nav class='navbar navbar-expand-lg bg-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            BKart
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
                <a class='nav-link' href='#'>
                  Biography
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Poetry
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Mystery
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Programming
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
                  Movies
                </a>
                <ul class='dropdown-menu'>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Sci-Fi
                    </a>
                  </li>

                  <li>
                    <a class='dropdown-item' href='#'>
                      Horror
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Drama
                    </a>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      War
                    </a>
                  </li>
                  <li>
                    <p class='dropdown-divider'> </p>
                  </li>
                  <li>
                    <a class='dropdown-item' href='#'>
                      Others
                    </a>
                  </li>
                </ul>
              </li>
              <li class='nav-item'>
                <a class='nav-link disabled'>Site</a>
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
      {/* <div className="nDiv">
        <h1>Hello Sir this is nav</h1>
      </div> */}
    </>
  )
}
export default SaNav
