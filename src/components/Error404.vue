<template>
    <div class="ml-5 mt-2 fill-height">
        <h1 class="error-title">{{ $t('error404') }}</h1>
        <h2 class="error-content">{{ $t('errorMsg') }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Error404"
    }
</script>

<style scoped>
    .error-title {
        color: red;
        font-size: 2.5em;
    }
    .error-content {
        font-size: 1.5em;
        margin: 0 0 4px 0;
        font-weight: 600;
    }
</style>
