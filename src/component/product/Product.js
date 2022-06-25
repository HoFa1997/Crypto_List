import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ProductItem from "./ProductItem";
import {getProduct} from "./CoinApi";
import Loader from "./Loader";

const DivNo = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35ch, 1fr));
  column-gap: 10px;
  row-gap: 15px;
  max-width: 100vw;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Product = () => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchApiProduct = async () => {
            const data = await getProduct()
            setProductData(data)
        }
        fetchApiProduct()
    }, [])

    return (
        <div>
            <h1>Product</h1>
            <div>
                {
                    productData.length ?
                        <DivNo>
                            {productData.map(post =>
                                <ProductItem
                                    key={post.id}
                                    title={post.title}
                                    category={post.category}
                                    description={post.description}
                                    price={post.price}
                                    image={post.image}
                                />
                            )}
                        </DivNo>
                        : <Loader/>
                }
            </div>
        </div>
    );
};

export default Product;

