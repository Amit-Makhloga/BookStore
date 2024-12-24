// const Book = require("../Model/book_model");

// export const getBook =async(req,res) => {
//     try {
//         const book = await Book.find()
//         res.status(200).json(book)
//     } catch (error){
//         console.log("Error: ", error)
//         res.status(500).json(error);
//     }
// } 

const Book = require("../Model/book_model");

const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Retrieve all books
        res.status(200).json(books);    // Respond with the books
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Internal server error", error });
    }
};

module.exports = { getBook };