<template>
  <v-container fluid class="about portfolio-container">
    <div id="about" class="px-4">
      <div class="section-title">{{ $t('about.title') }}</div>
      <div class="mb-6 text-center" data-aos="fade-up">
        <img class="me-img" src="@/assets/images/me.jpg" alt="About us" />
      </div>
      <div class="content" data-aos="fade-up">
        <p>{{ $t('about.paragraph') }}</p>
      </div>
      <div data-aos="fade-up">
        <Partners />
      </div>
    </div>
  </v-container>
</template>

<script>
import Partners from '~/components/Partners.vue'

export default {
  components: {
    Partners
  }
}
</script>

<style lang="scss" scoped>
.about {
  color: black;

  .content {
    padding: 0 3rem;

    p {
      font-size: 1.2rem;
      line-height: 150%;
    }
  }

  .quotes {
    margin: 2rem auto 0;
    font-size: 2rem;
    max-width: 50rem;
  }

  .me-img {
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    border: 2px solid rgb(54, 51, 51);
    object-fit: cover;
  }
}

@media screen and (max-width: 767px) {
  .content {
    padding: 0 !important;
  }
}
</style>
