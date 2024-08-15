<template>
  <v-parallax
    height="100vh"
    :src="require('@/assets/images/background.jpg')"
    alt="Banner"
  >
    <!-- TODO: add v-waypoint="{ active: true, callback: onWaypoint }" -->
    <v-container id="home" fluid class="text-center home">
      <div class="banner-wrapper">
        <div
          class="banner d-flex justify-center align-center rellax flex-column"
        >
          <div class="full-name">
            <img
              :src="require('@/assets/images/logos/logo.svg')"
              class="company-logo"
              alt="EC&C"
            />
          </div>
          <vue-typed-js
            class="justify-center"
            :loop="true"
            :type-speed="35"
            :back-speed="35"
            :strings="$t('home.search.slogans')"
          >
            <div class="sub-text">
              <span>{{ $t('home.search.we') }}</span>
              <span class="typing font-weight-bold" />
              <img
                :src="require('@/assets/images/searchIcon.svg')"
                alt="Search"
                class="search-icon"
              />
            </div>
          </vue-typed-js>
        </div>
        <div class="scroll-gif">
          <img alt="scroll" src="@/assets/images/scroll.gif" />
        </div>
      </div>
    </v-container>
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
  height: 100%;
  display: block;
  opacity: 1;
  filter: blur(1.5px);
}

.home {
  height: 100vh;

  .full-name {
    color: #0000006e;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 7rem;
    height: 11rem;
    @media screen and (max-width: 767px) {
      height: 5.58rem;
    }
  }

  .company-logo {
    max-height: 100%;
  }

  .scroll-gif {
    position: absolute;
    bottom: 2rem;
    width: 100%;

    img {
      height: 5.625rem;
    }
  }

  .banner-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .banner {
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  .sub-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: white;
    color: black;
    padding: 15px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    @media screen and (max-width: 767px) {
      font-size: 0.58rem;
    }
  }

  .banner-wrapper {
    position: relative;
    height: 100%;
  }

  @media screen and (max-width: 767px) {
    .full-name {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
}
</style>
