'use client'

import { FC, ReactElement } from "react";
import { Button, FullPageCenterLayout, PageLayout } from "@/ui/webflow";
import { AuthWithGoogle, StateSetAccount } from "@/controllers";

const UnauthLayout: FC = (): ReactElement => {
  const authStyles = {
    height: "95vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <FullPageCenterLayout>
      <PageLayout>
        <div style={authStyles}>
          <Button
            props={{ onClick: () => AuthWithGoogle(StateSetAccount) }}
            show={true}
          >
            Login with Google
          </Button>
        </div>
      </PageLayout>
    </FullPageCenterLayout>
  );
};

export default UnauthLayout;
