<template>
<div class="card mt-5 mb-5">
  <div class="card-header">
    <h5>{{news.name}}</h5>
  </div>
  <div class="card-body">
    <p>{{news.desc}}</p>
  </div>
  <div class="card-footer">
    <i>{{news.date}}</i>
  </div>
</div>
</template>

<script>
export default {
  props: {
    news: {
    }
  }
}
</script>

<style>

</style>