import PageTransition from "@/components/PageTransition";
import { forwardRef } from "react";

import Link from "next/link";
import Nav from "@/components/Nav";

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <PageTransition ref={ref}>
      <div className="page1">
      <div className="plant">
        <div className="plate">
          <div className="device">
          </div></div></div>
      </div>
    </PageTransition>
  );
}

export default forwardRef(IndexPage);
