import { defineStore } from 'pinia';
import * as api from '../api/productTypes';

export const useProductTypesStore = defineStore('productTypes', {
  state: () => ({ list: [] }),
  actions: {
    async loadAll() {
      const { data } = await api.fetchAll();
      this.list = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    async load(id) {
      const { data } = await api.fetchById(id);
      return data;
    },
    async create(data) {
      await api.createType(data);
      await this.loadAll();
    },
    async update(id, data) {
      await api.updateType(id, data);
      await this.loadAll();
    },
    async remove(id) {
      await api.deleteType(id);
      await this.loadAll();
    }
  }
});
