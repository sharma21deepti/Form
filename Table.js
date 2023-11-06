function Table({tableData}) {
    // console.log("dataprint",props);
    return(

        <table className="">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone no</th>

                </tr>
            </thead>
            <tbody>

            

            <tr>
              
              <td>{tableData.name}</td>
              <td>{tableData.email}</td>
              <td>{tableData.address}</td>
              <td>{tableData.phoneno}</td>
            </tr>
                 

            </tbody>
        </table>
    )
}


export default Table;
