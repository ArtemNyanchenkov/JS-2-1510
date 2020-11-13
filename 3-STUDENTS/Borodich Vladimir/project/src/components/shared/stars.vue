<template>
    <div :class="cl">
        <i :class="[value > '0' ? 'fas' : 'far', value === '0.5' ? 'fa-star-half-alt' : 'fa-star']"></i>
        <i :class="[value > '1' ? 'fas' : 'far', value === '1.5' ? 'fa-star-half-alt' : 'fa-star']"></i>
        <i :class="[value > '2' ? 'fas' : 'far', value === '2.5' ? 'fa-star-half-alt' : 'fa-star']"></i>
        <i :class="[value > '3' ? 'fas' : 'far', value === '3.5' ? 'fa-star-half-alt' : 'fa-star']"></i>
        <i :class="[value > '4' ? 'fas' : 'far', value === '4.5' ? 'fa-star-half-alt' : 'fa-star']"></i>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        cl:String
    },
};
</script>

<style></style>
