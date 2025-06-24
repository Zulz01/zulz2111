import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-4">Zulz Store</h1>
      <p className="mb-6">Jual akun FF, ML, Top-Up game, dan layanan panel</p>
      <ul className="space-y-2">
        <li><Link href="/products" className="text-blue-600">🛒 Lihat Produk</Link></li>
        <li><Link href="/reseller" className="text-blue-600">🤝 Reseller Panel</Link></li>
        <li><Link href="/adp" className="text-blue-600">🛠️ ADP Panel</Link></li>
        <li><Link href="/own" className="text-blue-600">🔧 OWN Panel</Link></li>
        <li><Link href="/contact" className="text-blue-600">📞 Kontak</Link></li>
      </ul>
    </div>
  );
}