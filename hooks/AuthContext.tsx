import React, { createContext, useState, useContext } from "react";

// Define os tipos para o contexto
interface AuthContextType {
  user: { id: number; nome: string; email: string } | null;
  login: (userData: { id: number; nome: string; email: string }) => void;
  logout: () => void;
}

// Cria o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provedor do contexto
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{ id: number; nome: string; email: string } | null>(null);

  // Função para fazer login
  const login = (userData: { id: number; nome: string; email: string }) => {
    setUser(userData);
  };

  // Função para fazer logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};