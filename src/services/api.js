const API_URL = "https://jsonplaceholder.typicode.com/users";

// Export lastId as an object for mutability
export const lastId = { value: 10 };

export const fetchUsers = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  // Add department and split name for demo
  return data.slice(0, 10).map((u, i) => ({
    id: u.id,
    firstName: u.name.split(" ")[0],
    lastName: u.name.split(" ")[1] || "",
    email: u.email,
    department: ["Finance", "Sales", "Marketing", "Admin"][i % 4]
  }));
};

// Incremental ID logic for new users
export const createUser = async (user) => {
  lastId.value += 1;
  return { ...user, id: lastId.value };
};

export const updateUser = async (id, user) => {
  // Mock API: no-op
  return true;
};

export const deleteUser = async (id) => {
  // Mock API: no-op
  return true;
};
