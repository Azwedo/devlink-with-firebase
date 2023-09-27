import { FC, ReactElement } from "react"
import { SocialBlocks, Footer as WebflowFooter } from "@/ui/webflow";
import { FooterLists } from "@/ui/components/footer";

const Footer: FC = (): ReactElement => {
  return (
    <WebflowFooter 
      description="An open-source project with Typescript, Next, DevLink, Tailwind and Firebase for Webflow Developers 🔥"
      copyright="© 2023 Devlink with Firebase, Inc. All rights reserved." 
      lists={<FooterLists/>}
      icons={
        <SocialBlocks
          twitter={{href: "https://twitter.com/azwedocom"}}
          github={{href: "https://github.com/azwedo"}}
          facebook={{href: "https://facebook.com/azwedo"}}
        />
      }
    />
  )
}

export default Footer