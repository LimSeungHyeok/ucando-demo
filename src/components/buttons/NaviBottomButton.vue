<template>
  <div>
      <v-btn>
        <span>{{name}}</span>  
        <v-icon>{{icon}}</v-icon>
      </v-btn>
  </div>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            default: function () {
                return "Menu"; 
            }
        },
        icon:{
            type:String,
            default: function () {
                return "mdi-book";
            }
        }
    }
}
</script>

<style>

</style>