// 1. Find all books in a specific genre
db.books.find({ genre: "Self-help" })

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } })

// 3. Find books by a specific author
db.books.find({ author: "George Orwell" })

// 4. Update the price of a specific book
db.books.updateOne({ title: "1984" }, { $set: { price: 12.00 } })

// 5. Delete a book by its title
db.books.deleteOne({ title: "Educated" }) 





NEXT QUERY FOR INDEXING 
// 1. Index on title
db.books.createIndex({ title: 1 })

// 2. Compound index on author + published_year
db.books.createIndex({ author: 1, published_year: 1 })

// 3. Explain query performance
db.books.find({ title: "Sapiens" }).explain("executionStats") 


SAVING QUERY
touch queries.js
