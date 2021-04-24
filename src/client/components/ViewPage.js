import React, { Fragment, useEffect, useState } from 'react';
import Header from './Header';
import PhotoOptionsChoise from './PhotoOptionsChoise';



export default function ViewPage() {

  return (
    <div className="page feed">
      <Header />
      <PhotoOptionsChoise />
    </div>
  );
}
