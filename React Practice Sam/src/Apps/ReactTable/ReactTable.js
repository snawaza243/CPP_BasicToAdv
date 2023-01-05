import React from 'react'

function ReactTable () {
  const data = [
    { name: 'Sam', age: 20, gender: 'Male' },
    { name: 'Sid', age: 21, gender: 'Male' },
    { name: 'Alam', age: 20, gender: 'Male' },
    { name: 'Shahu', age: 22, gender: 'Male' }
  ]
  return (
    <div className='table'>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default ReactTable
