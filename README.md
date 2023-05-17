# output_unique_numbers
Process the input file numbersFile and output only the unique values.
Using the fs library, we read the input file and then assuming the values ​​are separated by newlines, we also remove whitespace. With the map(BigInt) function, we convert the numbers to respect the required constraints. Then we call 'getUniqueNumbers' to return a set in an array from the list of unique numbers.
