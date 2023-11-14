<template>
  <span
    class="subata-popover"
    @click="show"
    @mouseover="show"
    @mouseleave="hide"
  >
    <img :src="src" />
    <span>{{ text }}</span>
    <div v-show="visible" class="subata-popover-body">
      <img :src="src"/>
        <slot></slot>

    </div>
  </span>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
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
  created: () => {
    // console.log('popover created')
  },
};
</script>

<style lang="scss">
.subata-popover {
  display: inline-flex;
  align-items: baseline;
  // justify-content: baseline;
  height: 30px;
  position: relative;
  img {
    max-width: 25px;
    // height: 100%;
    margin: 0 5px;
  }
  span {
    color: rgb(0, 166, 243);
  }
  .subata-popover-body {
    position: absolute;
    width: 350px;
    min-height: 100px;
    background: #d9f4e7;
    border-radius: 5px;
    z-index: 9999;
    top: 30px;
    left: 50%;
    transform: translateX(-45%);
    color: #00b55e;
    padding: 15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.126);
    img {
        max-width: 55px;
        // height: 100%;
        margin: 0 5px;
        border-radius: 5px;
    }
  }
}
</style>