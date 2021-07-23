import { get } from 'lodash';
import './LazyComponent.css';

const LazyComponent = () => {
  const object = {
    name: 'some name'
  };

  return (
    <>
      <h1>LazyComponent</h1>
      <img src="https://source.unsplash.com/random/200x200?sig=1" alt="" />
      <p>{ get(object, 'name') }</p>
    </>
  );
};

export default LazyComponent;
