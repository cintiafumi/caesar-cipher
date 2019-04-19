import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: {
      numero_casas: null,
      token: '',
      cifrado: '',
      decifrado: '',
      resumo_criptografico: ''
    },
    error: null
  }

  /* ----------- Codenation AceleraDev API ----------- */
  /**
   * GET cipher text from Codenation api with user token.
   */
  // getCipherText() {
  //   fetch(`https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${process.env.REACT_APP_TOKEN}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ data });
  //       const { numero_casas, cifrado } = this.state.data;
  //       this.decipher(numero_casas, cifrado);
  //     })
  //     .catch(error => this.setState({ error }));
  // }

  /* ----------- Cipher Text Example ----------- */
  /**
   * function without Codenation token
   */
  async getCipherText() {
    await this.setState({
      data: {
        ...this.state.data,
        numero_casas: 11,
        cifrado: 'pgpcj rzzo hzcv zq dzqehlcp delced mj dnclenstyr l opgpwzapc´d apcdzylw tens fyvyzhy',
      }
    });
    const { numero_casas, cifrado } = this.state.data;
    this.decipher(numero_casas, cifrado);
  }

  /**
   * Decipher function
   * @param {number} shift is a number to shift to left to decipher 
   * @param {string} cipherText is a cipher text received by api
   */
  decipher(shift, cipherText) {
    let plainText = '';
    for (let i = 0; i < cipherText.length; i++) {
      let character = cipherText[i];
      let charCode = cipherText.charCodeAt(i);
      if (charCode < 96 || charCode > 122) {
        character = cipherText[i];
      } else if (charCode < (97 + shift)) {
        character = String.fromCharCode(charCode - shift + 26);
      } else {
        character = String.fromCharCode(charCode - shift);
      }
      plainText += character;
    }
    this.setState({ data: { ...this.state.data, decifrado: plainText } });
  }

  componentDidMount() {
    this.getCipherText()
  }

  render() {
    const { data, error } = this.state;
    const { numero_casas, cifrado, decifrado } = data;

    return (
      <div className="App">
        <h1>
          Caesar Cipher/Decipher
        </h1>
        {
          error ?
            (<p>{error}</p>) :
            (
              <div>
                <p>
                  {`Shift number: ${numero_casas}`}
                </p>
                <p>
                  {`Cipher Text: ${cifrado}`}
                </p>
                <p>
                  {`Decipher Text: ${decifrado}`}
                </p>

              </div>
            )
        }
        <p>
          Challenged by: 
          <a href='https://www.codenation.dev' target='_blank' rel="noopener noreferrer">
            Codenation AceleraDev
          </a>
        </p>
      </div>
    );
  }
}

export default App;
