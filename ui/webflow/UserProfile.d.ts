import * as React from "react";
import * as Types from "./types";

declare function UserProfile(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  url?: Types.Asset.Image;
}): React.JSX.Element;
