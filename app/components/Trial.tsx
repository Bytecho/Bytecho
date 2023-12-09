'use client'

import config from '@/../../src/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';

Amplify.configure(config, {
    API: {
      REST: {
        headers: async () => {
          return { 'X-Api-Key': 'ONg1KODwZv8dbL2NDNGsf9Isb4T5Kyqa79Wk7oxt' };
        }
      }
    }
  });

import React, { useEffect } from 'react'

export default function Trial() {
  
    // useEffect(() => {
    // async function postTodo() {
    //   try {
    //     const restOperation = post({
    //       apiName: 'quotes',
    //       path: '/create',
    //       options: {
    //         body: {
    //           message: 'Mow the lawn with Juanito arimana'
    //         }
    //       }
    //     });
    //     await restOperation.response;
    //     console.log('POST call succeeded in trial');
    //     // console.log(response);
    //   } catch (e) {
    //     console.log('POST call failed: ', e);
    //   }
    // }
    
    // postTodo();
    // })
  
    return (
    <div>Trial</div>
  )
}
