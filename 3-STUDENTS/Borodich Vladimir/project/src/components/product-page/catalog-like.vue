<template>
  <section class="like center">
            <h2 class="like__h2">you may like also</h2>
<Catalog url="like.json" cl="like__content"/>
            <!-- <div id="like" class="like__content">
                <div style="width: 100%;font-size: 5rem;color: #eeeeee;text-align: center;"><i class="fas fa-spinner fa-spin"></i></div>
            </div> -->
        </section>
</template>

<script>
import Catalog from '@/components/shared/catalog';
export default {
    components: {
        Catalog,
    },
};
</script>

<style>

</style>