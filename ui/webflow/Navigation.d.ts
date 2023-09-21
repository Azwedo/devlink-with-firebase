import * as React from "react";
import * as Types from "./types";

declare function Navigation(props: {
  as?: React.ElementType;
  left?: Types.Devlink.Slot;
  right?: Types.Devlink.Slot;
}): React.JSX.Element;
