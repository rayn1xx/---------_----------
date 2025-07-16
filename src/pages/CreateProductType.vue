<template>
  <div>
    <div class="page-title">Создание типа продукции</div>
    <div class="content-card">
      <el-form @submit.prevent="onSubmit">
        <el-form-item label="Кол-во пачек *">
          <el-input-number v-model="form.packsNumber" :min="1" />
        </el-form-item>
        <el-form-item label="Тип упаковки *">
          <el-select v-model="form.packageType" placeholder="Выберите тип">
            <el-option label="компрессия" value="компрессия"/>
            <el-option label="некомпрессия" value="некомпрессия"/>
          </el-select>
        </el-form-item>
        <el-form-item label="Архивировано">
          <el-checkbox v-model="form.isArchived" />
        </el-form-item>
        <el-form-item label="Описание">
          <el-input type="textarea" v-model="form.description" rows="3"/>
        </el-form-item>
        <el-form-item>
          <el-button class="button-black" @click="cancel">Отмена</el-button>
          <el-button class="button-yellow" @click="onSubmit">Создать</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useProductTypesStore } from '../store/productTypes';

const router = useRouter();
const store = useProductTypesStore();

const form = ref({
  packsNumber: null,
  packageType: '',
  isArchived: false,
  description: ''
});

function cancel() {
  router.push({ name: 'list' });
}

async function onSubmit() {
  await store.create(form.value);
  router.push({ name: 'list' });
}
</script>
