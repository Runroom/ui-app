import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { proxy } from '../../package.json';
import Iframe from './styles';

const Code = ({ component }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const Loader = () => <div>Loading {component}.twig...</div>;
  const Error = () => <div>Error {component}.twig!</div>;

  useEffect(() => {
    (async () => {
      try {
        await axios.get(`/.netlify/functions/server/components/${component}`);
      } catch (err) {
        console.error(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return isLoading ? (
    <Loader />
  ) : isError ? <Error /> : (
      <Iframe src={`${proxy[process.env.NODE_ENV]}/${component}.html`} frameBorder='0'></Iframe>
    );
};
export default Code;
