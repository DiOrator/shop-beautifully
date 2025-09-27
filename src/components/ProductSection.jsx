const ProductSection = ({ id, title, items }) => {
  return (
    <section id={id} className='product-section section'>
      <h2>{title}</h2>
      <div className='products'>
        {items.map((item) => (
          <div key={item.id} className='product'>
            <img src={item.image} alt={title} className='product-img' />
          </div>
        ))}
      </div>
      {/* One single button per section */}
      <a href='https://wa.me/2349025799243' className='order-btn'>
        Order Now
      </a>
    </section>
  );
};

export default ProductSection;
