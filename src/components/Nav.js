import React from 'react';
import Link from './Link';

class Nav extends React.Component {
  render(){
    return (
      <nav>
        <ul>
          <Link textLink="Home" />
          <Link textLink="Produtos" />
          <Link textLink="Contato" />
        </ul>
      </nav>
    )
  }
}

export default Nav;