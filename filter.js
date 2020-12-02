//filter()
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
        },
        {
                title : "No tomorrow",
                authors : "John",
                rating : 4.12
        }    
];

const johnBooks = books.filter( book => book.authors.includes("John"));
//{ title: 'BS is real', authors: 'John', rating: 4.25 },
//{ title: 'Laugh', authors: 'John', rating: 4.1 },
//{ title: 'No tomorrow', authors: 'John', rating: 4.12 }//

const num = [ 1,2,3,4,5,6,7,8,9];
const fiveOrMore = num.filter( n => n >= 5)
//[ 5, 6, 7, 8, 9 ]

    