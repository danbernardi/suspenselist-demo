import SVGSample from './SVGSample';
import { generateIndexedArr } from '../../utils';

const items = generateIndexedArr(15000);

const Heavy = () => {
  return ( 
    <>
      <h1>Heavy</h1>
      <img src="./assets/heavy.jpeg" alt="" />

      <SVGSample />
      <div className="box__group">
        { items.map((item, index) => <div className="box" key={ item.id }>{ index }</div>) }
      </div>
    </>
  );
};

export default Heavy;
