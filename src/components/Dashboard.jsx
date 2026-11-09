import React, { useEffect, useState } from 'react'
import { deleteBookAPI, getBookAPI } from '../API/apiService'
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {

    const [allBooks,setAllBooks]=useState("")
    console.log(allBooks);

    const navigate=useNavigate()
    

    const getAllBooks=async()=>{
        const response=await getBookAPI()
        setAllBooks(response.data.data);
    }

    useEffect(()=>{
        getAllBooks()
    },[])

    //HANDLE DELETE
    const handleDelete=async(id)=>{
        const response=await deleteBookAPI(id)
        getAllBooks()
    }

    //HANDLE UPDATE
    const handleUpdate=(id)=>{
        navigate(`/edit/${id}`)
    }

  return (
    <div className='p-5'>
        <div>
            <div className='flex px-5 justify-between items-center'>
                <p className='text-3xl font-medium text-blue-600'>ALL BOOKS</p>
                <Link to={'/add-Books'} className='bg-green-600 px-3 py-1 font-medium rounded text-white'>ADD BOOK</Link>
            </div>
           
            <div className='my-5'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='border'>ID</th>
                            <th className='border'>TITLE</th>
                            <th className='border'>AUTHOR</th>
                            <th className='border'>YEAR</th>
                            <th className='border'>GENRE</th>
                            <th className='border'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody className='w-full border'>
                        {/* Duplication */}
                        {
                            allBooks.length>0 && 
                            allBooks?.map(item=>(
                                <tr className='text-center'>
                            <td className='border'>{item?.bookID}</td>
                            <td className='border'>{item?.title}</td>
                            <td className='border'>{item?.author}</td>
                            <td className='border'>{item?.year}</td>
                            <td className='border'>{item?.genre}</td>
                            <td className='py-2 w-75 border'>
                                <button onClick={()=>handleDelete(item?._id)} className='px-3 mx-2 py-1 bg-red-500 rounded text-white font-medium'>DELETE</button>
                                <button onClick={()=>handleUpdate(item?._id)} className='px-3 py-1 bg-green-500 rounded text-white font-medium'>UPDATE</button>
                            </td>
                        </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Dashboard