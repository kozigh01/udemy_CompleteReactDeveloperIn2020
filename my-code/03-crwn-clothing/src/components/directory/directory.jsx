import React from 'react';
import './directory.scss';

import MenuItem from '../menu-item/menu-item';

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        { id: 1, title: 'hats', subtitle: 'shop now', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', linkUrl: 'hats' },
        { id: 2, title: 'jackets', subtitle: 'shop now', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png', linkUrl: '' },
        { id: 3, title: 'sneakers', subtitle: 'shop now', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png', linkUrl: '' },
        { id: 4, title: 'mens', subtitle: 'shop now', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png', size: 'large', linkUrl: '' },
        { id: 5, title: 'womens', subtitle: 'shop now', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', size: 'large', linkUrl: '' },
      ]
    }
  }

  render() {
    return (
      <div className="Directory">
        {
          this.state.sections.map(({ id, ...sectionProps }) => 
            <MenuItem key={id} {...sectionProps} />
          )
        }
      </div>
    );
  }
}