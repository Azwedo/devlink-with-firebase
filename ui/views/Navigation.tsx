import { FC, ReactElement } from "react";
import { AuthHandler, Links } from "@/ui/components";
import { BigHeader } from "@/ui/webflow";

const Navigation: FC = (): ReactElement => {
    return (
        <BigHeader 
            links={<Links />} 
            user={<AuthHandler />}
        />
    )
}

export default Navigation