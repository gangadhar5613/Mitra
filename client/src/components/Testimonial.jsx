import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Testimonial extends Component {
	render() {
		return (
			<>
				<div className="text-center text-5xl mb-5 font-semibold">
					<h2 className="text-red-700 font-light">
						Those who benifited through <span className="text-red-700 font-bold">Mitra</span>
					</h2>
				</div>
				<Carousel className="justify-center my-5 px-96 mx-40 items-center flex " showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={6100} position="center ">
					<div className="max-w-md items-center justify-center w-full lg:flex ">
						<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
							<img className="h-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
						</div>
						<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
							<div className="mb-8 ">
								<div className="text-black font-bold text-2xl mb-2">Kushal Dave</div>
								<div className="text-black font-bold text-xl mb-4">Age 27 years</div>
								<p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
							</div>
						</div>
					</div>

					<div className="max-w-md w-full lg:flex">
						<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
							<img src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
						</div>
						<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
							<div className="mb-8">
								<div className="text-black font-bold text-2xl mb-2">Kushal Dave</div>
								<div className="text-black font-bold text-xl mb-4">Age 27 years</div>
								<p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
							</div>
						</div>
					</div>

					<div className="max-w-md w-full lg:flex">
						<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
							<img className="h-full" src="https://images.unsplash.com/photo-1543080853-556086153871?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
						</div>
						<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
							<div className="mb-8">
								<div className="text-black font-bold text-2xl mb-2">Kushal Dave</div>
								<div className="text-black font-bold text-xl mb-4">Age 27 years</div>
								<p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
							</div>
						</div>
					</div>
					<div className="max-w-md w-full lg:flex">
						<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
							<img className="h-full" src="https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
						</div>
						<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
							<div className="mb-8">
								<div className="text-black font-bold text-2xl mb-2">Kushal Dave</div>
								<div className="text-black font-bold text-xl mb-4">Age 27 years</div>
								<p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
							</div>
						</div>
					</div>
					<div className="max-w-md w-full lg:flex">
						<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
							<img className="h-full" src="https://images.unsplash.com/photo-1575632312417-71da8ed4992d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
						</div>
						<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
							<div className="mb-8">
								<div className="text-black font-bold text-2xl mb-2">Kushal Dave</div>
								<div className="text-black font-bold text-xl mb-4">Age 27 years</div>
								<p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
							</div>
						</div>
					</div>
					<div className="max-w-md w-full lg:flex">
						<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
							<img className="h-full" src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
						</div>
						<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
							<div className="mb-8">
								<div className="text-black font-bold text-2xl mb-2">Kushal Dave</div>
								<div className="text-black font-bold text-xl mb-4">Age 27 years</div>
								<p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
							</div>
						</div>
					</div>
					<div className="max-w-md w-full lg:flex">
						<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
							<img className="h-full" src="https://images.unsplash.com/photo-1584361853901-dd1904bb7987?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
						</div>
						<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
							<div className="mb-8">
								<div className="text-black font-bold text-2xl mb-2">Kushal Dave</div>
								<div className="text-black font-bold text-xl mb-4">Age 27 years</div>
								<p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
							</div>
						</div>
					</div>
					<div className="max-w-md w-full lg:flex">
						<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
							<img className="h-full" src="https://images.unsplash.com/photo-1548367074-c9804f727062?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
						</div>
						<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
							<div className="mb-8">
								<div className="text-black font-bold text-2xl mb-2">Kushal Dave</div>
								<div className="text-black font-bold text-xl mb-4">Age 27 years</div>
								<p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
							</div>
						</div>
					</div>
					<div className="max-w-md w-full lg:flex">
						<div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
							<img className="h-full" src="https://images.unsplash.com/photo-1543080853-556086153871?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
						</div>
						<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
							<div className="mb-8">
								<div className="text-black font-bold text-2xl mb-2">Kushal Dave</div>
								<div className="text-black font-bold text-xl mb-4">Age 27 years</div>
								<p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
							</div>
						</div>
					</div>
				</Carousel>
			</>
		);
	}
}

export default Testimonial;