db.books.insertMany([
  { title: "Atomic Habits", author: "James Clear", genre: "Self-help", published_year: 2018, price: 15.99, in_stock: true, pages: 320, publisher: "Penguin" },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Technology", published_year: 1999, price: 25.50, in_stock: true, pages: 352, publisher: "Addison-Wesley" },
  { title: "Clean Code", author: "Robert C. Martin", genre: "Technology", published_year: 2008, price: 30.00, in_stock: false, pages: 464, publisher: "Prentice Hall" },
  { title: "1984", author: "George Orwell", genre: "Fiction", published_year: 1949, price: 10.00, in_stock: true, pages: 328, publisher: "Secker & Warburg" },
  { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", published_year: 2011, price: 22.00, in_stock: true, pages: 498, publisher: "Harper" },
  { title: "Becoming", author: "Michelle Obama", genre: "Biography", published_year: 2018, price: 18.99, in_stock: true, pages: 448, publisher: "Crown" },
  { title: "Educated", author: "Tara Westover", genre: "Biography", published_year: 2018, price: 17.00, in_stock: false, pages: 334, publisher: "Random House" },
  { title: "The Lean Startup", author: "Eric Ries", genre: "Business", published_year: 2011, price: 20.00, in_stock: true, pages: 336, publisher: "Crown Business" },
  { title: "Deep Work", author: "Cal Newport", genre: "Self-help", published_year: 2016, price: 16.00, in_stock: true, pages: 296, publisher: "Grand Central" },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", genre: "Psychology", published_year: 2011, price: 14.50, in_stock: false, pages: 499, publisher: "Farrar" }
])
