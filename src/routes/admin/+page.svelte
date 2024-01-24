<script async>
    import { account } from '$lib/appwrite';
    let user = null;

    async function tryMe() {
        try {
            user = await account.get().name;
        } catch {}
    }
    tryMe();
</script>

<h1>logged in as {user}</h1>
