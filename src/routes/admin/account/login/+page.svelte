<script>
    import { account } from '$lib/appwrite';

    let email = '';
    let password = '';

    let loggedInUser = null;

    async function login(email, password) {
        await account.createEmailSession(email, password);
        loggedInUser = await account.get();
        location.reload();
    }
</script>

<div class="mb-6">
    <label for="email" class="block mb-2">Email</label>

    <input id="email" placeholder="uwu@example.com" bind:value={email} />
</div>

<div class="mb-6">
    <label for="password" class="block mb-2">Password</label>
    <input id="password" type="password" placeholder="uwuwuwuwuwuwuwuwuwuwu" bind:value={password} />
</div>

<button color="dark" on:click={() => login(email, password)}>Login</button>
<button color="secondary" on:click={() => alert("too bad i don't wanna implement this")}>Forgot Password?</button>

<p class="mt-6 mb-6 text-md lg:text-lg">
    {loggedInUser ? `Welcome back, ${loggedInUser.name}!` : ''}
</p>
