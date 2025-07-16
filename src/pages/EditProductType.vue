<template>
  <div>
    <div class="page-title">Редактирование типа продукции</div>
    <div class="content-card">
      <el-form @submit.prevent="onSubmit">
        <el-form-item label="Кол-во пачек *">
          <el-input-number v-model="form.packsNumber" :min="1"/>
        </el-form-item>
        <el-form-item label="Тип упаковки *">
          <el-select v-model="form.packageType" placeholder="Выберите тип">
            <el-option label="компрессия" value="компрессия"/>
            <el-option label="некомпрессия" value="некомпрессия"/>
          </el-select>
        </el-form-item>
        <el-form-item label="Архивировано">
          <el-checkbox v-model="form.isArchived"/>
        </el-form-item>
        <el-form-item label="Описание">
          <el-input type="textarea" v-model="form.description" rows="3"/>
        </el-form-item>
        <el-form-item>
          <el-button class="button-red" @click="onDelete">Удалить</el-button>
          <el-button class="button-black" @click="cancel">Отмена</el-button>
          <el-button class="button-yellow" @click="onSubmit">Сохранить</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductTypesStore } from '../store/productTypes';

const route = useRoute();
const router = useRouter();
const store = useProductTypesStore();

const form = ref({
  packsNumber: null,
  packageType: '',
  isArchived: false,
  description: ''
});

onMounted(async () => {
  const data = await store.load(route.params.id);
  form.value = data;
});

function cancel() {
  router.push({ name: 'list' });
}

async function onSubmit() {
  await store.update(route.params.id, form.value);
  router.push({ name: 'list' });
}

async function onDelete() {
  if (confirm('Вы действительно хотите удалить этот тип продукции?')) {
    await store.remove(route.params.id);
    router.push({ name: 'list' });
  }
}
</script>
