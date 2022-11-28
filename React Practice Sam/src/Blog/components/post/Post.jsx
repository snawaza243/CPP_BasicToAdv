import React from 'react'
import SideBar from '../sidebar/SideBar'
import './post.css'
function Post() {
  return (
    <>
    <div className="post">
        <img className='postImg' src="https://i.pinimg.com/736x/42/31/97/4231971bbd0512d2a3d965e0451197f7.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className='postTitle'>Lorem ipsum dolor sit amet!</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, accusantium quo, ex eos architecto distinctio nihil et repudiandae quam magni esse enim sit? Impedit natus tempore, sapiente aliquam hic aperiam!</p>
    </div>
    </>
  )
}

export default Post