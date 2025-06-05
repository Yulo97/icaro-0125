import { create } from "zustand";
import { persist } from "zustand/middleware";

const AgregarAlCarrito = create(
  persist(
    //se envuelve todos los metodos
    (set) => ({
      carrito: [],
      agregar: (producto) =>
        set((state) => ({
          carrito: state.carrito.some((item) => item.id === producto.id)
            ? state.carrito
            : [...state.carrito, { ...producto, cantidad: 1 }],
        })),
      vaciar: () =>
        set(() => ({
          carrito: [],
        })),
      eliminar: (id) =>
        set((state) => ({
          carrito: state.carrito.filter((p) => p.id !== id),
        })),
      aumentar: (producto) =>
        set((state) => ({
          carrito: state.carrito.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
        })),
      disminuir: (producto) =>
        set((state) => ({
          carrito: state.carrito.map((item) =>
            item.id === producto.id && item.cantidad > 1
              ? { ...item, cantidad: item.cantidad - 1 }
              : item
          ),
        })),
    }),
    {
      name: "carrito", //aca va el nombre de la key en el localstorage
    }
  )
);

export default AgregarAlCarrito;
