import React, { useEffect, useRef } from "react";
import loadApp from "angularApp/loadApp";

export const AngularComponent = () => {
  const mountEl = useRef();

  useEffect(() => {
    if (mountEl.current.innerHTML.length === 0) {
      loadApp();
    }
  });

  return <app-root ref={mountEl}></app-root>;
};
