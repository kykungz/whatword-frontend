<template lang="html">
  <div>
<div class="form-group">
    <div class="row">
      <div class="col-6">
        <h4>Word Bank:</h4>
      </div>
      <div class="col-6 text-right">
        <h4>{{ words.length }} Words</h4>
      </div>
    </div>
    <textarea :value="textArea" @input="onWordsChange" placeholder="Insert your words here" class="form-control" rows="18" />
  </div>
  <div class="d-flex align-items-center justify-content-between mb-2">
    <h4 class="mb-0">Color:</h4>
    <div class="preview-color" :style="{ background: color }" />
  </div>
  <div class="d-flex align-items-center justify-content-between">
    <div class="d-flex">
      <div
        v-for="tempColor in colors"
        :key="tempColor" 
        @click="onColorChange(tempColor)"
        :class="['color', { 'selected': tempColor === this.color }]"
        :style="{ background: tempColor }"
      />
    </div>
    <input
      class="ml-2 w-25 text-right form-control"
      placeholder="#000000"
      size="4"
      :value="color"
      @input="onColorChange($event.target.value)"
    />
  </div>
  </div>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      required: true,
      default: []
    },
    color: {
      type: String,
      required: true,
      default: '#fc5c65'
    }
  },
  data () {
    return {
      textArea: this.words.join('\n'),
      colors: [
        '#fc5c65',
        '#fd9644',
        '#fed330',
        '#26de81',
        '#45aaf2',
        '#3867d6',
        '#a55eea',
        '#d1d8e0',
        '#4b6584'
      ]
    }
  },
  methods: {
    forceUpdate (words) {
      this.textArea = words.join('\n')
    },
    onColorChange (color) {
      this.$emit('colorChange', color)
    },
    onWordsChange (event) {
      this.textArea = event.target.value
      this.$emit('wordsChange', this.textArea.split('\n').filter((word) => word.trim() !== ''))
    }
  }
}
</script>

<style scoped>
.color {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  border: thin solid white;
  transition: all 300ms;
}

.preview-color {
  width: 100%;
  height: 30px;
  margin-left: 1em;
  border-radius: 4px;
  transition: all 300ms;
}

.color:hover {
  border: thin solid #2e2e2e;
}

.selected {
  border: thin solid #2e2e2e;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
}

.color + .color {
  margin-left: .25em;
}
</style>
