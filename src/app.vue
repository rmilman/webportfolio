<template lang="html">
  <div id="app">
  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">


   <div class="parentx-static">

    <vs-sidebar static-position default-index="1" color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h4>
          My Name
          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
        </h4>

      </div>

      <vs-sidebar-item index="1" icon="question_answer">
        <router-link to="/hello">Hello World</router-link>
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="gavel">
        <router-link to="/blog"> Blog</router-link>
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>
      
    </vs-sidebar>

    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:() => ({
    active: false
  })
}
</script>

<style lang="stylus">
.parentx-static
  overflow hidden
  height 500px
  position relative

.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
