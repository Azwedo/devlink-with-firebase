import { FC, Fragment, ReactElement } from "react";
import { PageLayout } from "@/ui/webflow";
import { Metadata } from "next";

const Page: FC = (): ReactElement => {
    return (
        <Fragment>
          <PageLayout>
            <div style={{height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{fontSize: '32px', fontWeight: '700'}}>
                    This page does not exist.
                </h1>
            </div>
          </PageLayout>
        </Fragment>
    )
}

export const metadata: Metadata = {
  title: 'Error 404',
  description: 'Short Description ...'
}

export default Page
