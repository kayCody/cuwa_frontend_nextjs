
'use client'
import React, {use, useEffect, useState} from 'react'
import Link from 'next/link'


// export const getStaticProps = async () => {
//   const url = 'https://cuwa.pythonanywhere.com/api/customers/';
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result)
//   return {
//     props: { data: result }
//   }
// }




const Tables = () => {
  const [data, setData] = useState(null);
   useEffect(() => {
     async function fetchData() {
       const url = 'https://cuwa.pythonanywhere.com/api/customers/'
       try {
         const response = await fetch(url);
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         const result = await response.json();
          setData(result);
       } catch (error) {
         console.error('Error fetching data:', error);
         throw error;
       }
     }
     fetchData();
   }, []);
  return (
    <div>
      <table>
        <thead>
          <tr class="text-center font-bold text-sm text-white bg-gray-800 ">
            <th scope="col" class="head-rows">Accounts ID Number</th>
            <th scope="col" class="head-rows">Accounts Number.</th>
            <th scope="col" class="head-rows">Full name</th>
            <th scope="col" class="head-rows">Branch</th>
            <th scope="col" class="head-rows">Address</th>
            <th scope="col" class="head-rows">Mobile</th>
          </tr>
        </thead>
        <tbody className='bg-gray-200'>
          {data?.map(agent => (
            <tr class="text-center text-sm text-gray-900 font-light  py-4  border-b border-white ">
              <td class="whitespace-nowrap px-6 actual-rows font-bold text-blue-600"><Link className='' href={'/dashboard/' + agent.id}>{agent.idNo}</Link> </td>
              <td class="whitespace-nowrap px-6 actual-rows">{agent.accountNo}</td>
              <td class="whitespace-nowrap px-6 actual-rows">{agent.name}</td>
              <td class="whitespace-nowrap px-6 actual-rows">{agent.branch}</td>
              <td class="whitespace-nowrap px-6 actual-rows">{agent.address}</td>
              <td class="whitespace-nowrap px-6 actual-rows">{agent.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tables
