import * as React from "react";
import * as Types from "./types";

declare function SocialBlocks(props: {
  as?: React.ElementType;
  twitter?: Types.Basic.Link;
  github?: Types.Basic.Link;
  facebook?: Types.Basic.Link;
}): React.JSX.Element;
