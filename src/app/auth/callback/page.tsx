"use client"

import { useEffect } from "react";


export default function CallbackPage() {

  useEffect(() => {
    (async() => {
      const res = await fetch(`https://auth.jetsim.app/api/v1/google/callback${window.location.search}&redirect=http://localhost:3000/auth/callback`)
      const json = await res.json()
      console.log(json)
      const {accessToken, refreshToken} = json;
      const simRes = await fetch(`https://sim.jetsim.app/api/v1/packages`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const simJson = await simRes.json()
      console.log(simJson)
      debugger
    })()
  }, [])
  return(
  <div>
     <h1>Callback: {JSON.stringify({})}</h1>
      <h1>Search param: {JSON.stringify({})}</h1>
  </div>
  );
}