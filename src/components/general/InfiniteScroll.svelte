<script>
    import { viewport } from '@utils';
	import { createEventDispatcher } from 'svelte';
        
    const dispatch = createEventDispatcher()
        const touchBottom = () => {
            dispatch("touchBottom")
        }
    
</script>
<div use:viewport on:enterViewport={touchBottom}>Loading</div>