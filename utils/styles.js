import React from 'react';
import { StyleSheet } from 'react-native';
import colors from './colors';

export const gs = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  block_button: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 40,
    borderRadius: 4,
    marginTop: 10,
  },
});
