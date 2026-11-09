import React, { useState } from 'react'
import { addBookAPI } from '../API/apiService'
import { Link } from 'react-router-dom'

function AddBooks() {

    const [book,setBook]=useState({
        title:"",author:"",bookID:"",year:"",genre:""
    })
    console.log(book);
    

    //handle ADD BOOK
    const handleAddBook=async()=>{
        const {title,author,bookID,year,genre}=book
        if(!title || !author || !bookID || !year | !genre){
            alert("Enter Form Data")
        }else{
            const response=await addBookAPI(book)
            setBook({title:"",author:"",bookID:"",year:"",genre:""
            })
            if(response.status==201){
                alert("Book Added successfully")
            }
        }
    }


  return (
    <div className='p-5'>
        <div>
            <div className='flex justify-between px-5'>
                <p className='text-2xl font-medium'>ADD BOOKS</p>
                <Link to={'/'} className='px-3 py-1 bg-blue-500 text-white font-medium rounded'>DASHBOARD</Link>
            </div>
           
            <div className='border my-5 p-2 rounded'>
                <div className=''>
                    <input value={book.title} onChange={(e)=>setBook({...book,title:e.target.value})} className='border w-full px-3 py-1 rounded' type="text" placeholder='Enter Title' />
                </div>
                <div className=' mt-5'>
                    <input value={book.author} onChange={(e)=>setBook({...book,author:e.target.value})} className='border w-full px-3 py-1 rounded' type="text" placeholder='Enter Author' />
                </div>
                <div className=' mt-5'>
                    <input value={book.bookID} onChange={(e)=>setBook({...book,bookID:e.target.value})} className='border w-full px-3 py-1 rounded' type="text" placeholder='Enter BookID' />
                </div>
                <div className=' mt-5'>
                    <input value={book.year} onChange={(e)=>setBook({...book,year:e.target.value})} className='border w-full px-3 py-1 rounded' type="text" placeholder='Enter Year' />
                </div>
                <div className=' mt-5'>
                    <input value={book.genre} onChange={(e)=>setBook({...book,genre:e.target.value})} className='border w-full px-3 py-1 rounded' type="text" placeholder='Enter Genre' />
                </div>
                <div className='flex justify-end'>
                    <button onClick={handleAddBook} className='px-3 py-1 my-5 bg-green-600  rounded text-white font-medium'>ADD BOOK</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBooks