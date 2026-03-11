import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

export async function loginUser(email, password) {
  return await pb.collection("users").authWithPassword(email, password);
}

export async function registerUser(email, password, name) {
  return await pb.collection("users").create({
    email: email,
    password: password,
    passwordConfirm: password,
    name: name
  });
}

export function logoutUser() {
  pb.authStore.clear();
}

export function getCurrentUser() {
  return pb.authStore.model;
}

export async function deleteUser() {
  const user = pb.authStore.model;
  if (!user) return;
  await pb.collection("users").delete(user.id);
  pb.authStore.clear();
}