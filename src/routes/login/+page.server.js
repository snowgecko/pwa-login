// src/routes/protected/+layout.server.js
//SvelteKit makes three readonly stores available via the $app/stores module — 
//page, navigating and updated. 
//The one you'll use most often is page, which provides information about the current page:
//url, params, route, status, errror, data, form 

import { page } from '$app/stores'; //tells us lots about the page we are on 
import { writable } from 'svelte/store';
import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
    const session = await event.locals.getSession();
    console.log(session);
    if (!session) {
        throw redirect(307, 'auth/signin');
    }

    return {
        session
    };
}
