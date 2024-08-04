<template>
  <v-parallax
    height="200"
    :src="require('@/assets/images/hire-me.jpg')"
    alt="Hire me"
  >
    <div class="d-flex hire-me px-4 hire-me-content">
      <div class="content">
        <div class="help" data-aos="fade-right">
          We are open to collaborating for your upcoming projects!
        </div>
      </div>
    </div>
  </v-parallax>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      mail: Constants.HIRE_ME
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-parallax__image {
  object-fit: cover;
}

::v-deep .v-parallax__content {
  background-color: #2320204a;
  padding: 0 !important;
}
.hire-me-content {
  margin-left: 20%;
}
.hire-me {
  .help {
    text-align: left;
    font-size: 1.5em;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 767px) {
  .hire-me-content {
    margin-left: 0 !important;
  }
}
</style>
