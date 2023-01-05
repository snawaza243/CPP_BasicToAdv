function Avatar(props) {
  const myStyle = {
    height: '240px',
    width: '180px'
  }
  return (
    <>
      <img style={myStyle}
        className='author-url'
        src={props.avatarURL}
        alt={props.name}
      ></img>
    </>
  )
}

export default Avatar;
