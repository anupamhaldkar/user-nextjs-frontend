import React from 'react'

const UserList = () => {
  return (
    <div className='container mx-auto my-8'>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>EmailId</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Anupam</td>
                        <td>Haldkar</td>
                        <td>email@fmfsds.com</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList