import React from 'react';

const SkeletonSmallLoader = () => {
	return (
		<>
			<div class='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 w-full'>
				<div class='relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md '>
					<div class='animate-pulse flex space-x-4'>
						<div class='flex-1 space-y-4 py-1'>
							<div class='h-4 bg-gray-200 rounded w-3/4'></div>
							<div class='space-y-2'>
								<div class='h-4 bg-gray-200 rounded'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
							</div>
						</div>
					</div>
				</div>

				<div class='relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md '>
					<div class='animate-pulse flex space-x-4'>
						<div class='flex-1 space-y-4 py-1'>
							<div class='h-4 bg-gray-200 rounded w-3/4'></div>
							<div class='space-y-2'>
								<div class='h-4 bg-gray-200 rounded'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
							</div>
						</div>
					</div>
				</div>

				<div class='relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md '>
					<div class='animate-pulse flex space-x-4'>
						<div class='flex-1 space-y-4 py-1'>
							<div class='h-4 bg-gray-200 rounded w-3/4'></div>
							<div class='space-y-2'>
								<div class='h-4 bg-gray-200 rounded'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
							</div>
						</div>
					</div>
				</div>

				<div class='relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md '>
					<div class='animate-pulse flex space-x-4'>
						<div class='flex-1 space-y-4 py-1'>
							<div class='h-4 bg-gray-200 rounded w-3/4'></div>
							<div class='space-y-2'>
								<div class='h-4 bg-gray-200 rounded'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
							</div>
						</div>
					</div>
				</div>
				<div class='relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md '>
					<div class='animate-pulse flex space-x-4'>
						<div class='flex-1 space-y-4 py-1'>
							<div class='h-4 bg-gray-200 rounded w-3/4'></div>
							<div class='space-y-2'>
								<div class='h-4 bg-gray-200 rounded'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
							</div>
						</div>
					</div>
				</div>
				<div class='relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md '>
					<div class='animate-pulse flex space-x-4'>
						<div class='flex-1 space-y-4 py-1'>
							<div class='h-4 bg-gray-200 rounded w-3/4'></div>
							<div class='space-y-2'>
								<div class='h-4 bg-gray-200 rounded'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
								<div class='h-4 bg-gray-200 rounded w-5/6'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SkeletonSmallLoader;
