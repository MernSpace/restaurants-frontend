import React from 'react';
import SectionTitle from '../sectionTitle';
import ProductImg from '../../assets/images/home/slide5.jpg'

const ProductCard = () => {
    return (
        <>
            <SectionTitle
            subHeading='Should Try'
            heading='CHEF RECOMMENDS'
            />
            
            <div className='grid md:grid-cols-3 gap-9 sm:grid-cols-1 mb-8'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="">
                        <img  src={ProductImg} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese,<br/> Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl">
                    <figure className="">
                        <img  src={ProductImg} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese,<br/> Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl">
                    <figure className="">
                        <img  src={ProductImg} alt="Shoes" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese,<br/> Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default ProductCard;