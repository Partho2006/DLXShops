import React, { useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className="w-full">
            <div className="text-2xl mb-4">
                <Title text1={"CART"} text2={"TOTALS"} />
            </div>

            <div className="flex flex-col gap-4 mt-4 bg-white p-5 rounded-xl shadow-sm border border-gray-200">

                <div className="flex justify-between text-gray-700">
                    <p className="font-medium">Subtotal</p>
                    <p className="font-semibold">{currency}{getCartAmount()}.00</p>
                </div>

                <hr className="border-gray-300" />

                <div className="flex justify-between text-gray-700">
                    <p className="font-medium">Shipping Fee</p>
                    <p className="font-semibold">{currency}{delivery_fee}.00</p>
                </div>

                <hr className="border-gray-300" />

                <div className="flex justify-between text-gray-900 text-lg">
                    <p className="font-bold">Total</p>
                    <p className="font-bold">{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
                </div>

            </div>
        </div>
    );
};

export default CartTotal;
