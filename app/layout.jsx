import '@styles/styles.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '@components';

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
      <head>
        <meta name="description" content="Cuwa WebApp for filed engineers" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <title>Cuwa Field Systems - Login</title>
      </head>
      <body>
        <main className='app'>{ children }</main>
      </body>
    </html>
  )
}
export default Rootlayout