import React from 'react'

const User = () => {
  return (
    <tr>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                            Anupam
                            </div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                                Haldkar
                            </div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                            email@fmfsds.com
                            </div>
                        </td>
                        <td className='text-right px-6 py-4 whitespace-nowrap'>
                            <a href='#' className='text-indigo-600 hover:text-indigo-800 cursor-pointer px-4'>
                                Edit
                            </a>
                            <a href='#' className='text-indigo-600 hover:text-indigo-800 cursor-pointer'>
                                Delete
                            </a>
                        </td>
                    </tr>
  )
}

export default User