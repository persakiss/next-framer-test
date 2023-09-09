import PageTransition from "@/components/PageTransition";
import { forwardRef } from "react";

import Link from "next/link";
import Nav from "@/components/Nav";

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

function IndexPage(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <PageTransition ref={ref}>
      <div className="page0">
        <div className="spill">
        </div>
      </div>
    </PageTransition>
  );
}

export default forwardRef(IndexPage);
