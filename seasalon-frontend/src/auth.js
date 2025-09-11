const fakeDatabase = {
    users: [
      { id: 1, fullName: 'Thomas N', email: 'thomas.n@compfest.id', phoneNumber: '08123456789', password: 'Admin123', role: 'admin' },
    ],
  };
  
  export const authenticate = (email, password) => {
    const user = fakeDatabase.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return user;
  };
  
  export const logout = () => {
    localStorage.removeItem('currentUser');
  };
  
  export const getCurrentUser = () => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem('currentUser');
  };
  
  export const getUserRole = () => {
    const user = getCurrentUser();
    return user ? user.role : null;
  };
  