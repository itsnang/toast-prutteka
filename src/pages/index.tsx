import { showToast } from "@/components/Toast";
import { Inter } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	// const notify = () =>
	// 	toast(
	// 		<div className='flex gap-4 items-center '>
	// 			<svg
	// 				xmlns='http://www.w3.org/2000/svg'
	// 				viewBox='0 0 24 24'
	// 				fill='currentColor'
	// 				className='w-9 h-9 text-green-400'
	// 			>
	// 				<path
	// 					fillRule='evenodd'
	// 					d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
	// 					clipRule='evenodd'
	// 				/>
	// 			</svg>
	// 			<div className='flex flex-col'>
	// 				<div className='text-lg font-semibold'>Succesfully</div>
	// 				<div>Event create successfully. You can view the event now.</div>
	// 			</div>
	// 		</div>,
	// 		{
	// 			position: "top-center",
	// 			autoClose: 5000,
	// 			hideProgressBar: true,
	// 			pauseOnHover: true,
	// 			draggable: true,
	// 			progress: undefined,
	// 			theme: "light",
	// 			closeButton: false,
	// 		}
	// 	);

	const handleToast = () => {
		showToast({
			type: "success",
			title: "Succesfully",
			description: "Event create successfully. You can view the event now.",
		});
	};

	return (
		<>
			<div className='justify-center flex h-screen items-center '>
				<button
					// onClick={notify}
					onClick={handleToast}
					type='button'
					className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
				>
					Show Toast
				</button>
			</div>
		</>
	);
}
