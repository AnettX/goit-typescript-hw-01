// Створіть інтерфейс User для типізації об'єктів, які містять такі властивості. Зверніть увагу, що адреса є необов'язковою властивістю.

// const mango = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com',
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };

// const poly = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com'
// };

// ------------------------------------------------------- Рішення: ------------------------------------------------------- //

// Змінено назву на User1, бо дублюється на назва в ДЗ4 Generics

interface User1 {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}

const mango: User1 = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User1 = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
