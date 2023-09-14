
///To set a cookie, use cookies.set(name, value, options). 
//It's strongly recommended that you explicitly configure the path when setting a cookie, since browsers' default behaviour — somewhat uselessly — is to set the cookie on the parent of the current path.
//page.js - will run on server and the browser
//page.server.js - only run on the server in which you can access private env variables etc. 
export const prerender = true;

import { now } from 'svelte/internal';

export function load({ cookies }) {
	const visited = cookies.get('visited');
	const visitedTime = cookies.get('visistedTime');
	const vtime = cookies.get('vtime');

	var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    cookies.set('vtime', time, { path: '/' });

	cookies.set('visited', 'true', { path: '/' });
	cookies.set('visitedTime', now().toString(), { path: '/' });

	return {
		visited, vtime
	};
}

