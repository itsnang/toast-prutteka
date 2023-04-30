import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = () => {
	return (
		<ToastContainer
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='light'
			bodyClassName={() => "text-gray-900 "}
			toastClassName={() =>
				"flex gap-2 items-center  justcify-center rounded-lg mx-8"
			}
			className={() =>
				"w-full max-w-4xl fixed top-4 z-50 right-1/2 transform translate-x-1/2"
			}
		/>
	);
};

export const showToast = ({
	type,
	title,
	description,
}: {
	type: "success" | "error";
	title: string;
	description: string;
}) => {
	// toast.success(message);

	type === "success"
		? toast(
				<div className='flex gap-4 items-center '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='w-8 h-8 text-green-400'
					>
						<path
							fillRule='evenodd'
							d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
							clipRule='evenodd'
						/>
					</svg>
					<div className='flex flex-col'>
						<div className='text-lg font-semibold'>{title}</div>
						<div>{description}</div>
					</div>
				</div>,
				{
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					closeButton: false,
					bodyClassName:
						"text-gray-900 border rounded-2xl backdrop-blur-lg bg-green-50/100",
				}
		  )
		: toast(
				<div className='flex gap-4 items-center '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='w-8 h-8 text-red-400'
					>
						<path
							fillRule='evenodd'
							d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z'
							clipRule='evenodd'
						/>
					</svg>

					<div className='flex flex-col'>
						<div className='text-lg font-semibold'>{title}</div>
						<div>{description}</div>
					</div>
				</div>,
				{
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					closeButton: false,
					bodyClassName:
						"text-gray-900 border rounded-2xl backdrop-blur-md bg-red-50/100",
				}
		  );
};

// return type === "success" ? (
// 	<div>
// 		<div className='flex gap-4 items-center '>
// 			<svg
// 				xmlns='http://www.w3.org/2000/svg'
// 				viewBox='0 0 24 24'
// 				fill='currentColor'
// 				className='w-9 h-9 text-green-400'
// 			>
// 				<path
// 					fill-rule='evenodd'
// 					d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
// 					clip-rule='evenodd'
// 				/>
// 			</svg>
// 			<div className='flex flex-col'>
// 				<div className='text-lg font-semibold'>{title}</div>
// 				<div>{description}</div>
// 			</div>
// 		</div>
// 	</div>
// ) : (
// 	<div>Error</div>
// );
