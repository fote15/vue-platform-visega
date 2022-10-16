<template>
  <div class="start_anim_wrap">
    <div>
      <h3>школа свободной общественной мысли</h3>
      <h1><span style="opacity:0">0</span>ВОЗРОЖДЕНИЕ</h1>
      <h2>победа любит подготовку</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "orderInfo",
  props: {},
  methods: {},
  mounted() {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start_anim_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  z-index: 99;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,1);

}

@keyframes text1 {
  0% {
    letter-spacing: 700px;
    opacity: 0;
    transform: scale(1);
  }
  100% {
    letter-spacing: 0px;
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes text2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes text3 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes textcolor {
  0% {
    background-color: rgba(0,0,0,1);
  }
  100% {
    background-color: rgba(0,0,0,0);
  }
}


@keyframes dnone {
  0% {
    height: 100vh;
  }
  100% {
    height: 0vh;
  }
}





.start_anim_wrap h1{
  margin-left: -20px;
  color: #D4B07C;
  font-size: 90px;
  letter-spacing: 700px;
  animation: text1 4s ease-out 0s none ;
  animation-fill-mode: forwards;
}
.start_anim_wrap{
  animation: textcolor 2s linear 3.5s none,text3 2s linear 5s none,dnone 0s linear 0s none;
  animation-fill-mode: forwards;
}


.start_anim_wrap h2{
  opacity: 0;
  animation: text2 1s linear 3s none ;
  animation-fill-mode: forwards;
}

.start_anim_wrap h2{
  font-family: 'Amsterdam Deco One';
}
.start_anim_wrap h3{
  font-family: 'Amsterdam Deco One';
}





</style>