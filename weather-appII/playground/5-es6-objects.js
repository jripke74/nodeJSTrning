const name = 'Jeff'
const userAge = 27

const user = {
  name,
  age: userAge,
  location: 'Spokane'
}

console.log(user)

// object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.3
}

// const label = product.label
// const stock = product.stock

const {label:productLabel, stock, rating = 0} = product
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)