<template>
  <el-tooltip :content="description" placement="top">
    <el-icon><Info /></el-icon>
  </el-tooltip>
</template>
<script>
import { ElIcon } from 'element-plus';
import { Info } from '@element-plus/icons-vue';
export default {
  props: ['description'],
  components: { ElIcon, Info }
};
</script>
