const quotes = []
let nextId = 1
function addQuote(content, author) {
    let quoteLength = quotes.length
    let newQuote = { id: nextId++, content, author }
    if (quotes.push(newQuote) === quoteLength + 1) return newQuote
}

function deleteQuote(id) {
    for (let i = 0; i < quotes.length; i++) {
        if (quotes[i].id === id) {
            quotes.splice(i, 1)
            return i
        }
    }
    return -1
}

function updateQuote(id, content, author) {
    for (let i = 0; i < quotes.length; i++) {
        if (quotes[i].id === id) {
            quotes[i].content = content
            quotes[i].author = author
            return quotes[i]
        }
    }
    return undefined
}

function getAllQuotes() {
    return [...quotes]
}

// Test your functions below
// TODO: Add 3 quotes using addQuote()

console.log(addQuote('Stay hungry, stay foolish.', 'Steve Jobs'))
console.log(addQuote('Do or do not. There is no try.', 'Yoda'))
console.log(addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci'))

// TODO: Delete 1 quote using deleteQuote()

console.log(deleteQuote(2))

// TODO: Update 1 quote using updateQuote()

console.log(updateQuote(1, 'Stay hungry. Stay foolish.', 'Jobs'))

// TODO: Print all quotes using getAllQuotes()

console.log(getAllQuotes())
