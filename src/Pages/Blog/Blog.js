import React, { useState } from 'react';

const Blog = () => {
	const Item = ({ title, children }) => {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<div className='border rounded shadow-md'>
				<button type='button' aria-label='Open item' title='Open item' className='flex items-center justify-between w-full p-4 focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
					<p className='text-lg text-left font-medium'>{title}</p>
					<div className='flex items-center justify-center w-8 h-8 border rounded-full'>
						<svg viewBox='0 0 24 24' className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}>
							<polyline fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeMiterlimit='10' points='2,7 12,17 22,7' strokeLinejoin='round' />
						</svg>
					</div>
				</button>
				{isOpen && (
					<div className='p-4 pt-0'>
						<p className='text-gray-700'>{children}</p>
					</div>
				)}
			</div>
		);
	};

	return (
		<>
			{/* Blogs Container */}
			<div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<div className='w-full  bg-white p-8 rounded-lg  shadow-lg shadow-gray-700'>
					<div className='flex flex-col mb-16'>
						<div className='max-w-xl md:mx-auto lg:max-w-2xl'>
							<h2 className='max-w-lg font-sans text-center text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>Frequently Asked Questions (FAQs)</h2>
						</div>
					</div>
					<div className='space-y-4 text-justify rounded shadow-lg '>
						<Item className='rounded-xl shadow-lg shadow-gray-400' title='Q: What are the different ways to manage a state in a React application?'>
							<strong>Ans:</strong>

							<br />
							<span>
								<strong>Ways To manage State in React App: </strong>
							</span>
							<br />
							<span>There are four main types of state you need to properly manage in your React apps:</span>
							<br />
							<ul className='list-decimal p-8'>
								<li>Local state</li>
								<li>Global state</li>
								<li>Server state</li>
								<li>Server state</li>
							</ul>
							<span>
								<strong>Local (UI) state:</strong> – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed
								to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
							</span>
							<br />
							<br />
							<span>
								<strong>Global (UI) state:</strong> – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple
								components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes
								state we think should be local might become global.
							</span>
							<br />
							<br />
							<span>
								<strong>Server state :</strong> – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local
								and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such
								as SWR and React Query that make managing server state much easier.
							</span>
							<br />
							<br />

							<span>
								<strong>URL state :</strong> – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a
								lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
							</span>
						</Item>
						<Item className='rounded-xl shadow-lg' title='Q: How does prototypical inheritance work?'>
							<strong>Ans:</strong>
							<br />
							<br />
							<span>
								<strong>Prototypical Inheritance: </strong>
							</span>
							<span>
								Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in
								objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and
								Object.setPrototypeOf
							</span>
						</Item>
						<Item className='rounded-xl shadow-lg' title='Q: What is a unit test? Why should we write unit tests?'>
							<strong>Ans:</strong>
							<br />
							<br />
							<span>
								<strong>Unit Testing: </strong>
							</span>
							<span>
								Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing
								methodology is done during the development process by the software developers and sometimes QA staff. The main objective of unit testing is to isolate written code to test and determine if it works as
								intended.
								<br />
								<br />
								Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
								<br />
								<br />
								Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method
								is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external
								code or functions. Testing can be done manually but is often automated.
								<br />
								<br />
								<strong>How unit tests work:</strong> A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The
								next step is for the test cases and scripts to be made, then the code is tested. Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the
								application until the test passes. TDD typically results in an explicit and predictable code base.
							</span>
						</Item>
						<Item className='rounded-xl shadow-lg' title='Q: React vs. Angular vs. Vue?'>
							<strong>Ans:</strong>
							<br />
							<br />
							<span>
								<strong>Angular: </strong>
							</span>
							<span>
								Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2
								(and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
							</span>
							<br />
							<br />
							<span>
								<strong>Vue: </strong>
							</span>
							<span>
								Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even
								though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It
								should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
							</span>
							<br />
							<br />
							<span>
								<strong>React: </strong>
							</span>
							<span>
								React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce
								their newest version on the blog section of the React website.
							</span>
						</Item>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
