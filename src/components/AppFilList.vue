<script>
import { store } from '../store.js';

export default {
    name: "AppListMovie",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div>
                <!-- template di film singola -->
                <div class="text-center">
                    <img src="" alt="">
                    <h4>nome</h4>
                    <div>stato</div>
                    <div>specie</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
</style>