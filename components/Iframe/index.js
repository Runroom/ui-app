import React from 'react';

import { proxy } from '../../package.json';
import Iframe from './styles';

const Code = ({ component }) => (
  <Iframe src={`${proxy[process.env.NODE_ENV]}/${component}.html`} frameBorder='0'></Iframe>
);

export default Code;
