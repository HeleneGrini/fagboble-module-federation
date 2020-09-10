import React from "react";
import { VueComponent } from "./VueComponent";
import { AngularComponent } from "./AngularComponent";

export const App = () => {
  return (
    <div>
      Hello from React
      <VueComponent />
      <AngularComponent />
    </div>
  );
};
