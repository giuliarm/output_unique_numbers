
const fs = require('fs');
const readline = require('readline');

function getUniqueNumbers(numbers) {
  const uniqueNumbers = [...new Set(numbers)].map(number => Number(number.toString()));
  return uniqueNumbers;
}

async function processNumbersFile() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the file path: ', async (filePath) => {
    try {
      const fileContent = await fs.promises.readFile(filePath, 'utf8');
      const numbers = fileContent.trim().split('\n').map(BigInt);

      const uniqueNumbers = getUniqueNumbers(numbers);
      console.log(uniqueNumbers);
    } catch (error) {
      console.error('Error reading or processing the file:', error);
    } finally {
      rl.close();
    }
  });
}

// Example to use as path:  ./././././numbersFile.txt
processNumbersFile();
