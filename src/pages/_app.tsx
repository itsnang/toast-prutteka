import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Toast } from "@/components/Toast";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* <ToastContainer
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
					"flex gap-2 items-center bg-white rounded-lg p-1 justcify-center border rounded-lg mx-8"
				}
				className={() =>
					"w-full max-w-4xl fixed top-4 z-50 right-1/2 transform translate-x-1/2"
				}
			/> */}
			<Toast />
			<Component {...pageProps} />
		</>
	);
}
