<template>
  <div>
    <h2>
      <i class="fas fa-archive"></i>&nbsp;Archive
    </h2>
    <div class="list-panel">
      <div class="list-item" v-for="(item, index) in archiveList" :key="item.id">
        <div class="list-body">
          <span
            class="list-number num-done"
          >{{index+1}}</span>&nbsp;
          <span class="list-content">{{item.content}}</span>
          <span class="list-date">{{new Date(item.createDate).toDateString()}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Archive",
  props: ['archiveList']
};
</script>

<style>
</style>