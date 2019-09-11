<template>
  <div class="servers">
    <ul>
      <app-server
        v-for="server in serverList"
        :key="server.id"
        :server="server"
      ></app-server>
    </ul>
    <server-detail></server-detail>
  </div>
</template>

<script>
import ServerDetail from './server-detail';
import Server from './server';
import { serverBus } from '../main';
export default {
  data() {
    return {
      serverList: [
        {
          id: 1,
          status: 'normal'
        },
        {
          id: 2,
          status: 'unknow'
        },
        {
          id: 3,
          status: 'success'
        },
        {
          id: 4,
          status: 'fail'
        }
      ],
      currentId: 0
    };
  },
  components: {
    serverDetail: ServerDetail,
    'app-server': Server
  }
  // created() {
  //   serverBus.$on('statusChange', id => {
  //     this.serverList.map(item => {
  //       if (item.id === id) {
  //         item.status = 'mormal';
  //       }
  //       return item;
  //     });
  //   });
  // }
};
</script>

<style scoped>
</style>