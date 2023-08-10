'use client'

import React from 'react'
import { SessionProvider, useSession } from 'next-auth/react';


const Provider = ({ children , session }) => {
  return (
    <SessionProvider session = {session}>
      <ComponentUsingUseSession />
      {children}
      </SessionProvider>
  )
}

function ComponentUsingUseSession (){
  const {data: session, status} = useSession()
}

export default Provider