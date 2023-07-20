import { Fragment } from 'react';
import { useDebug } from '../context/DebugContext';

export const DebugContainer = ({ children }) => {
  const { debug } = useDebug();
  return debug ? <Fragment>{children}</Fragment> : null;
};
