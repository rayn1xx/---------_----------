import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081',
  headers: { 'Content-Type': 'application/json' }
});

export function fetchAll() { return api.get('/productTypes'); }
export function fetchById(id) { return api.get(`/productTypes/${id}`); }
export function createType(data) { return api.post('/productTypes', data); }
export function updateType(id, data) { return api.patch(`/productTypes/${id}`, data); }
export function deleteType(id) { return api.delete(`/productTypes/${id}`); }
