import JsonData from './Student.json'
import './JsonDataDisplay.css'
function JsonDataDisplay () {
  const DisplayData = JsonData.map(data => {
    return (
      <tr>
        <td> {data.Name} </td>
        <td> {data.Branch} </td>
        <td> {data.Roll} </td>
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
          </tr>
        </thead>
        <tbody>
            {DisplayData}
        </tbody>
      </table>
    </div>
  )
}

export default JsonDataDisplay;

