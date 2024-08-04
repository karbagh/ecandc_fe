<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="project" dark elevation="24" data-aos="fade-up">
      <v-img
        class="white--text align-end"
        height="200px"
        :alt="project.title"
        :position="project.cover === 'covid19.png' ? 'top' : 'center'"
        :src="require(`@/assets/images/${project.cover}`)"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal hover-content"
          >
            <v-btn
              absolute
              class="ma-2 view-project"
              depressed
              rounded
              large
              color="black"
              elevation="0"
              @click.once="toggleModal"
            >
              View Project
            </v-btn>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="text--white">
        <h2 class="font-weight-black pb-2">{{ project.title }}</h2>
        <div class="pb-2 tech-stack">{{ project.techStack.join(', ') }}</div>
      </v-card-text>
      <Dialog
        :cover="project.cover"
        :description="project.description"
        :title="project.title"
        :tech-stack="project.techStack"
        :is-confidential="project.isConfidential"
        :dialog="dialog"
        @toggle="toggleModal"
      />
    </v-card>
  </v-hover>
</template>

<script>
import Dialog from '~/components/Project/Dialog.vue'

export default {
  components: {
    Dialog
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    toggleModal() {
      this.dialog = !this.dialog
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  cursor: pointer;
  max-width: 300px;
}

.hover-content {
  height: 100%;
}

.view-project {
  opacity: 1 !important;
  z-index: 2;
  color: white;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  background: #323030e0;
}

.tech-stack {
  height: 2.5rem;
}

.title {
  height: 3.25rem;
}

@media screen and (max-width: 767px) {
  .project {
    max-width: 100% !important;
  }
}
</style>
