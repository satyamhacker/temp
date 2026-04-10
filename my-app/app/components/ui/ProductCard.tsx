import React from 'react';
// Yahan hum absolute paths use kar rahe hain! 🔥
import { Product } from '@/types/product';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}>
            <h2 style={{ margin: '0 0 8px 0' }}>{product.name}</h2>
            <p style={{ color: '#666', marginBottom: '12px' }}>{product.description}</p>

            {/* Utility function call ho raha hai */}
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'green' }}>
                {formatPrice(product.price)}
            </div>
        </div>
    );
}