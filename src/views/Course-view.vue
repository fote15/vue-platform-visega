<template>
  <section class="main__content">
    <!-- body main area start  -->
    <div v-if="this.data.length > 0">
      <div v-bind:key="x.id" v-for="x in data" class="single_item_area">
        <div v-if="x.position == $route.params.lesson">
          <img
            class="img_prevv"
            @click="goPrev"
            v-if="$route.params.lesson !== '1'"
            src="@/assets/img/banner/left.png"
            alt=""
          />
          <img
            class="img_next"
            @click="goNext"
            v-if="data.length > $route.params.lesson - 0"
            src="@/assets/img/banner/right.png"
            alt=""
          />
          <div class="cur_select d-none d-md-block">
            <div
              v-bind:key="x.id"
              v-for="x in data"
              class="bb_1"
              @click="
                this.$router.push(
                  '/course-view/' + this.$route.params.id + '/' + x.position
                )
              "
            >
            Лекция {{ x.position }}
            </div>
          </div>

          <h1 class="cur_select_title d-none d-md-block">
            Лекция {{ x.position }}
          </h1>

          <video class="vidos" controls>
            <source :src="x.video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div class="open_ques">
        <h2 @click="openquestions(data[$route.params.lesson - 0 - 1].id)">
          ВЫПОЛНИТЬ <br />
          ЗАДАНИЕ
        </h2>
        <h1 style="text-align: right">
          {{ data[$route.params.lesson - 0 - 1].answered_count }}/{{
            data[$route.params.lesson - 0 - 1].question_count
          }}
        </h1>
      </div>
    </div>
    <!-- body main area End  -->
  </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

import carousel from "vue-owl-carousel";

export default {
  name: "Home",
  components: {
    carousel,
  },
  methods: {
    goNext() {
      this.$router.push(
        "/course-view/" +
          this.$route.params.id +
          "/" +
          (this.$route.params.lesson - 0 + 1)
      );
    },
    goPrev() {
      this.$router.push(
        "/course-view/" +
          this.$route.params.id +
          "/" +
          (this.$route.params.lesson - 1)
      );
    },
    openquestions(e) {
      this.$router.push("/questions/" + e);
    },
    getActive() {},
    openCourse(e) {
      this.$router.push("/course-view/" + e);
    },
    initialized() {},
    logout() {
      localStorage.clear();
      this.$store.state.username = null;
      this.$router.push("/login");
    },
    scrollToCur() {
      this.$router.push("/");
      this.$store.state.scrolerCur = true;
      document.getElementById("courses").scrollIntoView();
    },
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    axios
      .post(
        "https://education-api.gnt-it.ru/v1/lesson/course-list",
        {
          courseId: this.$route.params.id,
        },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      )
      .then((response) => {
        this.data = response.data.data;

        return false;

        localStorage.setItem("token", response.data.user.token);

        this.$store.state.token = response.data.user.token;
        this.$router.push("/");
      })
      .catch((error) => {
        this.login_error = true;
      });
    axios
      .post(
        "https://education-api.gnt-it.ru/v1/question/list",
        {
          lessonId: 2,
        },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      )
      .then((response) => {})
      .catch((error) => {});

    /* this.$router.push('/login')
    if(!this.$store.state.token){
      this.$router.push('/login')
    }*/
  },
};
</script>
<style scoped>
@media only screen and (max-width: 1000px) {
  .open_ques {
    padding: 0  30px!important;
  }
  .open_ques h2{
    font-size: 45px!important;
  }
  .open_ques{
    min-height: 220px!important;
  }
   .open_ques h1{
    font-size: 140px!important;
  }
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}

.bb_1 {
  border-bottom: 1px solid white;
  line-height: 80px;
}
.bb_1:hover {
  cursor: pointer;
}
.cur_select:hover {
  opacity: 1;
}

.cur_select {
  opacity: 0;
  transition: all ease 0.3s;

  padding: 20px;
  border-radius: 5px;
  font-family: "Amsterdam Deco One";
  font-size: 90px;
  position: absolute;
  width: 300px;
  height: 200px;
  overflow-y: scroll;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.3);
  bottom: 130px;
  right: 150px;
}

.cur_select_title:hover {
  opacity: 1;
}

.cur_select_title {
  opacity: 0;
  transition: all ease 0.3s;

  padding: 20px;
  border-radius: 5px;
  font-family: "Amsterdam Deco One";
  font-size: 90px;
  position: absolute;
  width: 300px;
  height: 100px;
  z-index: 9999;
  bottom: 50px;
  right: 150px;
}

.img_prevv {
  position: absolute;
  left: 20px;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
  width: 60px;
}

.img_next {
  width: 60px;
  z-index: 2;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

@font-face {
  font-family: "Amsterdam Deco One";
  src: local("Amsterdam Deco One"),
    url("@/assets/fonts/AmsterdamDecoOne.woff") format("truetype");
}

.vidos {
  width: 100%;
  max-height: 500px;
  background-color: black;
}
.open_ques {
  justify-content: space-between;
  display: flex;
  align-items: center;

  padding: 15px 150px;
  min-height: 400px;
  background-image: url("@/assets/img/coursebg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.open_ques h2 {
  cursor: pointer;
  font-size: 100px;
}
.open_ques h1 {
  font-size: 400px;
  font-family: "Amsterdam Deco One" !important;
}
.single_item_area {
  position: relative;
}
.single_item_area img {
  cursor: pointer;
}
</style>