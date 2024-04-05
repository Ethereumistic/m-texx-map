

import { React } from "react";
import dynamic from "next/dynamic";
import Lokacii from "@/components/Lokacii";

const DynamicLokacii = dynamic(() => import('@/components/concurents/LokaciiCon'), {
  ssr: false,
})


export default function Locations() {



  return (
    <div>
      <DynamicLokacii />
    </div>

  );
}