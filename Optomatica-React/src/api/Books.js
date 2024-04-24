// Desc: API calls for books to sever

import { apiInstance } from ".";


export const getAllBooks = async () => {
    try {
        const response = (await apiInstance.get('/books')).data;
        return response;
    } catch (error) {
        console.error('Error fetching books: ', error);
        return null;
    }
}


export const addBook = async (book) => {
    try {
        const response = (await apiInstance.post('/books', book)).data;
        return response;
    } catch (error) {
        console.error('Error adding book: ', error);
        return null;
    }
}

export const queryBooks = async (query) => {
    const {title , year} = query;
    // console.log(title, year);
    const queryString = year? `title=${title}&year=${year}` : `title=${title}`;
    try {
        const response = (await apiInstance.get(`/books/query?${queryString}`)).data;
        return response;
    } catch (error) {
        console.error('Error querying books: ', error);
        return null;
    }
}


export const deleteBook = async (id) => {
    try {
        const response = (await apiInstance.delete(`/books/${id}`)).data;
        return response;
    } catch (error) {
        console.error('Error deleting book: ', error);
        return null;
    }
}