import RestFooter from './RestFooter'
import RestCard from './RestCard'
import './Rest.css'
import RestTopBar from './RestTopBar'
import { BrowserRouter,Route } from 'react-router-dom'
import RestAboutUs from './RestAboutUs'
import RestOffers from './RestOffers'
import RestHome from './RestCard'
import RestProfile from './RestProfile'
import RestContactUs from './RestContactUs'
function RestApp() {
  return (
    <>
      <RestTopBar />
      <center>
        <RestCard />
      </center>
      <RestFooter />

    </>
  )
}

export default RestApp;


{/* <BrowserRouter>
  <Route path='/' element={<RestTopBar />} >
    <Route  index element={<RestHome />} />
    <Route path='RestAboutUs' element={<RestAboutUs/>}/>
    <Route path='RestContactUs' element={<RestContactUs/>}/>
    <Route path='RestOffers' element={<RestOffers/>}/>
    <Route path='RestAboutUs' element={<RestAboutUs/>}/>
    <Route path='RestProfile' element={<RestProfile/>}/> 
  </Route>
</BrowserRouter> */}