<template>
  <section class="not-found-root">
    <div class="not-found overflow-hidden">
      <div class="wrap">
        <img :src="img404" alt="404" />
        <div class="text">
          <img :src="imgTips" alt="Not Found" />
          <strong>
            <x-link to="/" replace>
              {{ language.notFound.toHomePage }}
            </x-link>
            <a href="javascript:history.back()">
              {{ language.notFound.toPrevPage }}
            </a>
          </strong>
        </div>
      </div>
      <div class="below"></div>
    </div>
  </section>
</template>

<script>
import { Wave } from 'jparticles'
import { getClientWidth } from '@/utils/dom'
import img404 from './images/404.png'
import imgTips from './images/tips.png'
import { mapState } from 'vuex'

export default {
  name: 'NotFound',
  data() {
    return {
      img404,
      imgTips,
    }
  },
  computed: {
    ...mapState(['language']),
  },
  mounted() {
    this.i1()
  },
  methods: {
    i1() {
      new Wave(
        '.not-found .below',
        Object.assign(
          {
            num: 3,
            lineColor: [
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.7)',
              'rgba(255, 255, 255, 0.9)',
            ],
            lineWidth: [0.6, 0.8, 1],
            crestHeight: [8, 12, 16],
            offsetLeft: [2, 1, 0],
            offsetTop: 18,
            crestCount: 3,
            speed: 0.07,
          },
          this.getOptions()
        )
      )
    },
    getOptions() {
      const clientWidth = getClientWidth(window)

      if (clientWidth <= 1024 && clientWidth > 414) {
        return {
          crestHeight: [6, 10, 14],
          offsetTop: 0.5,
          crestCount: 2,
        }
      }

      if (clientWidth <= 414) {
        return {
          crestHeight: [4, 8, 12],
          offsetTop: 0.5,
          crestCount: 1,
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.not-found {
  width: 100vw;
  height: 100vh;
  background-color: $green;
  position: relative;

  &::selection {
    background: none;
  }

  .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
  }

  .text {
    text-align: center;
    padding-top: 20px;
    > img {
      width: 128px;
      height: 29px;
    }
    strong {
      display: inline-block;
      font-size: 14px;
      font-weight: normal;
      * {
        float: left;
      }
    }
    a {
      line-height: 14px;
      margin: 1px 0 0 10px;
      padding: 6px 14px;
      border: 1px solid #fff;
      border-radius: 14px;
      color: #fff;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      transition: 0.2s ease-out;
      &.active,
      &:hover {
        background: #fff;
        color: $root-text-color;
      }
    }
  }

  .below {
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
  }
}

@media all and (max-width: 415px) {
  .not-found {
    .wrap {
      width: 250px;
      > img {
        width: 100%;
      }
    }
    .text {
      strong {
        padding-top: 15px;
      }
      a:nth-of-type(1) {
        margin-left: 0;
      }
    }
  }
}
</style>
