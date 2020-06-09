import React from 'react';
import { Link } from 'react-scroll'

import { capitalize } from '../../utils/helpers';
import { Aside, NavList } from './styles';

class Navigation extends React.Component {
  render() {
    const { structure } = this.props;

    return (
      <Aside>
        <div className="title2">Sections</div>
        <NavList>
          {Object.keys(structure).map(section => (
            <li key={`${section}-key`}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                duration={350}
                offset={-50}
                activeClass='active'
              >
                {capitalize(section)}
              </Link>
            </li>
          ))}
        </NavList>
      </Aside>
    );
  }
}

export default Navigation;
