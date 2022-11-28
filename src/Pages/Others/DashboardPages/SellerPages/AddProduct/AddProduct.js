import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../../../Components/Other/Spinner/Spinner';
import { FbaseAuthContext } from '../../../../../Context/AuthContextAPI';

const AddProduct = () => {
	const { currentUser } = useContext(FbaseAuthContext);
	const [sellerVerification, setSellerVerification] = useState({});
	const navigate = useNavigate();

	const { data: brands = [], isLoading } = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/category');
			const data = await res.json();
			return data;
		}
	});

	if (isLoading) {
		return <Spinner />;
	}
	fetch(`http://localhost:5000/users/verified?email=${currentUser.email}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			setSellerVerification(data.verification);
		})

		.catch((err) => console.error(err));
	const handlerOnSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const modelName = form.modelName.value;
		const orginalPrice = form.orginalPrice.value;
		const reselPrice = form.reselPrice.value;
		const condition = form.condition.value;
		const brand = form.brand.value;
		const purchaseYear = form.purchaseYear.value;
		const description = form.description.value;
		const location = form.location.value;
		const phone = form.phone.value;
		const modelImage = form.modelImage.files[0];

		// console.log(modelImage, modelName, orginalPrice, reselPrice, condition, brand, purchaseYear, description, location, phone);

		const formData = new FormData();
		formData.append('image', modelImage);

		const imageHostKey = process.env.REACT_APP_imgbb_api_key;
		fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
			method: 'POST',
			body: formData
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.success === true) {
					const imgUrl = data.data.display_url;
					// console.log(imgUrl);
					const productData = {
						brand_name: brand,
						condition: {
							badge: condition
						},
						car_name: modelName,
						price: {
							original_price: orginalPrice,
							resale_price: reselPrice
						},
						image: imgUrl,
						description: description,
						purchase_year: purchaseYear,
						used_for: format(new Date(), 'yyyy') - purchaseYear,
						seller_info: {
							name: currentUser.displayName,
							email: currentUser.email,
							phone: phone,
							location: location,
							post_date: format(new Date(), '	PPpp'),
							verified: sellerVerification
						}
					};
					console.log(productData);
					handlerOnAddProduct(productData);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handlerOnAddProduct = async (productData) => {
		try {
			const res = await fetch('http://localhost:5000/add-product', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('jwtToken')}`
				},
				body: JSON.stringify(productData)
			});
			const data = await res.json();

			if (data.acknowledged === true) {
				console.log(data);
				toast.success('Product added successfully');
				navigate('/dashboard/my-products');
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			{/* Add Product Container */}
			<div className='add-product-container -m-8 md:-m-0'>
				<div className='min-h-screen p-4 md:p-6 bg-gray-100 flex items-center justify-center'>
					<div className='container max-w-screen-xl mx-auto'>
						<div>
							<h2 className='font-semibold text-3xl text-gray-600 underline underline-offset-2 mb-3'>Product Details Adding Form</h2>
							<p className='text-gray-500 mb-6'>Fill the form below to add a new Product</p>

							<div className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'>
								<form
									className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'
									onSubmit={(e) => {
										handlerOnSubmit(e);
									}}
								>
									<div className='text-gray-600'>
										<p className='font-medium text-lg mb-5 underline'>Seller Information</p>
										<div className=''>
											<div className='w-full mb-3'>
												<label>Location</label>
												<input type='text' name='location' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' placeholder='Your Location' required />
											</div>
										</div>
										<div className='w-full'>
											<label>Phone Number</label>
											<input type='number' name='phone' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' placeholder='Your Phone Number' required />
										</div>
									</div>

									<div className='lg:col-span-2'>
										<p className='font-medium text-lg mb-5 underline mt-10 lg:mt-0'>Product Information</p>
										<div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
											<div className='md:col-span-5 flex gap-4 mb-1'>
												<div className='w-full'>
													<label>Model Name</label>
													<input type='text' name='modelName' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' required placeholder='Model Name' />
												</div>
												<div className='w-full'>
													<label>Model Picture</label>
													<input type='file' name='modelImage' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' required placeholder='Model Image' accept='image/*' />
												</div>
											</div>

											<div className='md:col-span-5 flex gap-4'>
												<div className=''>
													<label>Original Price</label>
													<input type='number' name='orginalPrice' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' placeholder='000000' required />
												</div>
												<div className=''>
													<label>Resale Price</label>
													<input type='number' name='reselPrice' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' placeholder='Resale Price' required />
												</div>
											</div>

											<div className='md:col-span-5  md:flex  gap-4 mt-2 '>
												<div className='w-full '>
													<label>Car Condition</label>
													<select name='condition' className='w-full rounded mt-1' defaultValue='Excellent' required>
														<option value='Excellent'>Excellent</option>
														<option value='Good'>Good</option>
														<option value='Fair'>Fair</option>
													</select>
												</div>
												<div className='w-full'>
													<label>Brand Name</label>
													<select name='brand' className='w-full rounded mt-1' required>
														{brands.map((brand) => (
															<option key={brand._id} value={brand?.brand_name}>
																{brand?.brand_name}
															</option>
														))}
													</select>
												</div>
												<div className='w-full'>
													<label>Year of Purchase</label>
													<input type='number' name='purchaseYear' className='h-10 border mt-1 rounded px-4 w-full bg-gray-50' placeholder='Year of Purchase' required />
												</div>
											</div>

											<div className='md:col-span-5'>
												<label>Dessription</label>
												<textarea name='description' className='h-20 border mt-1 rounded px-4 w-full bg-gray-50' placeholder='Description' required />
											</div>

											<div className='md:col-span-5 text-right'>
												<div className='inline-flex items-end'>
													<input type='submit' className='bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded' value='Submit' />
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddProduct;
