
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
  // const [data, setData] = useState(null);
  //  useEffect(() => {
  //    async function fetchData() {
  //      const url = 'https://cuwa.pythonanywhere.com/api/customers/'
  //      try {
  //        const response = await fetch(url);
  //        if (!response.ok) {
  //          throw new Error('Network response was not ok');
  //        }
  //        const result = await response.json();
  //         setData(result);
  //      } catch (error) {
  //        console.error('Error fetching data:', error);
  //        throw error;
  //      }
  //    }
  //    fetchData();
  //  }, []);
  
  const data = [
    {
      idNo: 1001,
      accountNo: 100100000001,
      name:'Kwame',
      branch:'Kumasi',
      address:'AK 473-4692, Marble Town Str. Asuoyeboah',
      mobile:'+233548632129',
    },
    {
      idNo: 1002,
      accountNo: 100100000002,
      name: 'Yaw',
      branch: 'Accra',
      address: 'AK 473-4692, Marble Town Str. Asuoyeboah',
      mobile: '+233548632129',
    },
    {
      idNo: 1003,
      accountNo: 100100000003,
      name: 'Kwame',
      branch: 'Kumasi',
      address: 'AK 473-4692, Marble Town Str. Asuoyeboah',
      mobile: '+233548632129',
    },
    {
      idNo: 1004,
      accountNo: 100100000004,
      name: 'Kwame',
      branch: 'Kumasi',
      address: 'AK 473-4692, Marble Town Str. Asuoyeboah',
      mobile: '+233548632129',
    },
    {
      idNo: 1005,
      accountNo: 100100000005,
      name: 'Kwame',
      branch: 'Kumasi',
      address: 'AK 473-4692, Marble Town Str. Asuoyeboah',
      mobile: '+233548632129',
    },
    {
      idNo: 1006,
      accountNo: 100100000006,
      name: 'Kwame',
      branch: 'Kumasi',
      address: 'AK 473-4692, Marble Town Str. Asuoyeboah',
      mobile: '+233548632129',
    },
    {
      idNo: 1007,
      accountNo: 100100000007,
      name: 'Kwame',
      branch: 'Kumasi',
      address: 'AK 473-4692, Marble Town Str. Asuoyeboah',
      mobile: '+233548632129',
    },
    {
      idNo: 1008,
      accountNo: 100100000008,
      name: 'Kwame',
      branch: 'Kumasi',
      address: 'AK 473-4692, Marble Town Str. Asuoyeboah',
      mobile: '+233548632129',
    },
    {
      idNo: 1009,
      accountNo: 10010000009,
      name: 'Kwame',
      branch: 'Kumasi',
      address: 'AK 473-4692, Marble Town Str. Asuoyeboah',
      mobile: '+233548632129',
    },
    {
      idNo: 1010,
      accountNo: 100100000010,
      name: 'Kwame',
      branch: 'Kumasi',
      address: 'AK 473-4692, Marble Town Str. Asuoyeboah',
      mobile: '+233548632129',
    },

  ]
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
          {data.map(agent => (
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
