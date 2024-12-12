export interface Housing {
    id: string;
    title: string;
    address: string;
    price: number;
  }
  
  export interface Interested {
    id: string;
    housingId: string;
    name: string;
    email: string;
    phone: string;
    interests: string;
    budget: number;
  }
  
  export const housings: Housing[] = [
    { id: '1', title: 'Apartamento céntrico', address: 'Calle Mayor 1, Madrid', price: 1000 },
    { id: '2', title: 'Casa con jardín', address: 'Avenida del Parque 5, Barcelona', price: 1500 },
    { id: '3', title: 'Estudio moderno', address: 'Plaza Nueva 3, Sevilla', price: 800 },
  ];
  
  export const interestedPeople: Interested[] = [
    { id: '1', housingId: '1', name: 'Ana García', email: 'ana@example.com', phone: '123456789', interests: 'Cerca del metro', budget: 950 },
    { id: '2', housingId: '1', name: 'Carlos Rodríguez', email: 'carlos@example.com', phone: '987654321', interests: 'Con balcón', budget: 1000 },
    { id: '3', housingId: '2', name: 'Elena Martínez', email: 'elena@example.com', phone: '456789123', interests: 'Zona tranquila', budget: 1400 },
  ];
  
  