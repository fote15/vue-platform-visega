<template>
  <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 d-none d-md-block">
                    <div class="footer-widget">
                        <h3>Обучение</h3>
                        <router-link :to="'/courses'" >Все курсы</router-link>
                          <router-link :to="'/corp'" >Коpпоpативное обучение</router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-none d-md-block">
                    <div class="footer-widget">
                        <h3>ИНФОPМАЦИЯ</h3>
                        <router-link :to="'/#about'" >О нас</router-link>
                        <a href="#">Telegram-канал</a>
                    </div>
                </div>
                <div class="col-lg-4 d-none d-md-block">
                    <div class="footer-widget">
                        <h3>ПPИЛОЖЕНИЕ</h3>
                        <a href="#"><img src="@/assets/img/playstor.png" alt=""></a>
                        <a href="#"><img src="@/assets/img/appstor.png" alt=""></a> 
                    </div>
                </div>
                <div class="col-lg-4 d-block d-md-none">
                    <div class="footer-widget">
                        <h3>ВозPОЖДЕНИЕ</h3>
                        <p>Школа Возрождение, 2022.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
// @ is an alias to /src
import axios from "axios";




export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      chartsEnabled: false,
      allData: [],
      date_now: null,
      fields: [
        {
          key: "id",
          sortable: true,
          label: "#ID",
        },
        {
          key: "id",
          sortable: true,
          label: "#ID",
        },
        {
          key: "out_system_id",
          sortable: true,
          label: "# Заказа",
        },
        {
          key: "name",
          sortable: false,
          label: "Заказчик",
        },
        {
          key: "address",
          sortable: true,
          label: "Адрес",
        },
        {
          key: "delivery_time",
          sortable: true,
          label: "Время доставки",
        },
        {
          key: "created_at",
          sortable: false,
          label: "Дата создания",
        },
        {
          key: "delivery_fact_time",
          sortable: false,
          label: "Точное время доставки",
        },
        {
          key: "phone",
          sortable: false,
          label: "Телефон",
        },
        {
          key: "name",
          sortable: false,
          label: "Товар( в АПИ нет)",
        },
        {
          key: "status",
          sortable: true,
          label: "Статус",
        },
      ],
      items: [],
    }
  },
  mounted() {
    var today = new Date();
    this.date_now = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
    axios
      .get(
        "https://api2.oasys.kz/v1/dashboard",
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        }
      )
      .then((e) => {
        let points = []
        let dates = []
        for (let x in e.data.data.orders_statistic) {
          points.push(e.data.data.orders_statistic[x].count)
          dates.push(e.data.data.orders_statistic[x].date)
        };
        this.$store.state.dataDashPoint = points;
        this.$store.state.dataDashDates = dates;


        this.allData = e.data.data;
        this.items = e.data.data.lastDeliveryOrders;

        this.chartsEnabled = true;
      });
  }
}
</script>
<style>

</style>