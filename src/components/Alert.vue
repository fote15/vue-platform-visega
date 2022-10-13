<template>
  <div :class="{ error_notification: $store.state.alertModal==2 }" class="success_notification">
      {{$store.state.alertModalData}}
</div>
</template>
<script>
export default {
  name: "orderInfo",
  props: {
    msg: String,
  },
  methods: {
  },
  mounted(){
    setTimeout(()=>{
      this.$store.state.alertModal = false;

      
    },3000)
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order_modal .row {
  margin-bottom: 8px;
}
.error_notification{
  background-color: #dc3545!important;
}
.order_modal input {
  background: #e7e9ec;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
}
.order_modal {
  width: 850px;
  padding: 30px;
  position: absolute;
  top: 150px;
  z-index: 99999;
  left: 50%;
  transform: translateX(-50%);
  background: white;
}

.order_modal input {
  width: 100%;
}
</style>