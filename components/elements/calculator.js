import React, { useState } from 'react';
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const Calculactor = () => {
  const marks = {
    '6': '6',
    '12': '12',
    '18': '18',
    '24': '24',
    '30': '30',
    '36': '36',
    '42': '42',
    '48': '48',
    '54': '54',
  };

  const marksInterest = {
    '18': '18',
    '19': '19',
    '20': '20',
    '21': '21',
    '22': '22',
  };

  const [value, setValue] = useState(6);
  const [valueInterest, setValueInterest] = useState(6);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const handleChangeInterest = (event) => {
    setValueInterest(Number(event.target.value));
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
        <div>
            <h1 className="color-brand-1">Loan Calculator</h1>
          </div>
          <div className="form-group">
            <label>How much would you like to borrow?</label>
            <div className="input-group">
              <input className="input" type="text" />
            </div>
          </div>
          <label htmlFor="rangeSlider" className="form-label">
            How long do you need it for?
          </label>
          <input
            type="range"
            className="form-range custom-range"
            id="rangeSlider"
            min={6}
            max={54}
            step={6}
            value={value}
            onChange={handleChange}
            list="tickmarks"
          />
          <datalist id="tickmarks">
            {Object.keys(marks).map((key) => (
              <option key={key} value={key} label={marks[key]} />
            ))}
          </datalist>
          <div className="d-flex range-label justify-content-between">
            {Object.keys(marks).map((key) => (
              <span key={key}>{key}</span>
            ))}
          </div>

          <div className="interest-group">
            <label htmlFor="rangeSlider" className="form-label">
              Interest per year
            </label>
            <input
              type="range"
              className="form-range custom-range"
              id="rangeSlider"
              min={6}
              max={54}
              step={6}
              value={valueInterest}
              onChange={handleChangeInterest}
              list="tickmarks"
            />
            <datalist id="tickmarks">
              {Object.keys(marksInterest).map((key) => (
                <option key={key} value={key} label={marksInterest[key]} />
              ))}
            </datalist>
            <div className="d-flex range-label justify-content-between">
              {Object.keys(marksInterest).map((key) => (
                <span key={key}>{key}</span>
              ))}
            </div>
          </div>
          <div className="mt-50 text-start">
                  <Link className="btn btn-brand-1 newBtn" href="#">
                    apply Now
                    <BsChevronRight className="right-icon"/>
                  </Link>
                </div>
        </div>
      </div> 
    </div>
  );
};

export default Calculactor;

