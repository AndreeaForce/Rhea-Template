<template>
  <div class="video-background">
    <video v-bind:poster="options.poster" v-bind:autoplay="options.autoplay" v-bind:loop="options.loop">
      <source v-for="(value, type) in source" :src="value" v-bind:type="'video/' + type">
    </video>
    <div class="video-controls">
      <span v-bind:text="time"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-video-background',
  data() {
    return {
      time: null
    }
  },
  props: {
    source: {
      type: Object,
      required: true,
      validator: (value) => {
        // TODO: validate for at least 1 required prop
        return true
      }
    },
    options: {
      type: Object
    }
  },
  created() {
    // Allowed video source types
    this.sourceTypes = ['mp4', 'webm', 'ogg']
  },
  mounted() {
    // Video native events to listen
    const publicEvents = [
      'abort',
      'canplay',
      'error',
      'ended',
      'play',
      'pause',
      'progress',
      'ratechange',
      'volumechange'
    ]
    const privateEvents = {
      'timeupdate': (e) => {
        this.time = e.timeStamp.toFixed(2)
      }
    }
    // Get the rendered video element
    this.videoEl = this.$el.getElementsByTagName('video')[0]
    // Forward video native events to component emit
    publicEvents.forEach((event) => {
      this.videoEl.addEventListener(event, (e) => this.$emit(event, e, this.videoEl))
    })
    // Bind the private events
    for (var event in privateEvents) {
      if (privateEvents.hasOwnProperty(event)) {
        const callback = privateEvents[event]
        this.videoEl.addEventListener(event, callback)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
video {
    position: fixed;
    height: 100vh;
    min-width: 100%;
    top: 0;
    left: 0;
}
.video-background {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
}
</style>