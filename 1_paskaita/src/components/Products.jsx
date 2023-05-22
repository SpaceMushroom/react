
import Product from "./Product"

function Products(props) {
    return <div>
        <div><span 
        style = {{
            fontWeight: '1.5rem'
        }}
        >BEST SELERS</span></div>
        <div>
            <Product 
                title = "Posters"
                subtitle = "YEEZE BOOTS 350 V2 BELEKAS BELEKAS"
                price = "30$ -50$"
            />

        </div>
    </div>
}

export default Products