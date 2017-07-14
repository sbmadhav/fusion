import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

const Avatar = ({ ...props }) => {
  return (
    <img
      className="avatar"
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};

Avatar.propTypes = {
  /**
   * Picture URL
  */
  src: PropTypes.string,
  /**
   * Alt Tag
  */
  alt: PropTypes.string,
  /**
   * Image height
  */
  height: PropTypes.number,
  /**
   * Image Widhth
   */
  width: PropTypes.number
};

export default Avatar;