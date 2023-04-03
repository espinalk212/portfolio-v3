<script setup>
  const cards = [
    {
      id: 1,
      title:'My Hobbies',
      content: 'I love to code, play and watch sports',
      icon: 'fa-solid fa-hat-wizard',
    },
    {
      id: 2,
      title: 'My Journey',
      content: 'How I got here',
      icon: 'fa-solid fa-basketball'
    },
    {
      id: 3,
      title: "What I am looking for",
      content: "something, something blahhhhh",
      icon: 'fa-solid fa-glasses'
    },
    {
      id: 3,
      title: "Work Experience",
      content: "something, something blahhhhh",
      icon: 'fa-solid fa-briefcase'
    }
  ]
</script>
<template>
  <div
    v-for="card in cards"
    :key="card.id"
    class="c-info-card--container"
  >
    <a-card :title="card.title">
      <template #extra>
        <font-awesome-icon :icon="card.icon"/>
      </template>
      <div >
        <p class="text-slate-700">{{ card.content }}</p>
      </div>
    </a-card>
  </div>
</template>
<style lang="pcss"  >
.c-info-card--container {
  .ant-card {
    margin-bottom: 10px !important;
    border-radius: 8px !important;
    border: 1px solid black !important;
  }
}

</style>
