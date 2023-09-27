import * as React from "react";
import * as Types from "./types";

declare function Footer(props: {
  as?: React.ElementType;
  copyright?: React.ReactNode;
  description?: React.ReactNode;
  lists?: Types.Devlink.Slot;
  icons?: Types.Devlink.Slot;
}): React.JSX.Element;
