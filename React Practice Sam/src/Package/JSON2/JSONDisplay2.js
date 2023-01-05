import JsonData from './JsonData2.json'
function JsonDataDisplay () {
  const DisplayData = JsonData.map(data => {
    return (
      <tr>
        <td > {data.name} </td>
        <td > {data.registerNumber} </td>
        <td > {data.department} </td>
      </tr>
    )
  })
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Registered Number</th>
            <th>Department</th>
          </tr>
        </thead>
        <thead>{DisplayData}</thead>
      </table>
    </div>
  )
}

export default JsonDataDisplay
