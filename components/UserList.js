import React, { useEffect, useState } from 'react'
import User from './User'

const UserList = ({user}) => {
    const USER_BASE_API_URL = 'http://localhost:8080/api/v1/users';
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(USER_BASE_API_URL,{  
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
                });
                const users = await response.json();
                setUsers(users);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    },[user]);

    const deleteUser =  (e,id) => {
        e.preventDefault();
        fetch(USER_BASE_API_URL + "/" + id, {
            method: 'DELETE',
        })
     .then((res) => {
        if(users){
            setUsers((prevElement)=> {
                return prevElement.filter((user)=> user.id !== id);
            })
        }
     });
    };
    
  return (
    <div className='container mx-auto my-8'>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>First Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>EmailId</th>
                        <th className='text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody className='bg-white'>
                    {users?.map((user)=>(
                        <User user={user} key={user.id} deleteUser={deleteUser} editUser={editUser} />
                    ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default UserList