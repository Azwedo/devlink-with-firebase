import { FC, ReactElement } from "react"
import { Footer } from "@/ui/webflow";
import { FooterLists } from "../components/footer";

const FooterWebflow: FC = (): ReactElement => {
  return (
    <Footer lists={<FooterLists/>}/>
  )
}

export default FooterWebflow