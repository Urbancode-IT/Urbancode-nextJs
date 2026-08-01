import React from 'react';

export const Honeypot = ({ register }) => {
  return (
    <input
      type="text"
      {...register("honeypot")}
      tabIndex="-1"
      autoComplete="off"
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
};
