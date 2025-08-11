// hooks/AddressContext.tsx
import React, { createContext, useState, useContext } from "react";

// Definindo o tipo para o endereço
export interface Address {
  street?: string; // Rua
  streetNumber?: string; // Número
  city?: string; // Cidade
  region?: string; // Estado
  postalCode?: string; // CEP
  country?: string; // País
}

// Definindo o tipo do contexto
interface AddressContextType {
  address: Address | null;
  setAddress: (address: Address | null) => void;
}

// Criando o contexto com um valor inicial
const AddressContext = createContext<AddressContextType | undefined>(undefined);

// Definindo explicitamente o tipo das props do Provider
interface AddressProviderProps {
  children: React.ReactNode;
}

// Criando o Provider (provedor) do contexto
export const AddressProvider: React.FC<AddressProviderProps> = ({ children }) => {
  const [address, setAddress] = useState<Address | null>(null);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useAddressContext = (): AddressContextType => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddressContext deve ser usado dentro de um AddressProvider");
  }
  return context;
};