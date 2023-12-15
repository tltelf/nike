import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, rating, name, price }) => {
	return (
		<div className='flex flex-1 flex-col w-full max-sm:w-full'>
			<img src={imgURL} alt={name} width={280} height={280} />
			<div className='mt-8 flex justify-start gap-2.5'>
				<img src={star} alt='rating' width={24} height={24} />
				<span className='font-montserrat text-slate-gray leading-normal text-xl'>
					{rating}
				</span>
			</div>
			<h3 className='mt-2 text-2xl font-semibold leading-normal font-palanquin'>
				{name}
			</h3>
			<p className='mt-2 text-coral-red font-semibold text-2xl leading-normal'>
				{price}
			</p>
		</div>
	);
};

export default PopularProductCard;
