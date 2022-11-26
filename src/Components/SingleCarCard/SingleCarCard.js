import React from 'react';
import * as BSIcons from 'react-icons/bs';

const SingleCarCard = (props) => {
	const { setConfirmModal } = props;
	const { setBookNowModalData } = props;
	const { car } = props;
	const {
		image,
		car_name,
		condition: { badge },
		seller_info: { location, post_date, name, verified },
		price: { original_price, resale_price },
		used_for
	} = car;

	return (
		<>
			{/* Single Car Card Container */}
			<div className='single-car-card-container'>
				<div className='mb-4 p-4 w-full'>
					{/* Card container */}
					<div className='group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg'>
						{/* :CARD IMAGE & CATEGORY */}
						<div className='relative w-full overflow-hidden'>
							{/* ::Image */}
							<div className=''>
								<img src={image} alt='' className='w-full h-[16rem] object-cover object-center transition-all duration-300 transform group-hover:scale-110' />
							</div>
							{/* ::Category */}
							<div className='absolute top-2 left-2'>
								<h2 className='absolute top-0  inline-block pt-0.5 pb-1.5 px-2 rounded-md text-sm text-white subpixel-antialiased font-medium bg-gradient-to-br from-red-900 to-red-500 cursor-pointer '>{badge}</h2>
							</div>
						</div>

						{/* :CARD BODY */}
						<div className=' py-3 px-8 flex flex-col'>
							{/* ::Title */}
							<div className=' flex  items-center justify-between'>
								<h1 className='text-2xl text-left font-bold text-gray-800 antialiased'>{car_name}</h1>
								<p className='text-md text-left  text-gray-500  antialiased'>(Used for {used_for} years )</p>
							</div>

							{/* ::Excerpt */}
							<div className=' flex items-center justify-between'>
								<p className=' py-3 overflow-hidden leading-relaxed text-lg text-gray-500 text-left font-medium cursor-pointer'>Orginal Price:</p>
								<p className=' py-3 overflow-hidden leading-relaxed text-lg text-gray-500 text-left font-medium cursor-pointer'>
									<span className='text-red-600 text-right'>${original_price}</span>
								</p>
							</div>
							{/* ::Read more */}
							<div className=' flex items-center justify-between'>
								<p className='overflow-hidden leading-relaxed text-lg text-gray-500 text-left font-medium cursor-pointer'>Resale Price:</p>
								<p className=''>
									<span className='font-bold text-3xl -my-2 flex items-center justify-end text-red-700'>${resale_price}</span>
								</p>
							</div>

							<div className='flex flex-row-reverse items-center justify-between mt-5'>
								<label
									htmlFor='book-now-modal'
									className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-700 hover:bg-red-800 focus:shadow-outline focus:outline-none'
									aria-label='Book Now'
									title='Book Now'
									onClick={() => setBookNowModalData(car)}
								>
									Book Now
								</label>
								<label htmlFor='confirm-modal' className='btn btn-xs bg-red-800 hover:bg-red-800 mt-5' onClick={() => setConfirmModal(car)}>
									Report Item
								</label>
							</div>
						</div>

						{/* ::CARD FOOTER */}
						<div className='py-3 px-2 flex flex-wrap justify-around border-t border-gray-200'>
							{/* ::Author */}
							<span className='py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide cursor-pointer'>
								{verified === 'verified' && <BSIcons.BsFillCheckCircleFill className='text-blue-600 mr-1' />}
								{name}
							</span>
							{/* ::Date */}
							<span className='py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide'>
								<svg xmlns='http://www.w3.org/2000/svg' className='mr-1 h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
								</svg>
								{post_date}
							</span>
							{/* ::Reading time */}
							<span className='py-0.5 px-1.5 flex items-center text-xs text-gray-500 font-semibold tracking-wide'>
								<svg xmlns='http://www.w3.org/2000/svg' className='mr-1 h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
									<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd' />
								</svg>
								{location}
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* Modal - Body Container */}
		</>
	);
};

export default SingleCarCard;
