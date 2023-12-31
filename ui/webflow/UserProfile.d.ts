import * as React from "react";
import * as Types from "./types";

declare function UserProfile(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  url?: Types.Asset.Image;
  href?: Types.Basic.Link;
}): React.JSX.Element;
