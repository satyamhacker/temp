export function formatPrice(price: number): string {
    // Yeh number ko ₹ format mein badal dega (e.g., ₹2,499.00)
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(price);
}