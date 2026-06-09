describe('Todo API', () => {
  test('basic test passes', () => {
    expect(1 + 1).toBe(2);
  });

  test('todo item has required fields', () => {
    const todo = { title: 'Buy milk', completed: false };
    expect(todo.title).toBeDefined();
    expect(todo.completed).toBe(false);
  });
});