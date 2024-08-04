<template>
  <v-container id="skills" fluid class="skills portfolio-container">
    <div>
      <div class="section-title">{{ $t('skills.title') }}</div>
      <v-row no-gutters class="px-5">
        <v-col class="text-center px-4" cols="12" sm="4">
          <img
            alt="frontend"
            class="skill-img"
            src="@/assets/images/skills/construction.svg"
            data-aos="fade-up"
          />
          <div class="skill-title" data-aos="fade-up">
            {{ $t('skills.construction.title') }}
          </div>
          <div class="skill-description" data-aos="fade-up">
            {{ $t('skills.construction.description') }}
          </div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img
            alt="backend"
            class="skill-img"
            src="@/assets/images/skills/sketch.svg"
            data-aos="fade-up"
          />
          <div class="skill-title" data-aos="fade-up">
            {{ $t('skills.design.title') }}
          </div>
          <div class="skill-description" data-aos="fade-up">
            {{ $t('skills.construction.description') }}
          </div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img
            alt="mobileapp"
            class="skill-img"
            src="@/assets/images/skills/dialogue.svg"
            data-aos="fade-up"
          />
          <div class="skill-title" data-aos="fade-up">
            {{ $t('skills.consultation.title') }}
          </div>
          <div class="skill-description" data-aos="fade-up">
            {{ $t('skills.design.description') }}
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.skills {
  margin-top: 3rem;
  .skill-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  .skill-description {
    margin-bottom: 3.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .skill-img {
    height: 7rem;
  }
}
</style>
