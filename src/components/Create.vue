<template lang="html">
  <div>
    <div class="container">
      <h1 class="text-center">What Word is it ?</h1>
      <hr>
      <div class="content">
        <div style="height: 100%;"class="form-group">
           <div class="row">
             <div class="col-6">
               <h4>Word Bank:</h4>
             </div>
             <div class="col-6 text-right">
               <h4>{{ count }} Words</h4>
             </div>
           </div>
           <textarea v-model="textArea" class="form-control" rows="20"></textarea>
        </div>
        <button style="width:100%;" class="btn btn-warning btn-lg">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textArea: ''
    }
  },
  computed: {
    count () {
      let wordBank = this.textArea.split('\n').filter((word) => {
        return word.trim() !== ''
      })
      return wordBank.length
    }
  }
}
</script>

<style scoped>
</style>
