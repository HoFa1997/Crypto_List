import React, {Component} from 'react';
import styled from "styled-components";

class ProductItem extends Component {


    render() {
        const {title, category, description, price, image} = this.props

        const Card = styled.li`
          width: 300px;
          height: 350px;
          background-color: rgba(39, 166, 245, 0.38);
          border-radius: 0.5rem;
          box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
          padding-bottom: 1rem;
          background-image: linear-gradient(var(--card-gradient),
          white max(9.5rem, 27vh));
          overflow: hidden;

          img {
            border-radius: 0.5rem 0.5rem 0 0;
            width: inherit;
            background-color: white;
            object-fit: scale-down;
            height: 200px;
            

            ~ * {
              margin-left: 1rem;
              margin-right: 1rem;
            }
          }

          > :last-child {
            margin-bottom: 0;
          }

          * {
            text-decoration: none;
            color: black;

            a {
              cursor: pointer;
            }
          }

          p, a, h3 {
            font-size: 16px;
            font-family: sans-serif;
            font-weight: bold;
            text-align: left;
            padding: 0;
            margin: 0.5rem 0.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1;
            -webkit-box-orient: vertical;

          }
        `;

        return (
            <Card>
                <img src={image} alt=""/>
                <h3><a href="src/component/ProductItem#">{title}</a></h3>
                <p>{category}</p>
                <p>{description}</p>
                <p>{price} $</p>
            </Card>
        );
    }
}

export default ProductItem;