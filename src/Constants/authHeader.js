export const authHeader = () => {
    const token = localStorage.getItem("token");
  
    const header = { headers: { Auth: token } };
  
    return header;
  };
  