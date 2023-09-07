import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import React from "react";

type Props = {};

type AboutPageProps = {};
type AboutPageRef = React.ForwardedRef<HTMLDivElement>;


function Science(props: AboutPageProps, ref: AboutPageRef) {
    return (
    <PageTransition ref={ref}>
      <div className="page2"><div className="text"><h2>Science</h2></div></div>
    </PageTransition>
  );
}

export default Science;
