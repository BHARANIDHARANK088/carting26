import React, { useEffect, useState } from 'react';
import "./cart.css";
import Navbar from '../../components/navbar/Navbar';
import Announcement  from "../../components/announcement/Announcement";
import Footer from '../../components/footer/Footer';
import styled from "styled-components";
import {FaPlus, FaMinus} from "react-icons/fa";

// 56
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";

// 67
import { userRequest } from '../../requestMethods';

// 63
import StripeCheckout from "react-stripe-checkout";
const KEY = process.env.REACT_APP_STRIPE;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Product = styled.div`
   display: flex;
   justify-content: space-between;
`;

const ProductDetail = styled.div`
   flex: 2;
   display: flex;
`;

const Image = styled.img`
   width: 200px;
`;

const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
  // 57
  const cart = useSelector(state => state.cart);
  console.log(cart);

  // 64
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  }

  // 68
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100
        });
        history.push("/success", {
          stripeData: response.data,
          products: cart, });
      } catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  }, [stripeToken, history, cart.total]);


  return (
    <div className="cart">
      {/* Cart */}

      <Navbar></Navbar>
      <Announcement></Announcement>

      <div className="cWrapper">
        <h1 className="cTitle">YOUR BAG</h1>
        <div className="cTop">
              <TopButton>CONTINUE SHOPPING</TopButton>
              <div className="topTexts">
                <span className="topText">Shopping Bag(2)</span>
                <span className="topText">Your WishList(0)</span>
              </div>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
        </div>
        
        <div className="cBottom">
            <div className="cBInfo">
              {/* 59 mapping cart */}
              {cart.products.map((product) => (
               <Product>
                <ProductDetail>
                  <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"></Image>
                  <Details>
                    <ProductName><b>Product:</b> {product.title}</ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <FaPlus></FaPlus>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <FaMinus></FaMinus>
                  </ProductAmountContainer>
                  <ProductPrice>$ {product.price}</ProductPrice>
                </PriceDetail>
              </Product>))}
              <Hr />

            {/* 58 comment these */}
            {/* <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <FaPlus></FaPlus>
                  <ProductAmount>1</ProductAmount>
                  <FaMinus></FaMinus>
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product> */}
            </div>
            <div className="cBSummary">
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                   <SummaryItemText>Subtotal</SummaryItemText>
                   {/* 60 */}
                   <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                {/* <Button>CHECKOUT NOW</Button> */}
                {/* 64 */}
                <StripeCheckout
                  name="Care Shop"
                  image="https://avatars.githubusercontent.com/u/1486366?v=4"
                  billingAddress
                  shippingAddress
                  description={"Your total is $" + cart.total}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                    <Button>CHECKOUT NOW</Button>
                </StripeCheckout>
            </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Cart