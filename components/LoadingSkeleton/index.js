import React from 'react';
import { LoadingSkeletonStyle } from './styled';

const LoadingSkeleton = () => (
  <LoadingSkeletonStyle active paragraph={{ rows: 6 }} />
);

export default LoadingSkeleton;
