<script lang="ts">
  import { page } from '$app/stores';

  export let data;

</script>
  
  <h1>Public</h1>
  
  {#if data.session.user.name }
  <a href="/protected">protected route</a>
  You are currently logged in as : {data.session.user.name}
  Protected content   
  {:else}
  <a href="/login">login route</a>
  <p>
    <a href="/auth/signin">
      You must be signed in to view this page
    </a>
  </p>
{/if}