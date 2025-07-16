<template>
  <div>
    <!-- Создать -->
    <el-button type="primary" @click="goCreate" style="margin-bottom: 16px;">
      Создать тип продукции
    </el-button>

    <!-- Таблица -->
    <el-table :data="store.list" stripe style="width: 100%;">
      <el-table-column prop="packageType" label="Тип упаковки" />
      <el-table-column prop="packsNumber" label="Кол-во в упаковке" />
      <el-table-column label="Дата создания">
        <template #default="{ row }">
          {{ formatDate(row.createdAt) }}
        </template>
      </el-table-column>
      <el-table-column label="Статус">
        <template #default="{ row }">
          {{ row.isArchived ? 'Архив' : 'Активно' }}
        </template>
      </el-table-column>

      <!-- Действия -->
      <el-table-column label="Действия" width="140">
        <template #default="{ row }">
          <!-- Инфо -->
          <el-icon class="icon" @click="showInfo(row.description)">
            <InfoFilled />
          </el-icon>
          <!-- Редактировать -->
          <el-icon class="icon" @click="goEdit(row.id)">
            <Edit />
          </el-icon>
          <!-- Удалить -->
          <el-icon class="icon" @click="showDelete(row.id)">
            <Delete />
          </el-icon>
        </template>
      </el-table-column>
    </el-table>

    <!-- Модалка описания -->
    <el-dialog
      v-model="infoVisible"
      title="Описание продукции"
      width="400px"
    >
      <p style="white-space: pre-wrap;">{{ infoText || 'Нет описания' }}</p>
      <template #footer>
        <el-button @click="infoVisible = false">Закрыть</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProductTypesStore } from '../store/productTypes'
// Иконки из Element Plus
import { InfoFilled, Edit, Delete } from '@element-plus/icons-vue'

const router = useRouter()
const store = useProductTypesStore()

const infoVisible = ref(false)
const infoText = ref('')

// Удаление теперь без диалога
onMounted(() => {
  store.loadAll()
})

const goCreate = () => router.push({ name: 'create' })
const goEdit   = id => router.push({ name: 'edit', params: { id } })

const showInfo = text => {
  infoText.value = text
  infoVisible.value = true
}

// Новая реализация удаления
const showDelete = async (id) => {
  if (confirm('Вы действительно хотите удалить этот тип продукции?')) {
    await store.remove(id)
  }
}

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  return `${dd}.${mm}.${d.getFullYear()}`
}
</script>

<style scoped>
.icon {
  cursor: pointer;
  margin: 0 4px;
  color: #606266;
  font-size: 18px;
}
</style>