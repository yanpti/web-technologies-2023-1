import api from "../services/api.js";

const TodosRepository = {
  async add (values) {
    return await api('/todo', {
      method: 'POST',
      body: JSON.stringify(values)
    });
  },

  async getById (id) {
    return await api(`/todo/${id}`, {
      method: 'GET'
    });
  },

  async updateById (id, completed) {
    return await api(`/todo/${id}`, {
      method: 'PUT',
      body: JSON.stringify({completed})
    });
  },

  async getAll () {
    return await api('/todo', {
      method: 'GET'
    });
  },

  async deleteById (id) {
    return await api(`/todo/${id}`, {
      method: 'DELETE'
    });
  }
}

export default TodosRepository