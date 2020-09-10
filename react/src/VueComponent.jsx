import React, { useEffect, useRef } from "react";
import loadApp from "vueApp/loadApp";

export const VueComponent = () => {
  const mountEl = useRef();

  useEffect(() => {
    if (mountEl.current.innerHTML.length === 0) {
      loadApp("vue-app");
    }
  });

  return <div id="vue-app" ref={mountEl}></div>;
};
