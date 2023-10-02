import { FC, ReactElement } from "react";
import { Authenticated, Links } from "@/ui/components";
import { Header } from "@/ui/webflow";

const Navigation: FC = (): ReactElement => {
    return (
        <Header 
            items={<Links />} 
            user={<Authenticated />}
        />
    )
}

export default Navigation