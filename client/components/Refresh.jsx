import React from 'react';
import ReactDOM from 'react-dom';


function Refresh() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div className="button">
      <button onClick={refreshPage}>Play Again!</button>
    </div>
  );
}

export default Refresh;