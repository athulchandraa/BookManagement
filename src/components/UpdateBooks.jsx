import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editBookAPI, getSingleBookAPI } from '../API/apiService'

function UpdateBooks() {

    const {id}=useParams()
    const navigate=useNavigate()

    const [book,setBook]=useState({
        title:"",author:"",bookID:"",year:"",genre:""
    })
    console.log(book);
    
    
    const handleUpdate=async()=>{
        const response=await getSingleBookAPI(id)
        setBook(response.data.data);
    }

    useEffect(()=>{
        handleUpdate()
    },[])

    const handleEdit=async()=>{
        const response=await editBookAPI(id,book)
        console.log(response.data);
        if(response.status==200){
            navigate('/')
        }
    }

  return (
    <div className='p-5'>
        <div>
            <p className='text-2xl font-medium'>EDIT BOOKS</p>
            <div className='border my-5 p-2 rounded'>
                <div className=''>
                    <input value={book?.title} onChange={(e)=>setBook({...book,title:e.target.value})} className='border w-full px-3 py-1 rounded' type="text" placeholder='Enter Title' />
                </div>
                <div className=' mt-5'>
                    <input value={book?.author} onChange={(e)=>setBook({...book,author:e.target.value})} className='border w-full px-3 py-1 rounded' type="text" placeholder='Enter Author' />
                </div>
                <div className=' mt-5'>
                    <input value={book?.bookID} onChange={(e)=>setBook({...book,bookID:e.target.value})} className='border w-full px-3 py-1 rounded' type="text" placeholder='Enter BookID' />
                </div>
                <div className=' mt-5'>
                    <input value={book?.year} onChange={(e)=>setBook({...book,year:e.target.value})} className='border w-full px-3 py-1 rounded' type="text" placeholder='Enter Year' />
                </div>
                <div className=' mt-5'>
                    <input value={book?.genre} onChange={(e)=>setBook({...book,genre:e.target.value})} className='border w-full px-3 py-1 rounded' type="text" placeholder='Enter Genre' />
                </div>
                <div className='flex justify-end'>
                    <button onClick={handleEdit} className='px-3 py-1 my-5 bg-green-600  rounded text-white font-medium'>UPDATE BOOK</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateBooks