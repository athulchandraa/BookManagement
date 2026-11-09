import axiosService from "./axiosService"

//GET ALL BOOKS
export const getBookAPI=async()=>{
    return await axiosService("GET",'/get-all-books',{})
}
//GET SINGLE BOOK
export const getSingleBookAPI=async(id)=>{
    return await axiosService("GET",`/get-book/${id}`,{})
}
//ADD BOOK
export const addBookAPI=async(bookData)=>{
    return await axiosService("POST",'/add-book',bookData)
}
//EDIT BOOK
export const editBookAPI=async(id,data)=>{
    return await axiosService("PUT",`/update-book/${id}`,data)
}
//DELETE BOOK
export const deleteBookAPI=async(id)=>{
    return await axiosService("DELETE",`/delete-book/${id}`,{})
}