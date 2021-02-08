import React from 'react';
import config from '../../config';
const agency = require('../assets/images/am.png')

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <img height="128px" src={agency} alt="" className="agency"/>
    </footer>
  );
}
