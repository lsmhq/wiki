<template>
  <span
    class="subata-popover"
    @click="show"
    @mouseover="show"
    @mouseleave="hide"
  >
    <span class="subata-popover-img">
      <img :src="`/subata${src}`" />
    </span>
    <span>{{ text }}</span>
    <div
      v-show="visible"
      :class="`subata-popover-body ${
        isMobileAu ? 'subata-popover-body-app' : ''
      }`"
    >
      <div class="image">
        <div class="image-img">
          <img :src="`/subata${src}`" />
        </div>
        <div class="subata-popover-header">
          <div class="title">{{ title }}</div>
          <div class="desc">{{ desc }}</div>
        </div>
      </div>
      <div class="subata-popover-slot">
        <slot></slot>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      isMobileAu: false,
    };
  },
  props: {
    src: {
      type: String,
      default: "/images/empty.gif",
    },
    text: {
      type: String,
      default: "Subata",
    },
    trigger: {
      default: "hover",
    },
    title: {
      type: String,
      default: "Subata",
    },
    desc: {
      type: String,
      default: "Lsmhq~",
    },
  },
  methods: {
    show(e) {
      // console.log(e.type)
      if (this.$props.trigger === "hover") {
        this.$data.visible = true;
      }
      if (this.$props.trigger === "click") {
        this.$data.visible = !this.$data.visible;
      }
    },
    hide(e) {
      // console.log('leave')
      if (this.$props.trigger === "hover") {
        this.$data.visible = false;
      }
    },
  },
  created() {},
};
</script>

<style lang="scss">
.subata-popover {
  display: inline-flex;
  align-items: baseline;
  // justify-content: baseline;
  position: relative;
  height: 33px;
  .subata-popover-img {
    position: relative;
    top: 6px;
    img {
      width: 25px;
      // height: 100%;
      margin: 0 5px;
      border-radius: 5px;
    }
  }

  span {
    color: rgb(255, 102, 0);
  }

  .subata-popover-body {
    position: absolute;
    width: 350px;
    min-height: 100px;
    background: #d9f4e7;
    border-radius: 5px;
    z-index: 9999;
    top: 33px;
    left: 50%;
    transform: translateX(-45%);
    color: #00b55e;
    padding: 15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.126);
    border: 1px solid rgba(0, 128, 0, 0.187);
    .image {
      width: 100%;
      height: 60px;
      display: flex;
      .image-img {
        width: 65px;
        img {
          width: 65px;
          height: 100%;
          margin: 0 5px;
          border-radius: 5px;
          object-fit: cover;
        }
      }

      .subata-popover-header {
        width: 100%;
        height: 100%;
        padding-left: 15px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          color: rgb(0, 162, 11);
          font-size: 20px;
          overflow: hidden;
          white-space: nowrap;
        }
        .desc {
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
    .subata-popover-slot {
      padding-top: 10px;
    }
  }

  @media (max-width: 768px) {
    .subata-popover-body {
      width: 80vw;
    }
  }
}
</style>