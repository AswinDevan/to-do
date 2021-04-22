<template>
    <v-main>
        <v-container>
        <v-text-field hide-details v-model="taskName" outlined label="Add tasks" append-icon="mdi-plus" @click:append="add" @keydown.enter="add"></v-text-field>
         <v-list dense>
             <v-list-item-group>
              <v-list-item v-for="(task,i) in taskArray" :key="i" class="listClass">
                 <v-checkbox v-model="checkboxArray[i]"></v-checkbox>
                 <v-list-item-content :style="{'text-decoration':checkboxArray[i]?'line-through':'none'}">
                     {{task}}
                 </v-list-item-content>
                 <v-spacer></v-spacer>


     <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" elevation="0" color="white" fab small>
          <v-icon color="primary">mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
            <v-list-item-icon><v-icon>mdi-pencil</v-icon></v-list-item-icon>
          <v-list-item-title>Edit</v-list-item-title>
        </v-list-item>
        <v-list-item>
            <v-list-item-icon><v-icon>mdi-calendar</v-icon></v-list-item-icon>
          <v-list-item-title>Due Date</v-list-item-title>
        </v-list-item>
        <v-list-item @click="deleteItem(i)">
            <v-list-item-icon><v-icon>mdi-delete</v-icon></v-list-item-icon>
          <v-list-item-title>Delete</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>


              </v-list-item>
             </v-list-item-group>
         </v-list>
        </v-container>


    <v-snackbar v-model="snackChange" :timeout="timeout">{{title}}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackFalse">Close</v-btn>
      </template>
    </v-snackbar>


    <v-container v-if="!taskArray.length">
        <v-img class="mx-auto" src="https://www.flaticon.com/svg/vstatic/svg/1376/1376786.svg?token=exp=1619035232~hmac=28d41ebee7b55ad4e116d43abfbd2e3c" max-width="300" max-height="300" min-width="200" min-height="200" contain></v-img>
        <p class="text-center">No Data</p>
    </v-container>
    </v-main>
</template>

<script>
export default {
data:()=>({
    timeout:5000,
    taskName:'',
    title:'',
    taskArray:[],
    checkboxArray:[],
}),methods:{
    add(){
        let regex = new RegExp("[a-zA-Z0-9]+");
        if(this.taskName.match(regex)){
            this.taskArray.push(this.taskName);
            this.taskName='';
            this.$store.commit("SNACK_TRUE")
            this.title="Task Added!"
        }
    },deleteItem(i){
        this.taskArray.splice(i,1);
        this.checkboxArray.splice(i,1);
    },snackFalse(){
        this.$store.commit("SNACK_FALSE");
    }
},computed:{
    snackChange:{
      get(){
        return this.$store.state.snackbar;
      },set(value){
         this.$store.commit("CHANGE_SNACKBAR",value);
      }
    }
}
}
</script>
<style scoped>
.listClass{
    border-bottom: 0.5px solid rgb(226, 224, 224);
}
</style>