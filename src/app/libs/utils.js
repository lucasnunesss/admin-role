export const isAdmin = (user) => {
  return user?.roles?.includes('admin')
}