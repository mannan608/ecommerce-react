const ProductImgs = ({ setMainImage, image, mainImage }) => {
  return (
    <div class="product-image d-flex gap-4">
      <div class="thumbnail-product-img d-flex flex-column gap-3 ">
        {image?.map((curlem, index) => {
          return (
            <div class="gallery-image">
              <img
                src={curlem?.url}
                alt={curlem?.filename}
                key={index}
                onClick={() => setMainImage(curlem)}
              />
            </div>
          );
        })}
      </div>
      <div class="product-feature-img">
        <img src={mainImage?.url} alt={mainImage?.filename} />
      </div>
    </div>
  );
};

export default ProductImgs;
