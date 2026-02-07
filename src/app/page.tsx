'use client'

import { useEffect } from "react";
import { bingoHome } from "@/utility/bingo/navigation";

export default function Home() {

  useEffect( () => {
    window.location.href = bingoHome()
  })
}
