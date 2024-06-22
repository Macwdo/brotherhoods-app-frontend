<!-- :items-length="totalItems" -->
<template>
  <v-data-table-server
    :page="page"
    :headers="headers"
    :items="items"
    :items-length="total"
    :loading="loading"
    @update:options="loadItems"
  ></v-data-table-server>
</template>

<script setup lang="ts">
import { api } from "@/api/api";
import { ref, watch } from "vue";

const props = defineProps<{
  url: string;
  search: string;
  headers: Array<any>;
}>();

const loading = ref(false);
const items = ref([]);
const pageSize = ref(10);
const page = ref(1);
const total = ref(0);

const loadItems = async ({
  page: pageNumber,
  itemsPerPage: perPage,
}: {
  page: number;
  itemsPerPage: number;
}) => {
  console.log(props.search);
  loading.value = true;
  const { data } = await api.get(`/${props.url}`, {
    params: {
      page: pageNumber,
      search: props.search,
      page_size: perPage,
    },
  });

  console.log(data);
  total.value = data.total;
  page.value = data.page;
  pageSize.value = data.page_size;
  items.value = data.results;
  loading.value = false;
};

watch(
  () => props.search,
  async (newSearch, oldSearch) => {
    if (newSearch !== undefined && newSearch !== null) {
      await loadItems({
        page: page.value,
        itemsPerPage: pageSize.value,
      });
    }
  }
);
</script>
