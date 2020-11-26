import React from 'react';
import './directory.scss';

import MenuItem from '../menu-item/menu-item';

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        { id: 1, title: 'hats', subtitle: 'shop now', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png' },
        { id: 2, title: 'jackets', subtitle: 'shop now', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png' },
        { id: 3, title: 'sneakers', subtitle: 'shop now', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png' },
        { id: 4, title: 'mens', subtitle: 'shop now', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png', size: 'large' },
        { id: 5, title: 'womens', subtitle: 'shop now', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', size: 'large' },
      ]
    }
  }

  render() {
    return (
      <div className="Directory">
        {
          this.state.sections.map(({ id, title, subtitle, imageUrl, size }) => 
            <MenuItem key={id} title={title} subtitle={subtitle} imageUrl={imageUrl} size={size} />
          )
        }
      </div>
    );
  }
}