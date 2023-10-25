function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and store it back in the array
    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }

    // Join the reversed words to form the reversed sentence
    const reversedSentence = words.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Split the word into individual characters
    const characters = word.split('');

    // Reverse the characters and join them back into a word
    const reversedWord = characters.reverse().join('');

    return reversedWord;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
