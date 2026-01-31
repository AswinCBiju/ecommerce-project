import './header.css';
import { useState,useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';

function Header({ cart }) {
    let totalQty = 0;
    cart.forEach((cartItem) => {
        totalQty += cartItem.quantity;
    })
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const searchText = searchParams.get('search');

    const [search, setSearch] = useState(searchText || '');

    useEffect(() => {
        setSearch(searchText || '');
    }, [searchText])

    return (
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link">
                    <img className="logo"
                        src="images/logo-white.png" />
                    <img className="mobile-logo"
                        src="images/mobile-logo-white.png" />
                </Link>
            </div>

            <div className="middle-section">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />

                <button className="search-button" onClick={() => { navigate(`/?search=${search}`) }}>
                    <img className="search-icon" src="images/icons/search-icon.png" />
                </button>
            </div>

            <div className="right-section">
                <Link className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </Link>

                <Link className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="images/icons/cart-icon.png" />
                    <div className="cart-quantity">{totalQty}</div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </div>
    )
}

export default Header;