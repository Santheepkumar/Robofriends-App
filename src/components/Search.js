import React from "react";

const Sb = ({ searchfield, searchChange }) => {
  return (
    <input
      type='search'
      placeholder='Search for bots'
      className='pa3 ba b--green bg-lightest-blue'
      onChange={searchChange}
    />
  );
};
export default Sb;
