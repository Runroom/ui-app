import React from 'react';
import Link from 'next/link';

import placeholder from '../../assets/img/placeholder.jpg';
import { proxy } from '../../package.json';
import CardStyled from './styles';

class Card extends React.Component {
  render() {
    const { slug, name, img } = this.props;
    const imagePath = img ? `${proxy[process.env.NODE_ENV]}/${img}` : placeholder;

    return (
      <CardStyled>
        <Link href={slug}>
          <a>
            <img src={imagePath} alt={`${name} component`} />
            <p>{name}</p>
          </a>
        </Link>
      </CardStyled>
    );
  }
}

export default Card;
