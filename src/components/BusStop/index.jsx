import React, { useEffect, useState } from 'react';
import './style.css';

export const BusStop = ({ name, station, time }) => {
  return (
    <>
      <div className="bus-stop">
        <div className="bus-stop__bullet"></div>
        <div className="bus-stop__place">
          <div className="bus-stop__city">{name}</div>
          <div className="bus-stop__station">{station}</div>
        </div>
        <div className="bus-stop__departure">{time}</div>
      </div>
      {/*       <div class="bus-stop">
        <div class="bus-stop__bullet"></div>
        <div class="bus-stop__place">
          <div class="bus-stop__city">Město 2</div>
          <div class="bus-stop__station">Zastávka</div>
        </div>
        <div class="bus-stop__departure">10:45</div>
      </div>
      <div class="bus-stop">
        <div class="bus-stop__bullet"></div>
        <div class="bus-stop__place">
          <div class="bus-stop__city">Město 3</div>
          <div class="bus-stop__station">Zastávka</div>
        </div>
        <div class="bus-stop__departure">10:45</div>
      </div>
      <div class="bus-stop">
        <div class="bus-stop__bullet"></div>
        <div class="bus-stop__place">
          <div class="bus-stop__city">Město 4</div>
          <div class="bus-stop__station">Zastávka</div>
        </div>
        <div class="bus-stop__departure">10:45</div>
      </div> */}
    </>
  );
};
