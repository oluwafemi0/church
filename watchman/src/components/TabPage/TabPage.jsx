import React from 'react';
import Celebrants from '../Celebrants/Celebrants';
import Gallery from '../Gallery/Gallery';
import Herobox from '../Herobox/Herobox'
import Testimonies from '../Testimonies/Testimonies';
import Sermon from '../Sermon/Sermon'
import Csr from '../Csr/Csr'

const TabPage = () => (
  <Tabs>
    <Tab title="Home">
      <Herobox />
      <Celebrants />
      <Testimonies />
      <Csr />
    </Tab>
    <Tab title="Sermon">
      <Sermon />
    </Tab>
    <Tab title="Annoucment">
    </Tab>
    <Tab title="Gallery">
    <Gallery />
    </Tab>
  </Tabs>
);


const style = {
  notSelected: `-mb-2 bg-white text-black`,
  selected: `text-gray-500  bg-gray-200 `,
  default: `py-3 px-9 mx-4 cursor-pointer uppercase font-semibold inline-block focus:outline-none`,
};

function Tabs({ children }) {
  const childrenArray = React.Children.toArray(children);
  const [current, setCurrent] = React.useState(childrenArray[0].key);

  const newChildren = childrenArray.map((child) =>
    React.cloneElement(child, { selected: child?.key === current }),
  );

  return (
    <nav>
      {childrenArray.map((child) => (
        <div
          role="link"
          tabIndex={0}
          onClick={() => setCurrent(child?.key)}
          key={child?.key}
          className={`${style.default} 
             ${current === child?.key ? style.selected : style.notSelected}`}
        >
          {child?.props.title}
        </div>
      ))}
      <section>{newChildren}</section>
    </nav>
  );
}

function Tab({ children, selected }) {
  return (
    <div hidden={!selected} className="mt-4">
      {children}
    </div>
  );
}

export default TabPage