import './Share.css';
import { useState } from 'react';
import { ShareSocial } from 'react-share-social';

export default function Share(props) {
  const [btn, setBtn] = useState(false);

  return (
    <>
    <i className="fas fa-share-alt " onClick={() => setBtn(!btn)}></i>
      {/* <button onClick={() => setBtn(!btn)}>Toggle</button> */}
      {btn ? <RSSUsage url={props.url}/> : ''}
    </>
  );
}

const style = {
  borderRadius: 3,
  border: 0,
  color: 'white',
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  margin: '0 auto',
  position: 'fixed',
};

function RSSUsage(props) {
  return (
    <ShareSocial
       style={style}
        url={props.url}
      socialTypes={['facebook', 'twitter', 'reddit', 'linkedin']}
    />
  );
}
