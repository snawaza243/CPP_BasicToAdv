import JsonData from './Student.json'
import './JsonDataDisplay.css'
function JsonDataDisplay () {
  const DisplayData = JsonData.map(data => {
    return (
      <tr>
        <td > {data.Name} </td>
        <td > {data.Branch} </td>
        <td > {data.Roll} </td>
        <td > +91 {data.RegNo} </td>
      </tr>
    )
  })
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>Roll</th>
            <th>Register No.</th>
          </tr>
        </thead>
        <thead>{DisplayData}</thead>
      </table>
    </div>
  )
}

export default JsonDataDisplay
