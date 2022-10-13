<template>
  <section class="main_con">
    <section class="registration_main_area registration_main_area1">
      <div class="container">
        <h1 v-if="no">Спасибо, все вопросы в курсе уже отвечены!</h1>
        <div
          class="registration_main_text"
          v-for="ques in data"
          v-bind:key="ques.id"
         >
        
          <div v-if="active_q === ques.position">
            <div class="row pb-5">
              <div class="col-md-8">
                <div class="registration_headerTop_single">
                  <h3>ВОПРОС {{ ques.position }}</h3>
                  <h5 class="error_msg" v-if="error_msg">{{ error_msg }}</h5>
                  <p class="am">
                    {{ ques.text }}
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  @click="next_q"
                  style="cursor: pointer"
                  class="
                  d-none d-md-block
                    registration_headerTop_single
                    registration_headerTop_single_left
                    
                  "
                >
                  <a>Следующий Вопpос </a>
                </div>
              </div>
            </div>

            <div class="row gy-4 gx-5" v-if="ques.type === 1">
              <div
                class="col-md-6 col-lg-5"
                v-bind:key="x.id"
                v-for="x in ques.answer"
              >
                <label
                  :class="{
                    active_label_green: x.right && answered,
                    active_label_red: answers_text === x.text && answered,
                    active_label: answers_text === x.text && !answered,
                  }"
                >
                  <input
                    type="radio"
                    :value="x.text"
                    v-model="answers_text"
                    :disabled="answered"
                  />
                  {{ x.text }}
                </label>
              </div>
            </div>
            <div class="row gy-4 gx-5" v-if="ques.type === 3">
              <div class="col-md-6 col-lg-5">
                <div v-bind:key="x.id" v-for="x in ques.answer.first">
                  <label >
                    <input
                      type="radio"
                      :value="x.text"
                      v-model="answers_text"
                    />
                    {{ x.text }}
                  </label>
                </div>
              </div>

              <div class="col-md-6 col-lg-5">
                <div v-bind:key="x.id" v-for="(x, index) in ques.answer.second">
                  <select
                    name=""
                    v-model="checkedNames[x.id]"
                    id=""
                    :class="{
                      active_label_green:
                        ((ques.answer.first[index].id-0+1) == (checkedNames[x.id] ? (checkedNames[x.id].charAt(0)-0+1): '')&& answered),
                      active_label_red: answers_text === x.text && answered,
                    }"
                  >
                    <option
                      :value="x.first_id + x.text"
                      v-bind:key="x.id"
                      v-for="x in ques.answer.second"
                    >
                      {{ x.text }} {{  }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row gy-4 gx-5" v-if="ques.type === 2">
              <div
                class="col-md-6 col-lg-5"
                v-bind:key="x.id"
                v-for="x in ques.answer"
              >
                <label
                  :class="{
                    active_label_green: x.right && answered,
                    active_label_red: checkedNames.includes(x.text) && answered,
                    active_label: checkedNames.includes(x.text) && !answered,
                  }"
                >
                  <input
                    type="checkbox"
                    :value="x.text"
                    v-model="checkedNames"
                    :disabled="answered"
                  />
                  {{ x.text }}
                </label>
              </div>
            </div>

            <div class="row gy-4 gx-5" v-if="ques.type === 4">
              <div
                class="col-md-6 col-lg-5"
                v-bind:key="x.id"
                v-for="x in ques.answer"
              >
                <label
                  :class="{
                    active_label_green:
                      x.position == checkedNames.indexOf(x.text) + 1 &&
                      answered,
                    active_label_red:
                      x.position !== checkedNames.indexOf(x.text) + 1 &&
                      answered,
                    active_label: checkedNames.includes(x.text) && !answered,
                  }"
                >
                  <input
                    type="checkbox"
                    :value="x.text"
                    v-model="checkedNames"
                    :disabled="answered"
                  />
                  <span v-if="checkedNames.includes(x.text)"
                    >{{ checkedNames.indexOf(x.text) + 1 }}:
                  </span>
                  {{ x.text }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div
                  @click="next_q"
                  style="cursor: pointer"
                  class="
                  d-block d-md-none
                    registration_headerTop_single
                    registration_headerTop_single_left
                    registration_headerTop_single_left_mob

                  "
                >
                  <a>Следующий Вопpос </a>
                </div>

      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      checkedNames: [],
      answers_text: false,
      active_q: 1,
      ans_2: [],
      data: [],
      selectedOs: false,
      error_msg: false,
      answers_ar: [],
      andwers_check: [],
      currectCount: 0,
      answered: false,
      no: false,
    };
  },
  mounted() {
    this.active_q = 1;
    setInterval(() => {
      console.log("checkedNames");
      console.log(this.checkedNames);
    }, 3000);
    /*  for (let i = 0; i < 10; i++) {  
        this.answers_ar[2] =[ {checked: false},{checked: false},{checked: false},{checked: false},{checked: false}  ];
        console.log(this.answers_ar)
   }   */
    if (this.$route.params.id) {
      axios
        .post(
          "https://education-api.gnt-it.ru/v1/question/list",
          {
            lessonId: this.$route.params.id,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        )
        .then((response) => {
          this.data = response.data.data;
          for (let i in this.data) {
            if (this.data[i].answered_status) {
              this.active_q++;
            }
          }
          if (active_q>data.length){
            this.no = true;
          }
        })
        .catch((error) => {
          this.login_error = true;
        });
    }
  },
  methods: {
    setChecked(ques, id) {
      this.andwers_check[id] = true;
      this.andwers_check.$set(id, true);

      return true;
      console.log("ques");
      console.log(ques);
      console.log(id);
      console.log(this.answers_ar[ques][id]);
      console.log("ques");

      this.answers_ar.map((value, index) => {
        if (ques === index) {
          console.log(index);
          console.log(id);
          console.log("getr");
          console.log(this.answers_ar[index]);
          console.log(this.answers_ar[index][id]);
          console.log(this.answers_ar[index][id].checked);
          this.answers_ar[index][id].checked = true;
        }
      });

      //this.answers_ar[ques][id] = {checked: true}
    },
    next_q() {
      let q = [];

      if (this.data[this.active_q - 1].type === 1) {
        if (!this.answers_text) {
          this.error_msg = "Пожалуйста укажите ответ";
          setTimeout(() => {
            this.error_msg = false;
          }, 3000);
          return true;
        }
        q[0] = {
          question_id: this.data[this.active_q - 1].id,
          answer: [this.answers_text],
        };
      }

      if (this.data[this.active_q - 1].type === 2) {
        if (this.checkedNames.length < 1) {
          this.error_msg = "Пожалуйста укажите ответ";
          setTimeout(() => {
            this.error_msg = false;
          }, 3000);
          return true;
        }
        q[0] = {
          question_id: this.data[this.active_q - 1].id,
          answer: this.checkedNames,
        };
      }

      if (this.data[this.active_q - 1].type === 4) {
        if (
          this.checkedNames.length !==
          this.data[this.active_q - 1].answer.length
        ) {
          this.error_msg = "Пожалуйста укажите ответ";
          setTimeout(() => {
            this.error_msg = false;
          }, 3000);
          return true;
        }
        q[0] = {
          question_id: this.data[this.active_q - 1].id,
          answer: this.checkedNames,
        };
      }

      if (this.data[this.active_q - 1].type === 3) {
        if (
          this.checkedNames.length - 1 !==
          this.data[this.active_q - 1].answer.first.length
        ) {
          this.error_msg = "Пожалуйста укажите ответ";
          setTimeout(() => {
            this.error_msg = false;
          }, 3000);
          return true;
        }
        let ar = [];
        for (let x in this.checkedNames) {
          if (x === 0) {
            x++;
          }
          console.log(this.checkedNames[x]);
          ar[x - 1] = {
            left: this.data[this.active_q - 1].answer.first[x - 1].text,
            right: this.checkedNames[x],
          };
        }

        q[0] = {
          question_id: this.data[this.active_q - 1].id,
          answer: ar,
        };
      }
      console.log("q");
      console.log(q);

      axios
        .post(
          "https://education-api.gnt-it.ru/v1/question/create",

          q,
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        )
        .then((response) => {
          if (this.active_q === this.data.length) {
            axios
              .post(
                "https://education-api.gnt-it.ru/v1/question/finish",
                {
                  lessonId: this.$route.params.id,
                },
                {
                  headers: {
                    Authorization: `Bearer ${this.$store.state.token}`,
                  },
                }
              )
              .then((response) => {
                this.$store.state.percent = response.data.data.percent;
              })
              .catch((error) => {});

            this.$router.push("/finish/");
          }

          if (this.answered) {
            this.answers_text = false;
            this.active_q++;
            this.checkedNames = [];
            this.answered = false;
          } else {
            this.answered = true;
          }
        })
        .catch((error) => {});

      /*
          for (let x in this.data[this.active_q-1].answer){
           if(this.data[this.active_q-1].answer[x].right ===1) {
            if(this.data[this.active_q-1].answer[x].text === this.answers_text){
              this.currectCount++;
            }
           }
          }

      if(this.active_q===this.data.length){
        this.$store.state.currentAnsPercent = parseInt((this.currectCount/this.data.length)*100);
        this.$router.push('/finish')
      }

      if(this.data[this.active_q].type===2) {
        for( let x in this.data[this.active_q].answer){
          this.andwers_check[x] = false 
        }
      }

      this.error_msg = false;
      if (!this.answers_text) {
        this.error_msg = "Пожалуйста укажите ответ";
        setTimeout(() => {
          this.error_msg = false;
        }, 3000);
        return true;
      }
      this.answers_text = false;

      this.active_q++;
*/
    },
  },
};
</script>

<style scoped>
.active_label_green {
  background: rgba(17, 203, 14, 0.28) !important;
}
.active_label_red {
  background: rgba(234, 0, 0, 0.28);
}

select {
  height: 56px;
}

.main_con {
  background-image: url("@/assets/img/texture.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.registration_headerTop_single_left_mob{
  margin-top: 40px;
  width: 100%!important;
  text-align: center !important;
  float: left !important;
}
.registration_headerTop_single_left_mob a{
  text-decoration: underline!important;
}
.registration_headerTop_single_left {
  text-align: right;
  background-color: rgba(231, 231, 231, 0.1);
  border-radius: 20px;
  padding: 10px 20px;

  float: right;
}
.registration_headerTop_single_left a {
}

.error_msg {
  color: #b6776b;
}

label,
select,
option {
  background: rgba(0, 0, 0, 0.28);
  border: 2px solid #f1d693;
  width: 100%;
  color: #fff;
  padding: 8px 17px;
  font-size: 24px;
  font-weight: 400;
  font-family: "American Typewriter";
}

.active_label {
  background-color: #f1d693;
  color: black;
}

label input {
  display: none;
}
.am{
  font-family: "Am";
}
input{
  font-family: "Am";

}
</style>