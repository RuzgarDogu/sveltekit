<script>
        import { viewport } from '@utils';
        const asdf = () => {
        console.log("intersecting")
    }
</script>
<div use:viewport on:enterViewport={asdf}>Loading</div>