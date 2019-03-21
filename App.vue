<template>
  <div>
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
    <router-link to="/home">Home</router-link>
    <router-link to="/my">My</router-link>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
    <button @click="trigger">点击一下</button>
  </div>
</template>
<script>
import Foo from './components/Foo.vue';
export default {
  beforeCreate() {
    console.log('App beforeCreate'); // 客户端和服务端都执行
  },
  created() {
    console.log('App created'); // 客户端和服务端都执行
  },
  beforeMount() {
    console.log('App beforeMount'); // 只有客户端执行
  },
  mounted() {
    console.log('App mounted');
  },
  methods: {
    trigger() {
      this.$router.push('/my');
    }
  },
  components: {
    foo: Foo
  }
}
</script>