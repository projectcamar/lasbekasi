import React from 'react'
import './RelatedProducts.css'
import benchCornerImg from '../assets/Bench-corner-kursi-sudut-kursi-santai.png'
import mejaMakanKursiImg from '../assets/Meja-makan-industrial-150x60x90-2 kursi.png'
import rakGantungImg from '../assets/rak-gantung-industrial.png'

interface RelatedProduct {
  id: number
  name: string
  nameEn: string
  category: string
  categoryEn: string
  tags: string[]
  tagsEn: string[]
  price: number
  priceUSD: number
  image: string
}

const RelatedProducts: React.FC = () => {
  // Set language to Indonesian only for now (remove English duplication)
  const lang = 'id' // Change to 'en' for English

  const products: RelatedProduct[] = [
    {
      id: 1,
      name: 'Rak Gantung Industrial Frame Loft',
      nameEn: 'Frame Loft Bookshelf',
      category: 'Penyimpanan',
      categoryEn: 'Storage',
      tags: ['PRODUK KAMI', 'Terbaru'],
      tagsEn: ['OUR PRODUCTS', 'New Arrivals'],
      price: 3500000,
      priceUSD: 209.66,
      image: rakGantungImg
    },
    {
      id: 2,
      name: 'Meja Bar Balkon',
      nameEn: 'Balcony Bar Table',
      category: 'Set Bar',
      categoryEn: 'Bar Set',
      tags: ['PRODUK KAMI', 'Terbaru', 'Outdoor'],
      tagsEn: ['OUR PRODUCTS', 'New Arrivals', 'Outdoor'],
      price: 350000,
      priceUSD: 20.97,
      image: benchCornerImg
    },
    {
      id: 3,
      name: 'Meja Kopi Lounge Set',
      nameEn: 'Lounge Set Coffee Table',
      category: 'Lounge Set',
      categoryEn: 'Lounge Set',
      tags: ['PRODUK KAMI', 'Meja'],
      tagsEn: ['OUR PRODUCTS', 'Tables'],
      price: 2000000,
      priceUSD: 119.8,
      image: mejaMakanKursiImg
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  const formatPriceUSD = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <section className="related-products">
      <div className="container">
        <div className="section-header">
          <h2>
            {lang === 'id' ? 'Produk Industrial Terkait' : 'Related Industrial Products'}
          </h2>
          <p>
            {lang === 'id' 
              ? 'Temukan koleksi furniture industrial premium kami, diproduksi di workshop Bekasi dengan material berkualitas tinggi dan finishing powder coating.'
              : 'Discover our premium industrial furniture collection, manufactured in our Bekasi workshop with high-quality materials and powder coating finish.'}
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={lang === 'id' ? product.name : product.nameEn} loading="lazy" />
              </div>
              <div className="product-info">
                <div className="product-tags">
                  {(lang === 'id' ? product.tags : product.tagsEn).map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <h3 className="product-name">
                  {lang === 'id' ? product.name : product.nameEn}
                </h3>
                <p className="product-category">
                  {lang === 'id' ? product.category : product.categoryEn}
                </p>
                <div className="product-pricing">
                  <span className="price-usd">{formatPriceUSD(product.priceUSD)}</span>
                  <span className="price-idr">{formatPrice(product.price)}</span>
                </div>
                <a 
                  href={`https://wa.me/6285212078467?text=${encodeURIComponent(`Halo, saya tertarik dengan ${lang === 'id' ? product.name : product.nameEn}`)}`}
                  className="btn-view-details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lang === 'id' ? 'Lihat Detail Produk' : 'View Product Details'}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-products">
          <a href="/album-bengkel-las-mandiri" className="btn-view-all">
            {lang === 'id' ? 'Lihat Semua Produk' : 'View All Products'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
