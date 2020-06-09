import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { proxy } from '../../package.json';
import Iframe from './styles';

const Code = ({ component }) => {
  const [isLoading, setIsLoading] = useState(false);
  const Loader = () => <div>Loading {component}.twig...</div>;

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      console.log(component);
      await axios.get(`/.netlify/functions/server/components/${component}`);
      setIsLoading(false);
    })();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Iframe src={`${proxy[process.env.NODE_ENV]}/${component}.html`} frameBorder='0'></Iframe>
  );
};
export default Code;
