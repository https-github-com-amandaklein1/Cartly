/* eslint-disable class-methods-use-this */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import changeColorContainer from '../containers/changeColorContainer';
import changeProductContainer from '../containers/changeProductContainer';



const App = () => {



  return (
    <>
      <div>
        <div className="logo">
          <h1>
            <a href="http://localhost:3000">Cartly</a>
          </h1>
        </div>

        <div className="productOverview">
          <changeProductContainer />
          <div className="rightSide">
            <div className="styleInfoAndThumbs">
              <changeColorContainer />
            </div>
            <div>
              {/* <CartContainer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;