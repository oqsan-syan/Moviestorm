import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import IntroButton from '../IntroButton'

const Tab3 = () => {
  return (
    <div className="tab-3">
        <div className="tab-3__top">
          <p>Choose one plan and watch everything on MovieStorm</p>
          <IntroButton />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Basic</th>
              <th>Standart</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly price after free month ends on 6/19/19</td>
              <td>$8.99</td>
              <td>$12.99</td>
              <td>$15.99</td>
            </tr>
            <tr>
              <td>HD Available</td>
              <td><ClearIcon /></td>
              <td><CheckIcon /></td>
              <td><CheckIcon /></td>
            </tr>
            <tr>
              <td>Ultra HD Available</td>
              <td><ClearIcon /></td>
              <td><CheckIcon /></td>
              <td><CheckIcon /></td>
            </tr>
            <tr>
              <td>Screens you can watch on at the same time</td>
              <td>1</td>
              <td>2</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Watch on your laptop, TV, phone and tablet</td>
              <td><CheckIcon /></td>
              <td><CheckIcon /></td>
              <td><CheckIcon /></td>
            </tr>
            <tr>
              <td>Unlimited movies and TV shows</td>
              <td><CheckIcon /></td>
              <td><CheckIcon /></td>
              <td><CheckIcon /></td>
            </tr>
            <tr>
              <td>Cancel anytime</td>
              <td><CheckIcon /></td>
              <td><CheckIcon /></td>
              <td><CheckIcon /></td>
            </tr>
            <tr>
              <td>First Month Free</td>
              <td><ClearIcon /></td>
              <td><CheckIcon /></td>
              <td><CheckIcon /></td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default Tab3;