// Component ko bhi absolute path se import kiya!
import ProductCard from '@/components/ui/ProductCard';

export default function Home() {
  // Ek dummy product ka data banaya
  const dummyData = {
    id: "101",
    name: "Wireless Gaming Mouse",
    price: 1599,
    description: "RGB lighting ke sath smooth aur fast tracking."
  };

  return (
    <main style={{ padding: '40px' }}>
      <h1>Absolute Paths Test</h1>
      <ProductCard product={dummyData} />
    </main>
  );
}