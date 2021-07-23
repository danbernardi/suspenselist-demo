import { Suspense } from 'react';
import { createResource, wrapPromise, randomNumberAndTimeout } from '../../api';

const TimeStamp = ({ resource }) => {
  const time = resource.read();
  // const time = 'time';

  return (
    <div className="box box--complete">
      { time }
    </div>
  );
};

export default TimeStamp;
