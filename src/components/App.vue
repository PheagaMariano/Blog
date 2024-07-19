<template>
  <template v-for="(item, index) in post" : key="index">

    <!-- NAVBAR -->


    <nav class="navbar navbar-expand-lg p-3 navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand " href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>



    <!-- Termino do NAVBAR -->



    <!-- Começo do conteúdo principal -->


    <section class="m-5 px-5">
      <div class="m-5 px-5">
        <article class="m-5 px-lg-5 paddingArticle">
          <div class="fs-2 fw-medium" v-html="item.titulo"></div>
          <div class="mb-3">
            <small>
              {{ item.cadastrado_em }} por <a href="#">{{ item.nome }}</a>
            </small>
          </div>
          <p v-html="item.resumo" class="fs-5"></p>
          <a class="infoMore" href="#">Consulte mais informações
            <i class="bi bi-chevron-right"></i>
          </a>
        </article>
      </div>
    </section>


    <!-- main container -->


    <section>
      <div class="m-5 px-5">
        <div class="m-5 px-5">
          <main class="m-5 px-5">
            <h2>Robô para Máquina de Injeção</h2>
            <div class="col">
              <div class="mt-5 imgCenter">
                <img class="img-fluid"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjz7a98AI6tu2mWWozV6_Age_qhegMKUB2zw&s">
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>


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

<style src="/src/components/style.css" />