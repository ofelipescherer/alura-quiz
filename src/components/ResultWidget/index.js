/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import Link from '../Link';

import Widget from '../Widget';

export default function ResultWidget({ results, externalQuestions }) {
  const qntAcertos = results.filter((x) => x).length;
  let frase = '';
  if (qntAcertos <= (results.length) / 2) {
    frase = 'Você precisa estudar mais';
  } else if (qntAcertos < (results.length)) {
    frase = 'Você é quase fera';
  } else {
    frase = 'Você é fera';
  }

  return (
    <Widget
      as={motion.section}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <h1>
          Resultado:
          {' '}
          {frase}
        </h1>
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {/* {results.reduce((somatoriaAtual, resultAtual) => {
              const isAcerto = resultAtual === true;
              if (isAcerto) {
                return somatoriaAtual + 1;
              }

              return somatoriaAtual;
            })} */}
          {qntAcertos}
          {' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {' '}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
      <Widget.Header>
        <h1>Respostas:</h1>
      </Widget.Header>
      <Widget.Content>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              <h1>
                #
                {index + 1}
                {' '}
                Resposta:
              </h1>
              {' '}
              {externalQuestions[index].alternatives[externalQuestions[index].answer]}
              <hr />
            </li>
          ))}
        </ul>
      </Widget.Content>
      <Link href="/">
        <Button>
          <p>Jogar novamente</p>
        </Button>
      </Link>
    </Widget>
  );
}
