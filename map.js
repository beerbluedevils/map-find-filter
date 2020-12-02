//map()

const numbers = [ 1, 5, 29, 58, 2, 144];
const doubleValue = numbers.map( num => num * 2)
//[ 2, 10, 58, 116, 4, 288 ]

const animals = [ "dog" , "cat" , "giraffe" , "whale" , "dolphin" ];
const upperChar = animals.map( word => word.toUpperCase());
//[ 'DOG', 'CAT', 'GIRAFFE', 'WHALE', 'DOLPHIN' ]
