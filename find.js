//find()

const numbers = [ 1, 2, 5, 11, 20, 159];
const moreThan10 = numbers.find( n => n >= 10);
//11

const books = [{
                title : "BS is real",
                authors : "John",
                rating : 4.25
            },
            {
                title : "Suffering today",
                authors : "Frederick",
                rating : 3.7
            },
            {
                title : "Laugh",
                authors : "John",
                rating : 4.1
            },
        {
                title : "Com Sci",
                authors : "Timothy",
                rating : 3.8
        }
    ];
const johnBooks = books.find( b => b.authors.includes("John"));
//{ title: 'BS is real', authors: 'John', rating: 4.25 }
    