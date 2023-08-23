// src/hooks.server.js

import { SvelteKitAuth } from '@auth/sveltekit';
import GoogleProvider from '@auth/core/providers/google';
import {
 GOOGLE_CLIENT_ID,
 GOOGLE_CLIENT_SECRET,
} from '$env/static/private';

export const handle = SvelteKitAuth({
 providers: [GoogleProvider({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })]
});


/*
'Hooks' are app-wide functions you declare that SvelteKit will call in response to specific events, giving you fine-grained control over the framework's behaviour.
There are two hooks files, both optional:
src/hooks.server.js — your app's server hooks
src/hooks.client.js — your app's client hooks

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.user = await getUserInformation(event.cookies.get('sessionid'));
   
    const response = await resolve(event);
    response.headers.set('x-custom-header', 'potato');
   
    return response;
  };*/