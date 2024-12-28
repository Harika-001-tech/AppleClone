import { useState, useEffect } from 'react';

export default function PriceDisplay({ selectedCase, selectedSize, selectedBand }) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Base prices for cases
    const casePrices = {
      Aluminum: 399,
      Titanium: 799,
    };

    // Additional costs for sizes
    const sizePrices = {
      "42mm": 0,
      "46mm": 50,
    };

    // Prices for bands
    const bandPrices = {
      "Solo Loop": 49,
      "Braided Solo Loop": 99,
    };

    // Calculate the total price
    const totalPrice =
      (casePrices[selectedCase] || 0) +
      (sizePrices[selectedSize] || 0) +
      (bandPrices[selectedBand] || 0);

    setPrice(totalPrice);
  }, [selectedCase, selectedSize, selectedBand]);

  return (
    <div className="mt-8 p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-medium text-gray-800">Total Price</h2>
      <p className="mt-2 text-2xl font-bold text-gray-900">${price}</p>
    </div>
  );
}
