

import { React } from "react";
import dynamic from "next/dynamic";

const DynamicLokacii = dynamic(() => import('@/components/concurents/LokaciiCon'), {
  ssr: false,
})


export default function Concurents() {



  return (
    <div>
      <DynamicLokacii />
    </div>

  );
}