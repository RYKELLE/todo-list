export type Todo = {
  id: string,
  categoryId: string,
  text: string,
  done: boolean,
  dueDate: string
}

export type category = {
  id: string,
  name: string,
  color: string
}