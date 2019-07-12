import React from "react";
import Type1 from "./Type1";
import Type2 from "./Type2";
import Type3 from "./Type3";

const navigation = type => {
  switch (type) {
    case "type1":
      return <Type1 />;
    case "type2":
      return <Type2 />;
    case "type3":
      return <Type3 />;
    case "all":
      return (
        <div>
          <Type1 />
          <Type2 />
          <Type3 />
        </div>
      );
    default:
      return null;
  }
};

export default navigation;
