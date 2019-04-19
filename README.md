# Codenation AceleraDev Challenge

## [Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
The cipher alphabet is the plain alphabet rotated left or right by some number of positions. For example, considering a right shift of 3:

Plaintext:  the quick brown fox jumps over the lazy dog

Ciphertext: qeb nrfzh yoltk clu grjmp lsbo qeb ixwv ald

## Rules
The cipherText (cifrado) and the shift number (numero_casas) was given by [Codenation](https://www.codenation.dev) API.

The alphabetic characters will be left shift by the given shift number.

The special characters will be keep as the same.

## Get and run this project
#### Clone this repository
```$ git clone https://github.com/cintiafumi/caesar-cipher.git```

#### Install the packages
```$ yarn```

#### Run the project
If you don't have a Codenation token, just start the application:
+ ```$ npm start```

If you have a token given by [Codenation](https://www.codenation.dev):
+ Create a `.env` file and add your token to a variable called: `REACT_APP_TOKEN=YOUR_TOKEN`.
+ Uncomment lines 20 to 29, and comment lines 35 to 45 at file: `src/App.js`.
+ ```$ npm start```