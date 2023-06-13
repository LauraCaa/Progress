import Product from "./product"
import styles from "../styles/market.module.css"
export default function FoodList(){
    return(
        <>
            <table className={styles.FoodTable}>
                <thead>
                    <tr className={styles.FoodBody}>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>AMOUNT</th>
                        <th>FINAL COST</th>
                    </tr>
                </thead>
                <tbody className={styles.FoodBody}>
                    <Product></Product>
                </tbody>
            </table>
        </>
    )
}