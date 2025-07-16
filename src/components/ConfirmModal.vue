<template>
  <el-dialog :visible.sync="visible" title="Подтвердите удаление">
    <span>Вы действительно хотите удалить этот тип продукции?</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('cancel')">Отмена</el-button>
      <el-button type="danger" @click="$emit('confirm')">Удалить</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default { props: ['visible'] };
</script>
