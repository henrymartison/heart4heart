import React from 'react';

import { TouchableOpacity } from './TouchableOpacity';
import { gs } from '../../utils/styles';
import colors from '../../utils/colors';

const Button = ({ children, transparent = true, style, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        backgroundColor: transparent ? 'transparent' : null,
        ...gs.center,
      },
      style,
    ]}
  >
    {children}
  </TouchableOpacity>
);
export default Button;
