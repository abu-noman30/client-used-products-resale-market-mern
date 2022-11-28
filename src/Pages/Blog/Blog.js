import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
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
			<Helmet>
				<title>Blogs - plumBoy</title>
			</Helmet>
			{/* Blogs Container */}
			<div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<div className='w-full  bg-white p-8 rounded-lg  shadow-lg shadow-gray-700'>
					<div className='flex flex-col mb-16'>
						<div className='max-w-xl md:mx-auto lg:max-w-2xl'>
							<h2 className='max-w-lg font-sans text-center text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>Frequently Asked Questions (FAQs)</h2>
						</div>
					</div>
					<div className='space-y-4 text-justify rounded shadow-lg '>
						<Item className='rounded-xl shadow-lg shadow-gray-400' title='Q: Difference between SQL and NoSQL?'>
							<strong>Ans:</strong>
							<br />
							<br />
							<span>
								<strong>SQL(Sequential Query Language): </strong>
							</span>
							<span>
								SQL databases are relational databases. They are based on the relational model, an intuitive, straightforward way of representing data in tables. Each row in the table is a record with a unique ID called
								the key. The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data items. SQL databases are
								also known as relational databases, RDBMSs (relational database management systems), or RDMSs (relational database management systems). The most popular SQL database is MySQL. Other examples include
								Oracle, Microsoft SQL Server, PostgreSQL, and SQLite. SQL databases are widely used in enterprise applications. They are also a good choice for medium to large web applications. SQL databases are good at
								handling structured data well. They are not a good fit for storing large volumes of unstructured data. SQL databases are also not a good fit for handling large data sets that require high availability.
							</span>
							<br />
							<br />
							<span>
								<strong>NoSQL(No Sequential Query Language): </strong>
							</span>
							<span>
								NoSQL databases are non-relational databases. They are based on the document model, a data model for representing and storing data that is more flexible than the tabular model used in relational
								databases. In a document database, each record is a document, which is a data structure composed of field and value pairs. The values may be simple atomic values such as strings or numbers, or they may be
								complex structures such as lists or other documents. NoSQL databases are also known as non-relational databases or distributed databases. The most popular NoSQL database is MongoDB. Other examples include
								CouchDB, Redis, and Apache Cassandra. NoSQL databases are widely used in web and mobile applications. They are also a good choice for big data applications. NoSQL databases are good at handling large
								volumes of unstructured data. They are not a good fit for handling complex relational data. NoSQL databases are also not a good fit for handling large data sets that require high availability.
							</span>
						</Item>
						<Item className='rounded-xl shadow-lg' title='Q: What is JWT, and how does it work?'>
							<strong>Ans:</strong>
							<br />
							<br />
							<span>
								<strong>JWT(JSON Web Token): </strong>
							</span>
							<span>
								JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified
								and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. The tokens are signed by the issuer of the token,
								and the receiver of the token can then verify that the token is valid by checking the signature. The tokens are designed to be compact, URL-safe and usable especially in web browser single sign-on (SSO)
								context.
							</span>
							<br />
							<br />
							<span>
								JWTS differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a
								claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using
								base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings: The header and the payload. The
								signature. The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON
								string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are
								requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be
								present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the
								issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
							</span>
						</Item>
						<Item className='rounded-xl shadow-lg' title='Q: What is the difference between javascript and NodeJS?'>
							<strong>Ans:</strong>
							<br />
							<br />
							<span>
								<strong>JavaScript: </strong>
							</span>
							<span>
								JavaScript is a scripting language that is used to make web pages interactive. It is a lightweight, interpreted programming language with first-class functions. While it is most well-known as the
								scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic
								language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. JavaScript engines were originally used only in web browsers, but they are now embedded in many
								other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript
								available for writing extensions and applications. JavaScript engines are typically found embedded in software products as an independent component, which may execute scripts written in the JavaScript
								language. The most common use of JavaScript is in the web browser as an interpreted language, but it is also used in server-side networking through various JavaScript engines, such as Node.js. The
								JavaScript engine is the program that executes JavaScript code. It is usually embedded in a host application, such as a web browser or a server-side web framework.
							</span>
							<br />
							<br />
							<span>
								<strong>NodeJS: </strong>
							</span>
							<span>
								Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for
								server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Node.js is an event-based, non-blocking, asynchronous I/O runtime
								that uses Google's V8 JavaScript engine and libuv library. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. Node.js is a JavaScript runtime built on
								Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed
								devices. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
							</span>
						</Item>
						<Item className='rounded-xl shadow-lg' title='Q: How does NodeJS handle multiple requests at the same time?'>
							<strong>Ans:</strong>
							<br />
							<br />
							<span>
								<strong>NodeJS: </strong>
							</span>
							<span>
								Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function
								calls to maintain concurrency.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is
								an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process
								the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
							</span>
						</Item>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blogs;