function Avatar (props) {
  return (
    <>
      <img
        className='author-url'
        src={props.avatarURL}
        alt={props.name}
      ></img>
    </>
  )
}

export default Avatar
