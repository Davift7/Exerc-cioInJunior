
const booksByCategory = [
    {
        category: "Romance",
        books: [
            {
                title: "O Sol Também é Uma Estrela",
                author: "Nicola Yoon",
            },
            {
                title: "O Noivo da Minha Melhor Amiga",
                author: "Emily Gin",
            },
            {
                title: "Orgulho e Preconceito",
                author: "Jane Austen",
            },
        ],
    },
    {
        category: "Fantasia",
        books: [
            {
                title: "Harry Potter e a Pedra Filosofal",
                author: "J.K. Rowling",
            },
            {
                title: "O Hobbit",
                author: "J.R.R. Tolkien",
            },
            {
                title: "Eragon",
                author: "Christopher Paolini",
            },
            {
                title: "O Nome do Vento",
                author: "Patrick Rothfuss",
            },
        ],
    },
    {
        category: "Suspense",
        books: [
            {
                title: "A Garota no Trem",
                author: "Paula Hawkins",
            },
            {
                title: "O Silêncio dos Inocentes",
                author: "Thomas Harris",
            },
        ],
    },
    {
        category: "Ficção Científica",
        books: [
            {
                title: "Duna",
                author: "Frank Herbert",
            },
            {
                title: "Neuromancer",
                author: "William Gibson",
            },
            {
                title: "Fundação",
                author: "Isaac Asimov",
            },
            {
                title: "1984",
                author: "George Orwell",
            },
            {
                title: "O Fim da Infância",
                author: "Arthur C. Clarke",
            },
        ],
    },
];
//console.log(booksByCategory[0].books[0].author)


function authors(array) {
    let autores = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].books.length; j++) {
            let escritor = array[i].books[j].author
            if (!autores.includes(escritor)) {
                autores.push(array[i].books[j].author)
            }
        }
    }
    return autores
}

