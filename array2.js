const arr = [
  {
    pId: "1",
    pName: "Television",
    pPrice: 1500
  },
  {
    pId: "2",
    pName: "Laptop",
    pPrice: 55000
  },
  {
    pId: "3",
    pName: "Smartphone",
    pPrice: 20000
  },
  {
    pId: "4",
    pName: "Headphones",
    pPrice: 2500
  },
  {
    pId: "5",
    pName: "Washing Machine",
    pPrice: 18000
  }
];

const rs= arr.reduce((prevo, curro)=>prevo*curro.pPrice)
console.log(rs)
