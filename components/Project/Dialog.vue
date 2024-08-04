<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    max-width="500"
    @input="$emit('toggle')"
  >
    <v-card class="project-modal">
      <div class="close-btn" @click="$emit('toggle')">
        <v-icon>mdi-close</v-icon>
      </div>
      <v-img
        height="200"
        cover
        :alt="title"
        :position="cover === 'covid19.png' ? 'top' : 'center'"
        :src="require(`@/assets/images/${cover}`)"
      ></v-img>
      <v-card-title>{{ title }} </v-card-title>
      <v-card-text>
        <p>
          <v-chip
            v-for="tech in techStack"
            :key="tech"
            small
            class="mr-2"
            label
          >
            {{ tech }}
          </v-chip>
        </p>
        <p class="description">{{ description }}</p>
        <div v-if="isConfidential" class="pb-4 isConfidential">
          {{ $t('portfolio.project.isConfidential') }}
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    cover: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    techStack: {
      type: Array,
      required: true
    },
    isConfidential: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    alertM() {
      alert(65454654)
    }
  }
}
</script>

<style scoped lang="scss">
.project-modal {
  background: #323030;
  position: relative;
  color: white;
}
.description {
  color: white;
}
.isConfidential {
  color: yellow;
}
.close-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1;
  height: 30px;
  cursor: pointer;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #323030;
}
</style>
