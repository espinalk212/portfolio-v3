<script setup>
import ProjectCard from '@/components/ProjectCard.vue'
</script>
<template>
  <div>
    <h1 class="text-lg font-bold text-center">In my time learning Software Engineering I have been a part of several projects, the majority of my learning has been through my experience in the role but some of these projects can be found here:</h1>
    <div>
      <ProjectCard
        title="ViewFlix"
        description="A Netflix clone that implements a Rails backend and Reactjs / Redux frontend with movie trailers hosted on AWS"
        source="https://github.com/espinalk212/ViewFlix/wiki"
      />
      <ProjectCard
        title="Players Club"
        description="Fetches live sports using SportRadar API and shows the user scores and articles based on their sports and team preferences"
        source="https://github.com/espinalk212/playersclub"
      />
      <ProjectCard
        title="The Real Goat"
        description="Data visualization chart built using pure JavaScript and d3.js library that compares stats between Michael Jordan and Lebron James"
        source="https://github.com/espinalk212/the_real_goat"
        site="https://espinalk212.github.io/the_real_goat/"
      />
      <ProjectCard
        title="Trivia Challenge"
        description="A fun trivia web app created with React and Material-UI icons, with data provided by Tandem for the Software Engineer Apprenticeship Coding Challenge"
        source="https://github.com/espinalk212/trivia-challenge"
        site="https://espinalk212.github.io/trivia-challenge/"
      />
    </div>
  </div>
</template>

<style>
</style>
