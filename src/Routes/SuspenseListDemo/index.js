import { SuspenseList, Suspense, useState } from 'react';
import { wrapPromise, randomNumberAndTimeout } from "../../api";
import { generateIndexedArr } from '../../utils';
import TimeStamp from '../../components/TimeStamp';

const items = generateIndexedArr(36);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const SuspenseListDemo = () => {
  const fetchResources = () => {
    const resources = [];
    items.forEach(() => {
      resources.push(wrapPromise(randomNumberAndTimeout(getRandomArbitrary(1000, 5000))));
    })

    return resources;
  };

  const [resources, setResources] = useState(() => fetchResources());
  const [revealOrder, setRevealOrder] = useState("");

  const handleClick = (newRevealOrder) => {
    setRevealOrder(newRevealOrder);
    setResources(fetchResources());
  };

  const revealOrderItems = [
    { value: '', id: '1', label: 'No suspense list' },
    { value: 'forwards', id: '2', label: 'Forwards' },
    { value: 'backwards', id: '3', label: 'Backwards' },
    { value: 'together', id: '4', label: 'Together' }
  ];

  console.log(revealOrder);

  return (
    <div>
      { revealOrderItems.map((item) => (
        <button
          key={ item.id }
          className="suspense-btn"
          onClick={() => handleClick(item.value)}
        >{ item.label }</button>
      )) }

      <div className="box__group">
        <SuspenseList revealOrder={ revealOrder }>
          { items.map((item, index) => (
            <Suspense key={ item.id } fallback={ <div className="box">Calculating...</div> }>
              <TimeStamp resource={ resources[index] } />
            </Suspense>
          )) }
        </SuspenseList>
      </div>
    </div>
  );
};

export default SuspenseListDemo;
