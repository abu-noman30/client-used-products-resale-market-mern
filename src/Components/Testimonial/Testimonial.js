import React from 'react';

const Testimonial = () => {
	return (
		<>
			{/* Testimonial Container */}
			<div className='testimonial-container'>
				<div className='relative mx-auto py-6 px-4 w-full max-w-7xl bg-gray-100 text-gray-800'>
					<div className='mx-auto max-w-sm sm:max-w-none grid grid-cols-4 gap-5'>
						{/* :CONTAINER 1 */}
						<div className='col-span-full sm:col-span-2 lg:col-span-1 grid grid-rows-2 rounded-xl shadow-lg overflow-hidden bg-white'>
							{/* ::Picture container */}
							<div className='row-span-1 relative'>
								{/* :::image */}
								<img src='https://fancytailwind.com/static/profile9-20177de8c21310d98e1c1c35f8fff271.jpg' alt='' className='absolute w-full h-full object-cover' />
								{/* :::gradient overlay */}
								<div className='w-full h-full bg-gradient-to-t from-white to-transparent opacity-80' />
								{/* :::name */}
								<h3 className='absolute bottom-8 left-1/2 z-10 w-full text-center text-2xl font-bold transform -translate-x-1/2'>Shabab Dugary</h3>
							</div>
							{/* ::Testimony 1 */}
							<div className='relative py-10 px-4 inline-flex justify-center items-center'>
								{/* :::text */}
								<p className='z-10 relative text-center text-gray-600'>
									"Consequatur ipsam eum voluptatem accusamus eius alias dolor perferendis tenetur non pariatur amet nostrum cupiditate, unde inventore ipsa illum, eos illo? Repudiandae."
								</p>
								{/* :::quote svg */}
								<svg
									className='absolute top-1/2 left-1/2 w-56 h-56 text-red-200 transform -translate-x-1/2 -translate-y-1/2'
									version='1.0'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 600.000000 379.000000'
									preserveAspectRatio='xMidYMid meet'
								>
									<g transform='translate(0.000000,379.000000) scale(0.100000,-0.100000)' stroke='none'>
										<path d='M1186 3690 c-218 -27 -442 -114 -619 -241 -105 -74 -263 -236 -332 -339 -323 -484 -309 -1100 35 -1572 63 -87 202 -223 296 -290 149 -107 343 -189 524 -223 47 -9 95 -18 107 -21 31 -6 36 -32 23 -126 -31 -230 -107 -436 -252 -686 -33 -57 -58 -106 -55 -109 8 -7 288 149 432 240 536 340 935 755 1159 1207 218 440 259 851 124 1254 -89 265 -274 516 -490 664 -159 108 -368 192 -568 228 -106 19 -293 26 -384 14z' />
										<path d='M4420 3689 c-593 -74 -1074 -541 -1166 -1134 -32 -210 -4 -482 70 -678 71 -189 168 -339 311 -482 195 -196 416 -312 718 -377 l107 -23 0 -62 c0 -198 -99 -482 -260 -751 -35 -57 -60 -106 -56 -109 15 -15 554 326 751 475 221 167 443 379 577 552 219 283 375 604 440 907 31 144 33 459 5 592 -122 566 -527 970 -1077 1076 -104 20 -319 27 -420 14z' />
									</g>
								</svg>
							</div>
						</div>

						{/* :CONTAINER 2 */}
						<div className='col-span-full sm:col-span-2 lg:col-span-1 py-6 pl-6 pr-2 flex flex-col rounded-xl bg-red-600 text-white'>
							{/* ::Quote SVG */}
							<div className='mb-2'>
								<svg className='w-14 h-14' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 466.000000 376.000000' preserveAspectRatio='xMidYMid meet'>
									<g transform='translate(0.000000,376.000000) scale(0.100000,-0.100000)' stroke='none'>
										<path d='M80 2675 l0 -1005 593 -2 594 -3 -463 -795 -463 -795 82 -3 c45 -2 91 -1 102 2 17 4 267 259 1387 1412 87 89 162 174 168 189 6 17 10 371 10 1016 l0 989 -1005 0 -1005 0 0 -1005z' />
										<path d='M2600 2675 l0 -1005 593 -2 593 -3 -463 -795 -463 -795 70 -3 c122 -5 135 4 418 297 136 141 465 480 732 754 271 278 495 515 508 539 l22 41 0 989 0 988 -1005 0 -1005 0 0 -1005z' />
									</g>
								</svg>
							</div>
							{/* ::Testimony 2 */}
							<p className='text-2xl font-bold leading-normal'>"Architecto alias dignissimos voluptates maxime cum placeat incidunt possimus quis tempora est eloar temporibus."</p>
							{/* ::Name */}
							<h3 className='mt-auto text-lg font-light tracking-wide'>Eric Mercury</h3>
							{/* ::Company */}
							<p className='text-sm font-semibold'>Google</p>
						</div>

						{/* :CONTAINER 3  */}
						<div className='col-span-full lg:col-span-2 grid grid-rows-2 gap-y-5'>
							{/* ::Card 1 */}
							<div className='row-span-1 flex rounded-xl'>
								{/* :::quote container */}
								<div className='mx-2'>
									<svg className='w-12 h-12 text-red-600' version='1.0' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 485.000000 390.000000' preserveAspectRatio='xMidYMid meet'>
										<g transform='translate(0.000000,390.000000) scale(0.100000,-0.100000)' stroke='none'>
											<path d='M72 1908 l3 -1903 360 -3 c198 -1 370 0 382 3 12 3 27 14 33 25 6 11 105 282 219 603 115 320 416 1161 670 1869 253 708 461 1292 461 1298 0 7 -337 10 -1065 10 l-1065 0 2 -1902z' />
											<path d='M2720 3790 c-11 -20 -14 -3727 -4 -3768 l6 -22 368 0 c336 0 370 2 389 17 14 13 209 545 647 1768 344 963 648 1812 674 1887 l49 138 -1060 -1 c-1021 -1 -1059 -1 -1069 -19z' />
										</g>
									</svg>
								</div>
								{/* :::testimony container */}
								<div className='flex flex-col'>
									{/* :::***testimony 3*** */}
									<p className='text-2xl font-bold leading-normal'>Non obcaecati aliquam eius recusandae, cupiditate aperiam consectetur soluta commodi beatae!</p>
									{/* :::***name*** */}
									<h3 className='mt-3 text-lg font-light tracking-wide'>Vivien Laperche</h3>
									{/* :::***company*** */}
									<p className='text-sm text-red-600 font-semibold'>Facebook</p>
								</div>
							</div>

							{/* ::Card 2 */}
							<div className='row-span-1 relative py-4 px-6 flex flex-col justify-center rounded-xl bg-red-100'>
								{/* :::quote svg */}
								<span className='absolute top-3 left-4'>
									<svg
										className='w-12 h-12 text-white text-opacity-70 transform rotate-180'
										version='1.0'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 459.000000 383.000000'
										preserveAspectRatio='xMidYMid meet'
									>
										<g transform='translate(0.000000,383.000000) scale(0.100000,-0.100000)' stroke='none'>
											<path d='M866 3805 c-304 -63 -560 -258 -695 -531 -70 -141 -111 -309 -111 -453 0 -32 7 -100 16 -152 49 -287 216 -536 454 -679 121 -73 155 -102 174 -151 65 -161 61 -422 -10 -673 -39 -139 -77 -233 -188 -461 l-101 -210 0 -85 c0 -71 4 -94 26 -141 35 -73 85 -128 151 -164 106 -58 266 -42 363 35 74 59 335 390 482 610 460 692 672 1371 633 2025 -6 91 -17 200 -26 241 -77 376 -339 660 -709 770 -76 23 -113 27 -240 30 -103 2 -172 -1 -219 -11z' />
											<path d='M3354 3810 c-481 -87 -824 -497 -824 -982 0 -259 89 -489 260 -671 82 -87 138 -132 245 -194 70 -41 113 -80 133 -118 15 -31 40 -153 47 -235 13 -149 -31 -391 -110 -605 -20 -55 -79 -186 -131 -292 -113 -228 -126 -277 -100 -380 22 -89 72 -164 139 -207 65 -42 114 -56 193 -56 120 0 197 46 316 188 495 596 818 1207 943 1784 46 218 59 339 59 573 0 311 -26 470 -105 635 -129 271 -361 463 -644 536 -111 29 -327 41 -421 24z' />
										</g>
									</svg>
								</span>
								{/* :::testimony 3 */}
								<p className='relative text-lg sm:text-xl text-red-800 font-bold leading-normal'>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quam quia beatae iure perferendis unde libero ad suscipit placeat temporibus fugiat, id accusantium deserunt, quod excepturi vel
									voluptas delectus at!
								</p>
								{/* :::name */}
								<h3 className='relative mt-3 text-lg text-red-400 tracking-wide'>Nora Blake</h3>
								{/* :::company */}
								<p className='relative text-sm font-semibold'>Facebook</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
