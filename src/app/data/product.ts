import { Product } from "../models/product-model";

export const products: Product[] = [
    {
      id: 1,
      name: "Pomme",
      description: "Une jolie pomme verte à croquer",
      price: 2
    },
    {
      id: 2,
      name: "Banane",
      description: "Une délicieuse banane jaune",
      price: 1.5
    },
    {
      id: 3,
      name: "Lait",
      description: "Un litre de lait frais",
      price: 3.75
    },
    // Ajoute ici les deux produits supplémentaires
    {
      id: 4,
      name: "Pain",
      description: "Une baguette de pain croustillante",
      price: 2.25
    },
    {
      id: 5,
      name: "Yaourt",
      description: "Un pot de yaourt crémeux",
      price: 1.2
    },
    {
      id: 6,
      name: "Fromage",
      description: "Un morceau de fromage savoureux",
      price: 4.5
    }
  ];