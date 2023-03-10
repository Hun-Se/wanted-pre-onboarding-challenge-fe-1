import api from "./index";
import API_PATH from "../constant/api_path_constant";
import { CreateTodoType, UpdateTodoType } from "./../types/todos";

export const getTodos = async () => {
  const { data } = await api.get(API_PATH.TODOS);

  return data;
};

export const postCreateTodo = async (params: CreateTodoType) => {
  const { data } = await api.post(API_PATH.CREATE_TODO, params);

  return data;
};

export const putUpdateTodo = async ({ id, title, content }: UpdateTodoType) => {
  const { data } = await api.put(API_PATH.UPDATE_TODO(id), { title, content });

  return data;
};

export const deleteTodo = async (id: string) => {
  const { data } = await api.delete(API_PATH.DELETE_TODO(id));
  return data;
};
