import '@styles/globals.css';
import { children } from 'react';
import Nav from '@components/Nav';

export const metadata = {
    title: "Promptopia",
    description: "Discover & share AI prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app font-inter'>
            <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout