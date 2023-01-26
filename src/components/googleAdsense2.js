import React, { useEffect } from 'react'

export const Adsense2 = ({ path }) => {
  useEffect(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [path])
  
  return (
    <ins 
      className="adsbygoogle"
      style={{ "display": "block" , textAlign: "center"  }}
      data-ad-client="pub-9862632130449490"
      data-ad-slot="4579727468"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}