import React from "react";
import Image from "next/image";
import bannerImage from "./images/hanhtinhhienlanh.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Product banner */}
      <div
        className="bg-cover bg-center py-24"
        style={{ backgroundColor: "#b76e79" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-white font-bold mb-4">
            Welcome to our product!
          </h1>
          <p className="text-xl text-white mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Image
           
            src={require('./images/hanhtinhhienlanh.svg')}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <button className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Get started
          </button>
        </div>
      </div>

      {/* Feature listing */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Pricing</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-8">
                <h3 className="text-xl font-semibold mb-4">Basic</h3>
                <p className="text-gray-700 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="text-3  xl font-bold text-gray-900 mb-4">
                  $10/month
                </div>
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                  Buy now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-8">
                <h3 className="text-xl font-semibold mb-4">Premium</h3>
                <p className="text-gray-700 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  $20/month
                </div>
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                  Buy now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow p-8">
                <h3 className="text-xl font-semibold mb-4">Ultimate</h3>
                <p className="text-gray-700 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="text-3xl font-bold text-gray-900 mb-4">
                  $30/month
                </div>
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
