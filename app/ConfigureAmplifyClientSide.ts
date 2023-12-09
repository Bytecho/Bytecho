'use client';

import { Amplify } from 'aws-amplify';
import config from '../src/amplifyconfiguration.json';

Amplify.configure(config, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}

Amplify.configure(config, {
    API: {
      REST: {
        headers: async () => {
          return { 'X-Api-Key': 'ONg1KODwZv8dbL2NDNGsf9Isb4T5Kyqa79Wk7oxt' };
        }
      }
    }
  });