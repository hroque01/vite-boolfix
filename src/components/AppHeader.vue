<script>
export default {
    name: "AppHeader",
    props: ["title"]
}
</script>

<template>
    <h1>
        {{ title }}
    </h1>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;
</style>