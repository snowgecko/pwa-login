import { writable } from 'svelte/store'
import { browser, dev, building, version } from '$app/environment';

/**
 * https://kit.svelte.dev/docs/modules - for $app/environment
 * First, we create a variable called persistedUser which has some ternary magic going on. 
 * The browser boolean comes from SvelteKit and gives us an easy way to check if we’re running on the \
 * Server or Client. This avoids undefined errors for Local Storage.
 * 
 */
let persistedUser = browser && localStorage.getItem('user')
export let user = writable(persistedUser ? persistedUser : '')

//JSON.parse(persistedUser)
if (browser) {
    user.subscribe(u => localStorage.user = u)
}