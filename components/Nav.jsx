"use client"

import React, { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';



const Nav = () => {
  const userIsLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, settoggleDropdown] = useState(false)

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    fetchProviders()
  }, [])


  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" width={32} height={32} className='object-contain' />
        <p className="logo_text">Promtopia</p>
      </Link>

      {/* Desktop Navigation   */}
      <div className="sm:flex hidden">
        {userIsLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className="black_btn">
              create post
            </Link>
            <button type="button" onClick={signOut} className='outline_btn'>
              Sign out
            </button>
            <Link href="/profile">
              <Image src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile" />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onclick={() => provider.id}
                  className='black_btn'>
                  SignIn

                </button>
              ))}
          </>
        )}
      </div>

            {/* mobile navigation */}
      <div className="sm:flex hidden">
        {userIsLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className="black_btn">
              create post
            </Link>
            <button type="button" onClick={signOut} className='outline_btn'>
              Sign out
            </button>
            <Link href="/profile">
              <Image src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile" 
              onClick = {() => setToggleDropdown((prev) => !prev)}
            />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onclick={() => provider.id}
                  className='black_btn'>
                  SignIn

                </button>
              ))}
          </>
        )}
    </div>

 </nav>
  );
  };
  
export default Nav