import React, { useState } from 'react';
import validator from 'validator';

import './field-email.scss';
import { Button } from '../button-meteora';
import { EmailModal } from '../modal-email';

export function EmailField(){
    const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    if (!validator.isEmail(email)) {
      setError('Endereço de e-mail inválido');
      setSuccess(false);
      return;
    }
    setError('');
    setSuccess(true);
    setEmail('');
    // Salvar o endereço de e-mail no arquivo JSON
    saveEmail(email)
      .then(() => {
        console.log('Endereço de e-mail registrado com sucesso!');
        setEmail(''); // Limpa o campo de e-mail após o registro
      })
      .catch((error) => {
        console.error('Erro ao registrar o endereço de e-mail:', error);
      });
  };

  const saveEmail = (email) => {
    // Implemente o código para salvar o endereço de e-mail em um arquivo JSON
    // por exemplo, usando a função writeFile do Node.js ou localStorage no navegador

    // Exemplo de salvamento em localStorage:
    const emails = JSON.parse(localStorage.getItem('emails')) || [];
    emails.push(email);
    localStorage.setItem('emails', JSON.stringify(emails));

    return Promise.resolve();
  };
  const closeModal = () => {
    setSuccess(false);
  };
    return (
        <div className='father-container-email'>
            <div className='field'>
            <p>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
            </p>
            <div><input type="email" value={email} onChange={handleEmailChange} placeholder="Digite seu email"></input><Button onClick={handleSubscribe}>Enviar</Button></div>
            {error && <p style={{ color: 'red', fontSize: 15 }}>{error}</p>}
            {success && (
             <EmailModal onClick={closeModal}/>
            )}
            </div> 
        </div>
    )
}