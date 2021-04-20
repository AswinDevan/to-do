<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-card elevation="0" border="0">
        <v-img gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)" src="https://i.pinimg.com/originals/0a/e7/ad/0ae7ade5b5acaa093c80abcd977da9a6.jpg">
        <v-list>
      <v-list-item src="https://i.pinimg.com/originals/0a/e7/ad/0ae7ade5b5acaa093c80abcd977da9a6.jpg">
          <v-badge bordered bottom color="green accent-4" dot offset-x="30" offset-y="20">
          <v-list-item-avatar class="mt-6 ml-0 mb-0" size="70"><img src="https://torange.biz/photofxnew/208/HD/cat-facebook-profile-image-208004.jpg" alt="Aswin"></v-list-item-avatar>
          </v-badge>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
        <v-list-item-title class="white--text font-weight-bold">Aswin Devadoss</v-list-item-title>
        <v-list-item-subtitle class="white--text font-weight-bold pt-1">aswin_devadoss</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      </v-list>
      </v-img>
      </v-card>
      <v-list dense>
       <v-list-item-group color="dark" class="px-2 pb-1">
        <v-list-item to="/home">
          <v-list-item-icon><v-icon class="mr-2">mdi-format-list-checks</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/about">
         <v-list-item-icon><v-icon class="mr-2 mb-0">mdi-help-box</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app src="https://i.pinimg.com/originals/0a/e7/ad/0ae7ade5b5acaa093c80abcd977da9a6.jpg" prominent>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-container>
        <v-layout row>
          <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <v-text-field hide-details background-color="transparent" prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-layout>
        <v-layout row class="mt-10 ml-1">
         <p class="display-1 white--text ">Todo</p>
        </v-layout>
      </v-container>
      <template v-slot:extension>
         <p class="header white--text ml-auto">{{getTime()}}</p>
      </template>
    </v-app-bar>
     <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    value:false
  }),
  methods:{
    getTime(){
      let date= new Date();
      var month = date.toLocaleString('default', { month: 'short' })
      var day = date.getDate();
      var year = date.getFullYear();
      return month+" "+day+" , "+year;
    }
  }
};
</script>
