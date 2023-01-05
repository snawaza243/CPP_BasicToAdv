import React, { Component } from 'react'

class StateData extends Component {
  constructor () {
    super()
    this.state = {
      data: [
        {
          Name: 'Sam'
        },
        { Name: 'Sid' }
      ]
    }
  }
  render () {
    return (
      <>
        <div>StateData</div>
        <li>
          <ul>
            {this.state.data.data.map((data, i) =>
              React.createElement('li', { key: i }, data)
            )}
          </ul>
        </li>
      </>
    )
  }
}
export default StateData

// import React, { PureComponent } from 'react'

// export class StudentName extends PureComponent {
//   render() {
//     return (
//       <div>
//         <h1> Student Name</h1>
//       </div>
//     )
//   }
// }

// export class List extends Component {
//   render() {
//     return (
//       <>
//       <ul>
//         <li>
//             <StateData/>
//         </li>
//       </ul>
//       </>
//     )
//   }
// }

// export default List
