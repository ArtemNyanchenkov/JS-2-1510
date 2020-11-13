<template>
    <div>
        <ComponentOne />
        <component-one />
    </div>
</template>

<script>
// import ComponentOne

export default {
    // data: {} для компонентов это не верно
    data() {
        return {
            
        }
    },
    components: { ComponentOne }, //для дочерних компонентов
    // props: []
    props: {  } //свойства, передаваемые извне (внутри компонента их менять нельзя)

}
</script>

<style>

</style>