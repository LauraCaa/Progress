import ProductAmount from "./product-amount"
export default function Product() {
    let products= [
        {name:"papas", price:2500, stock:11, Fcost:2500},
        {name:"gomitas", price:2000, stock:10, Fcost:2000},
        {name:"gala", price:3000, stock:30, Fcost:3000},
        {name:"galletas", price:1500, stock:15, Fcost:1500},
        {name:"chocolatina", price:4000, stock:20, Fcost:4000},
    ]
    return (
        <>
            {products.map(product => (
            <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><ProductAmount></ProductAmount></td>
                <td>{product.Fcost}</td>
            </tr>
      ))}
        </>
    )
}