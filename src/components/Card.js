import React, { Component } from "react";
import illustrationhero from "../imgs/illustration-hero.svg";
import iconmusic from "../imgs/icon-music.svg";
export default class Card extends Component {
  render() {
    return (
      <div className="bg-upImg bg-no-repeat bg-top bg-contain bg-PaleBlue flex h-screen justify-center items-center w-cardWidth">
        <div className="grid place-content-center bg-white border rounded-2xl w-96">
          <div className=" rounded-2xl overflow-hidden shadow-indigo-500 ">
            <img className="w-full" src={illustrationhero} alt="" />

            <div className="flex flex-col items-center px-8 py-8">
              <div className="text-sm md:text-ownfSize font-bold grid place-content-center pb-6">
                Order Summary
              </div>
              <p className="text-DesaturatedBlue text-center pb-6">
                You can now listen to millions of songs,audiobooks, and podcasts
                on any device anywhere you like!
              </p>

              <div className=" flex p-3 w-80 rounded-xl overflow-hidden justify-evenly bg-VeryPaleBlue items-center">
                <div className="flex space-x-5">
                  <img src={iconmusic} alt="" />

                  <div className="pr-[4px]">
                    <p className="font-bold ">Annual Plan</p>
                    <p className="text-DesaturatedBlue">$59.99/year</p>
                  </div>
                </div>
                <div className="text-BrightBlue font-bold pl-[22px]">
                  Change
                </div>
              </div>
              <div className="pt-4 pb-4">
                <button className="px-8 w-80 py-2 hover:bg-blue-500 place-content-center rounded-xl overflow-hidden text-PaleBlue bg-BrightBlue m-4 shadow-100px">
                  Proceed to Payment
                </button>
              </div>
              <div className="font-bold">Cancel Order</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
