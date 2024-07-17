<template>
  <template v-for="(item, index) in post" : key="index">
    <article class="p-4 py-1">
      <div class="fs-2 fw-medium" v-html="item.titulo"></div>
      <div class="mb-3">
        <small>
          {{ item.cadastrado_em }} por {{ item.nome }}
        </small>
      </div>
      <p v-html="item.resumo" class="fs-5"></p>
    </article>
  </template>

</template>
<script>

import axios from 'axios';

export default {
  data() {
    return {
      post: []
    }
  },
  methods: {
    async buscar() {
      const resp = await axios.get('api/');
      this.post = resp.data;
    }
  },
  mounted() {
    this.buscar();
  }
}
</script>