import React, { useEffect } from "react";
import { useState } from "react";
import searchData from './dbsearch.json'
export default function SearchFilter(props, item) {
    const [data, setData] = useState([])
    const [searchApiData, setSearchApiData] = useState([])
    const [filterVal, setFilterVal] = useState([])

    useEffect(() => {
        const fetchData = () => {
            fetch(searchData)
                .then((res) => { res.json() })
                .then((json) => { setData(json) })
            // .catch(function(error) {console.log(error)})
        }
        fetchData();
    }, [])


    const handleFilter = (e) => {
        if (e.target.value == '') {
            setData(searchApiData);
        }
        else {
            const filterResult = searchApiData.filter(searchData.name.toLowerCase()
                                    .includes(e.target.value.toLowerCase()))

            setData(filterResult)

            // if (filterResult.length > 0) {
            //     setData(filterResult)
            // }
            // else {
            //     setData({ "name": "No-Data" })
            // }
        }
        setFilterVal(e.target.value)
    }

    return (
        <>
            <h1>Search Filter </h1>
            <input type="text" 
                placeholder="Search" 
                value={filterVal} 
                onInput={(e) => { handleFilter(e) }} />
            <table>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                {
                    searchData.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}