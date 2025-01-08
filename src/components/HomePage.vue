<template>
    <HeroSlider />
    <CardMode />
    <MultiSlider />
</template>

<script>
import CardMode from './CardMode.vue';
import HeroSlider from './HeroSlider.vue';
import MultiSlider from './MultiSlider.vue';
export default {
    components: {
        HeroSlider,
        CardMode,
        MultiSlider
    }
}
</script>