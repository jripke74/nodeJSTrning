const square = function (x) {
  return x * x
}

console.log(square(3))

const squareArrow = (x) => {
  return x * x
}

console.log(squareArrow(2))

const squareArrowShortened = (x) => x * x

console.log(squareArrowShortened(5))

const event = {
  name: 'Birthday Party',
  guestList: ['Jeff', 'Douglas', 'Hailey'],
  printGuestList() {
    console.log(`Guest list for ${this.name}`)

    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`)
    })
  }
}

event.printGuestList()