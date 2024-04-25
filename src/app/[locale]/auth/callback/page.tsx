"use client";

import { AuthContext } from "@/contexts/AuthContext"
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react"

export default function Page() {
  const {socialAuthCallback} = useContext(AuthContext);
  const {} = useQuery({
    queryKey: ["socialAuthCallback", "google"],
    queryFn: async () => {
      socialAuthCallback("google")
    }
  })
  return null
}