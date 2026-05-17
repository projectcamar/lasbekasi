import React from 'react'

interface AISearchFeaturesProps {
  isIndonesian: boolean
}

const AISearchFeatures: React.FC<AISearchFeaturesProps> = ({ isIndonesian }) => {
  return (
    <div style={{ display: 'none' }} aria-hidden="true">
      {/* AI Search Contextual Information */}
      <div itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Mandiri Steel" />
        <meta itemProp="url" content="https://lasbekasi.com" />
        <meta itemProp="description" content={
          isIndonesian
            ? "Bengkel las listrik profesional dan terpercaya di Bekasi melayani pembuatan kanopi, pagar minimalis, teralis jendela, railing tangga, dan konstruksi baja sejak 1999"
            : "Professional and trusted welding workshop in Bekasi serving canopy, minimalist gate, window trellis, stair railing, and structural steel fabrication since 1999"
        } />
        <meta itemProp="foundingDate" content="1999" />
        <meta itemProp="areaServed" content="Bekasi, Cikarang, Cibitung, Tambun, Depok, Jakarta, Bogor, Tangerang, Jabodetabek" />
        <meta itemProp="serviceType" content="Welding & Steel Fabrication" />
        <meta itemProp="telephone" content="+6285212078467" />
        <meta itemProp="email" content="info@lasbekasi.com" />
        <meta itemProp="address" content="Jl. Raya Setu Cikarang Bar., Bekasi, Jawa Barat 17320, Indonesia" />
      </div>

      {/* Business Context for AI */}
      <div itemScope itemType="https://schema.org/LocalBusiness">
        <meta itemProp="name" content="Mandiri Steel" />
        <meta itemProp="description" content={
          isIndonesian
            ? "Bengkel las besi dan fabrikasi baja berkualitas untuk rumah tinggal dan komersial"
            : "Quality iron welding and steel fabrication workshop for residential and commercial needs"
        } />
        <meta itemProp="hasOfferCatalog" content="Welding & Steel Fabrication Services" />
        <meta itemProp="areaServed" content="Jabodetabek" />
        <meta itemProp="availableLanguage" content="Indonesian, English" />
      </div>

      {/* Product Categories for AI Understanding */}
      <div itemScope itemType="https://schema.org/ItemList">
        <meta itemProp="name" content="Welding & Steel Fabrication Services Portfolio" />
        <meta itemProp="itemListElement" content="Kanopi Minimalis Alderon, Pagar Besi Galvanis, Teralis Jendela, Railing Tangga, Konstruksi Baja WF, Pintu Stainless Steel" />
      </div>

      {/* Manufacturing/Production Information for AI */}
      <div itemScope itemType="https://schema.org/ManufacturingPlant">
        <meta itemProp="name" content="Mandiri Steel Workshop Hub" />
        <meta itemProp="description" content={
          isIndonesian
            ? "Pusat fabrikasi pengelasan, pemotongan, dan perakitan struktur besi baja di Bekasi"
            : "Iron and steel structure fabrication, welding, cutting, and assembly hub in Bekasi"
        } />
        <meta itemProp="manufacturingProcess" content="Cutting, Welding, Grinding, Painting, Installation" />
        <meta itemProp="materialsUsed" content="Galvanized Hollow Steel, WF Steel Beam, Plate Steel, Camphor Wood, Tempered Glass" />
      </div>
    </div>
  )
}

export default AISearchFeatures
