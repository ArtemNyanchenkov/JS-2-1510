<template>
    <div class="catalog-page">
        <Breadcrumb />

        <div class="wrap center">
            <AsideMenu />
            <main class="main">
                <div class="catalog">
                    <SortForm />
                    <Catalog url="cat.json" cl="catalog-products" />
                    <Pagination />
                </div>
            </main>
        </div>
        <CatalogFeature/>
    </div>
</template>

<script>
import Breadcrumb from '@/components/shared/breadcrumb';
import SortForm from '@/components/catalog-page/sort-form';
import Catalog from '@/components/shared/catalog';
import AsideMenu from '@/components/catalog-page/aside-menu';
import Pagination from '@/components/catalog-page/pagination';
import CatalogFeature from '@/components/catalog-page/catalog-feature';
export default {
    components: {
        Breadcrumb,
        SortForm,
        Catalog,
        AsideMenu,
        Pagination,
        CatalogFeature
    },
};
</script>

<style scoped>
@import '../layout/css/catalog.css';
</style>
