<template>
  <div id="app">
    <div class="layout">
      <Layout :style="{minHeight: '100vh'}">
        <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
          <Sidebar :isCollapsed="this.isCollapsed" />
        </Sider>
        <Layout>
          <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"/>
          <Content :style="{padding: '16px 16px 16px'}">
<!--            <Breadcrumb :style="{margin: '16px 0'}">-->
<!--              <BreadcrumbItem>Home</BreadcrumbItem>-->
<!--              <BreadcrumbItem>Components</BreadcrumbItem>-->
<!--              <BreadcrumbItem>Layout</BreadcrumbItem>-->
<!--            </Breadcrumb>-->
            <Card>
              <div style="height: 600px">
                <router-view/>
              </div>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
export default {
  components: {Sidebar},
  data() {
    return {
      isCollapsed: false
    };
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.layout-con{
  height: 100%;
  width: 100%;
}
</style>