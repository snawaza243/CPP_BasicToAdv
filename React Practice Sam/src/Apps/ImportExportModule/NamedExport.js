
// inline and by name export variable without render into index with render

import React from "react";
export const title1 = React.createElement('h1',{},'Heading 1 with React');
export const title2 = React.createElement('h2',{id:'idt2'},'Heading 2 with React');

const title3 = React.createElement('h3',{},'Heading 3 with React');
const title4 = React.createElement('h4',{},'Heading 4 with React');

export {title3, title4};


// index.js 
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import {title1,title2,title3,title4} from './importexport/NamedExport'
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//     {title1}
//     {title2}
//     {title3}
//     {title4}
//   </>
// )
