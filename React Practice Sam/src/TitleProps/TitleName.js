// pass content as props in tags (paragraph, heading..)
function App(props) {
  return (
    <>
    <h1>Hello {props.title}</h1>
    {/* <p>{this.props.title}</p> //for classFull */}
    </>
    
  );
}

export default App;

// import ReactDOM from 'react-dom/client'
// import TitleName from './title/TitleName'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//   <TitleName title='Admin' />
//   </>
// )