import Link from "next/link";

import { ReactElement } from "react";
import { RenderLink } from "../../webflow";

const LinkRenderer: RenderLink = (params): ReactElement => {
    const {
        href,
        className,
        children,
        ...props
    } = params;
    
    return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
    )
}

export default LinkRenderer