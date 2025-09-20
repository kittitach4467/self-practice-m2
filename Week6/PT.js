// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
    // TODO: Add the quote object to the quotes array
    quotes.push(quote)
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
    // TODO: Remove the quote object from the array using the given id
    if (!id) return 
    const getQuoteIndex = quotes.findIndex((quote) => quote.id === id)
    if (getQuoteIndex < 0) return
    quotes.splice(getQuoteIndex, 1)
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
    // TODO: Find the quote by id and update its properties
    if (!id) return
    const getQuoteIndex = quotes.findIndex((quote) => quote.id === id)
    quotes.splice(getQuoteIndex, 1, { id, ...updatedQuote })
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
    // TODO: Return the quotes array
    return quotes;
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({ id: 1, content: "Hello", author: "John" },)
addQuote({ id: 2, content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum perferendis incidunt.", author: "Michel" })
addQuote({ id: 3, content: "Hello, World", author: "Max" })

// TODO: Delete 1 quote using deleteQuote()
deleteQuote(1)
// TODO: Update 1 quote using updateQuote()
updateQuote(3, { content: "New Content", author: "Kittihengcharoen" })
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes());
