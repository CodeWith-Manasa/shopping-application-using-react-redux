import React from 'react';
import Products from '../components/Product';

const Home = () => {
    return (
        <div>
            <h2 className="heading">Welcome to the Manasa store</h2>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;
