<template>
  <div id="app">
    <v-app>
      <v-app-bar app :color="defaultColor" height="100px">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>   -->
        <v-card flat tile :color="defaultColor">
          <v-toolbar-title>
            냉장고에 있는 재료들을 올려주세요.
          </v-toolbar-title>  
          <v-card flat tile :color="defaultColor">
            <v-text-field
              outlined
              hide-details
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-card>
        </v-card>
        <v-btn :color="defaultBtnColor">입력 완료</v-btn>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <!-- <router-view></router-view> -->
          <v-card height="300px"><h2>냉장고</h2></v-card>
          <v-carousel v-model="model">
            <v-carousel-item
              v-for="(color, i) in colors"
              :key="color"
            >
              <v-sheet
                :color="color"
                height="100%"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="text-h2">
                    음식 이름 {{ i + 1 }}
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </v-main>
      <v-bottom-navigation
        v-model="value"
        :background-color="color"
        dark
      >
      <v-btn>
        <span>홈</span>  
        <v-icon>mdi-home</v-icon>
      </v-btn>
  
      <v-btn>
        <span>레시피</span>  
        <v-icon>mdi-chef-hat</v-icon>
      </v-btn>
  
      <v-btn>
        <span>쇼핑</span>  
        <v-icon>mdi-book</v-icon>
      </v-btn>
  
      <v-btn>
        <span>게시판</span>  
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>

      <!-- <v-footer app>
      </v-footer> -->
    </v-app>
    <!-- <sample-page></sample-page> -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import SamplePage from './components/SamplePage.vue'

export default {
  name: 'App',
  data: () => ({ 
    value: 1, 
    defaultColor: "#FFA48F",
    defaultBtnColor: "#FF7246",
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],}),
  components: {
    // HelloWorld, 
    // SamplePage
  },
  computed: {
    color () {
      switch (this.value) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        default: return 'blue-grey'
      }
    },
  },
}
</script>

<style>
  .search__bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #FFA48F;
    background-color: #FFA48F;
  }
</style>
