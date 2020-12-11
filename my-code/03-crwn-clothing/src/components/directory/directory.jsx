import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './directory.scss';

import MenuItem from '../menu-item/menu-item';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {
  return (
    <div className="Directory">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps, null)(Directory);
