<template>
  <div class="technologies">
    <div class="technologies-title d-flex justify-center align-center my-3">
      {{ $t('about.partners.title') }}
    </div>
    <carousel :autoplay="true" :nav="false" :loop="true" :items="1">
      <div
        v-for="partner in partners"
        :key="partner.name"
        src="@/assets/images/me.jpg"
      >
        <v-card class="tech-card text--primary" flat>
          <v-row>
            <v-col
              v-for="item in partner.items"
              :key="item.name"
              cols="6"
              md="4"
            >
              <div class="tech">
                <img
                  class="technologies-logo"
                  :src="require(`@/assets/images/logos/partners/${item.image}`)"
                />
                <p>{{ item.name }}</p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </carousel>
  </div>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      partners: Constants.PARTNERS
    }
  }
}
</script>

<style lang="scss" scoped>
.technologies {
  .technologies-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin-top: 3rem;
  }
  .technologies-logo {
    height: 5rem;
    width: 5rem;
    object-fit: contain;
    margin: 2rem;
  }
  .tech-card {
    .tech {
      flex-direction: column;
      display: flex;
      align-items: center;
      background: #323030;
      border-radius: 4px;
      color: white;
    }
  }
  .heart {
    height: 2.4375rem;
  }
}
</style>
