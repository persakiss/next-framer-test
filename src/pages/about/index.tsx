import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import React from "react";

type Props = {};

type AboutPageProps = {};
type AboutPageRef = React.ForwardedRef<HTMLDivElement>;

function About(props: AboutPageProps, ref: AboutPageRef) {
  return (
    <>
      <PageTransition ref={ref}>
        <div className="page1"><div className="text"><h2>About</h2></div></div>
      </PageTransition>
    </>
  );
}

export default About;
