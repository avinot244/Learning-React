import "../styles/Cart.css"

function Cart() {
    const cost1 = 8
    const cost2 = 10
    const cost3 = 15
    return (
    <div className="lmj-cart">
        <h2>Pannier</h2>
        <ul>
            <li>Monstera : {cost1}€</li>
            <li>Lierre : {cost2}€</li>
            <li>Bouquet de fleurs : {cost3}€</li>
        </ul>
        <p>Total : {cost1 + cost2 + cost3}€</p>
    </div>)
}

export default Cart