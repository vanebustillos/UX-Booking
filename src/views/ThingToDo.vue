<template>
  <div class="ma-0 pa-0 thing-to-do-container">
    <v-container class="background ma-0 pa-0">
      <v-row align="center" class="ma-0 pa-0 mb-8" justify="center">
        <v-col class="pa-0 mx-16 px-8">
          <v-card max-width="1248" class="mt-0 car">
            <v-carousel
              class="my-14"
              height="616"
              show-arrows
              hide-delimiters
              cycle
            >
              <v-carousel-item
                v-for="i in items"
                :key="i.id"
                :src="i.src"
              ></v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card flat tile class="ma-0 pa-0">
      <v-card-title
        class="
          pa-0
          pl-8
          ml-16
          mt-8
          mb-6
          subtitle-1
          ink--text
          text--darken-4
          font-weight-bold
        "
        >Actividades</v-card-title
      >
      <v-row row="auto" class="ma-0 mx-16 px-5" align="center">
        <v-col cols="auto">
          <v-select
            dense
            outlined
            label="Categoria Lorem"
            height="56px"
            class="mt-2 mb-3"
            :items="price"
            color="primary darken-2"
          ></v-select>
        </v-col>
        <v-col cols="auto">
          <v-select
            dense
            outlined
            height="56px"
            label="Categoria Ipsum"
            class="mt-2 mb-3"
            :items="price"
            color="primary darken-2"
          ></v-select>
        </v-col>
        <v-col cols="auto">
          <v-select
            dense
            outlined
            height="56px"
            label="Categoria die"
            class="mt-2 mb-3"
            :items="price"
            color="primary darken-2"
          ></v-select>
        </v-col>
        <v-col cols="auto">
          <v-select
            dense
            outlined
            height="56px"
            class="mt-2 mb-3"
            label="Otras Categorias"
            :items="price"
            color="primary darken-2"
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="ma-0 mb-6">
        <v-col cols="auto" class="mr-auto">
          <label
            class="pa-0 pl-5 ml-16 mt-5 subtitle-1 ink--text text--darken-4"
            >Recomendados para ti</label
          >
        </v-col>
        <v-col cols="auto" class="mr-16 pr-8"
          ><v-btn
            class="ink--text text--lighten-5 caption"
            color="primary darken-1"
            >Ver más</v-btn
          ></v-col
        >
      </v-row>
      <v-row class="ma-0 mx-16 px-4">
        <Information-card
          class="ma-0 mp-0 mx-4"
          v-for="r in recommended"
          :key="r.id"
          :title="r.title"
          :subtitle="r.subtitle"
          :location="r.location"
          :img="r.img"
        />
      </v-row>
      <v-row class="ma-0 pa-0 px-8 my-10">
        <v-divider class="primary darken-3 ma-0 mx-16"></v-divider>
      </v-row>
      <v-row class="ma-0 mb-6">
        <v-col cols="auto" class="mr-auto">
          <label
            class="pa-0 pl-5 ml-16 mt-5 subtitle-1 ink--text text--darken-4"
            >Popular del momento</label
          >
        </v-col>
        <v-col cols="auto" class="mr-16 pr-8"
          ><v-btn
            class="ink--text text--lighten-5 caption"
            color="primary darken-1"
            >Ver más</v-btn
          ></v-col
        >
      </v-row>
      <v-row class="ma-0 mx-16 px-4">
        <Information-card
          class="ma-0 mp-0 mx-4"
          v-for="p in popular"
          :key="p.id"
          :title="p.title"
          :subtitle="p.subtitle"
          :location="p.location"
          :img="p.img"
        />
      </v-row>
      <v-row class="ma-0 pa-0 px-8 my-10">
        <v-divider class="primary darken-3 ma-0 mx-16"></v-divider>
      </v-row>
      <v-row class="ma-0 mb-6">
        <v-col cols="auto" class="mr-auto">
          <label
            class="pa-0 pl-5 ml-16 mt-5 subtitle-1 ink--text text--darken-4"
            >Cerca tuyo</label
          >
        </v-col>
        <v-col cols="auto" class="mr-16 pr-8"
          ><v-btn
            class="ink--text text--lighten-5 caption"
            color="primary darken-1"
            >Ver más</v-btn
          ></v-col
        >
      </v-row>
      <v-row class="ma-0 mx-16 px-4">
        <Information-card
          class="ma-0 mp-0 mx-4"
          v-for="c in close"
          :key="c.id"
          :title="c.title"
          :subtitle="c.subtitle"
          :location="c.location"
          :img="c.img"
        />
      </v-row>
    </v-card>
    <v-card flat tile class="ma-0 pa-0">
      <v-card-title
        class="
          pa-0
          pl-8
          ml-16
          mt-10
          mb-6
          subtitle-1
          ink--text
          text--darken-4
          font-weight-bold
        "
        >Atracciones Turisticas</v-card-title
      >
      <v-row row="auto" class="ma-0 mx-16 px-5" align="center">
        <v-col cols="auto">
          <v-select
            dense
            outlined
            label="Categoria Lorem"
            height="56px"
            class="mt-2 mb-3"
            :items="price"
            color="primary darken-2"
          ></v-select>
        </v-col>
        <v-col cols="auto">
          <v-select
            dense
            outlined
            height="56px"
            label="Categoria Ipsum"
            class="mt-2 mb-3"
            :items="price"
            color="primary darken-2"
          ></v-select>
        </v-col>
        <v-col cols="auto">
          <v-select
            dense
            outlined
            height="56px"
            label="Categoria die"
            class="mt-2 mb-3"
            :items="price"
            color="primary darken-2"
          ></v-select>
        </v-col>
        <v-col cols="auto">
          <v-select
            dense
            outlined
            height="56px"
            class="mt-2 mb-3"
            label="Otras Categorias"
            :items="price"
            color="primary darken-2"
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="ma-0 mb-6">
        <v-col cols="auto" class="mr-auto">
          <label
            class="pa-0 pl-5 ml-16 mt-5 subtitle-1 ink--text text--darken-4"
            >Recomendados para ti</label
          >
        </v-col>
        <v-col cols="auto" class="mr-16 pr-8"
          ><v-btn
            class="ink--text text--lighten-5 caption"
            color="primary darken-1"
            >Ver más</v-btn
          ></v-col
        >
      </v-row>
      <v-row class="ma-0 mx-16 px-4">
        <Information-card
          class="ma-0 mp-0 mx-4"
          v-for="r in recommended"
          :key="r.id"
          :title="r.title"
          :subtitle="r.subtitle"
          :location="r.location"
          :img="r.img"
        />
      </v-row>
      <v-row class="ma-0 pa-0 px-8 my-10">
        <v-divider class="primary darken-3 ma-0 mx-16"></v-divider>
      </v-row>
      <v-row class="ma-0 mb-6">
        <v-col cols="auto" class="mr-auto">
          <label
            class="pa-0 pl-5 ml-16 mt-5 subtitle-1 ink--text text--darken-4"
            >Popular del momento</label
          >
        </v-col>
        <v-col cols="auto" class="mr-16 pr-8"
          ><v-btn
            class="ink--text text--lighten-5 caption"
            color="primary darken-1"
            >Ver más</v-btn
          ></v-col
        >
      </v-row>
      <v-row class="ma-0 mx-16 px-4">
        <Information-card
          class="ma-0 mp-0 mx-4"
          v-for="p in popular"
          :key="p.id"
          :title="p.title"
          :subtitle="p.subtitle"
          :location="p.location"
          :img="p.img"
        />
      </v-row>
      <v-row class="ma-0 pa-0 px-8 my-10">
        <v-divider class="primary darken-3 ma-0 mx-16"></v-divider>
      </v-row>
      <v-row class="ma-0 mb-6">
        <v-col cols="auto" class="mr-auto">
          <label
            class="pa-0 pl-5 ml-16 mt-5 subtitle-1 ink--text text--darken-4"
            >Cerca tuyo</label
          >
        </v-col>
        <v-col cols="auto" class="mr-16 pr-8"
          ><v-btn
            class="ink--text text--lighten-5 caption"
            color="primary darken-1"
            >Ver más</v-btn
          ></v-col
        >
      </v-row>
      <v-row class="ma-0 mx-16 px-4">
        <Information-card
          class="ma-0 pa-0 mx-4"
          v-for="c in close"
          :key="c.id"
          :title="c.title"
          :subtitle="c.subtitle"
          :location="c.location"
          :img="c.img"
        />
      </v-row>
      <v-row class="my-16 mx-16 px-8"
        ><v-img
          max-height="536"
          max-width="1248"
          src="@/assets/images/maps.png"
        ></v-img
      ></v-row>
      <v-card-title
        class="
          pa-0
          pl-8
          ml-16
          mt-2
          mb-5
          subtitle-1
          ink--text
          text--darken-4
          font-weight-bold
        "
        >Preguntas Frecuentes</v-card-title
      >
      <div class="pa-0 my-5 mx-16 px-8 questions" max-width="1440">
        <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
          <v-expansion-panel v-for="item in questions" :key="item.title">
            <v-expansion-panel-header class="panel-header">
              {{ item.title }}
              <template v-slot:actions>
                <v-icon color="primary darken-3"> $expand </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Some content
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-card>
  </div>
</template>
<script>
import image1 from "@/assets/images/carousel1.jpeg";
import image2 from "@/assets/images/carousel2.jpeg";
import image3 from "@/assets/images/carousel3.jpeg";
import image4 from "@/assets/images/carousel4.jpeg";
import InformationCard from "../components/InformationCard";
export default {
  name: "ThingToDo",
  components: {
    InformationCard,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          src: image1,
        },
        {
          id: 2,
          src: image2,
        },
        {
          id: 3,
          src: image3,
        },
        {
          id: 4,
          src: image4,
        },
      ],
      recommended: [
        {
          id: 1,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicación",
          img: "https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-italy-rome-colosseum.jpg",
        },
        {
          id: 2,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicación",
          img: "https://www.usnews.com/dims4/USNEWS/22c54a0/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F93%2F08%2F63d7674d439ca41b4d9a312f0e9f%2F2-giza-getty.jpg",
        },
        {
          id: 3,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicación",
          img: "https://themysteriousworld.com/wp-content/uploads/2014/06/LONDONeye.jpg",
        },
        {
          id: 4,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicación",
          img: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/03/hungary-budapest-parliament-night-river.jpg",
        },
      ],
      popular: [
        {
          id: 1,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicación",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ugkuBlzEUFkBu1jYZBPMD1xJuWfJ17Hj_AsZK3Fa78eBrRBI2g6Hl90m0vXdFfpCz9k&usqp=CAU",
        },
        {
          id: 2,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicación",
          img: "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/10/Cape-Town-Beaches.jpg",
        },
        {
          id: 3,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicación",
          img: "https://i2.wp.com/heraldspot.com/images/news/20210602/1622608422_tahiti1.jpg?ssl=1",
        },
        {
          id: 4,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicación",
          img: "https://media.istockphoto.com/photos/bodrum-turkey-summer-holidays-great-beaches-of-old-town-picture-id1163622485",
        },
      ],
      close: [
        {
          id: 1,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicacion",
          img: "https://misstourist.com/wp-content/uploads/2019/09/things-to-do-in-prague-660x400.jpg",
        },
        {
          id: 2,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicacion",
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295849965.jpg?k=43e93afc1b880fb91445d8c8d3b335320680691e9d49977f1a454be7fc501497&o=&hp=1",
        },
        {
          id: 3,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicacion",
          img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/11/02/15411511214752.jpg",
        },
        {
          id: 4,
          title: "Lorem ipsum",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
          location: "Ubicacion",
          img: "https://amazingarchitecture.com/storage/366/75228373_image8935.jpg",
        },
      ],
      questions: [
        { title: "Nonne audire tibi semper in extrema tardantur condicione" },
        {
          title:
            "Plagueis Sapientium Nec cogitavi. Est fabulam Jedi ut non dicam tibi.",
        },
        {
          title: "Suussa legend Plagueis erat Tenebrosi Domini com tam graves",
        },
        {
          title:
            "et sapientes uti potestate movere midichlorians creare animam",
        },
        { title: "Et talis cognitio IIT se custodiunt firmos pensi moreretur" },
        {
          title:
            "Vim licet appelles tenebris parte iter multis virtutibus aliqui opinantur",
        },
        { title: "Infeliciter, eius discipulo quae non sciebam, et docuit" },
        { title: "Irrisorie. Alios salvos fecit, sed ipse" },
      ],
    };
  },
};
</script>
<style src="../styles/ThingToDo.css"></style>
