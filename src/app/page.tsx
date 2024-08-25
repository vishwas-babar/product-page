
// 'use client'
// import MultiRangeSlider from "@/components/FilterRange";
import { FilterRange } from "@/components/FilterRange";
import { FilterSection } from "@/components/FilterSection";
import { Navigator } from "@/components/Navigator";
import { ProductCard } from "@/components/ProductCard";
import { SearchBox } from "@/components/topnav/SearchBox";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[100vh] mx-40 mt-12">

      <div className="flex items-start justify-between mt-20">
        <Navigator />

        <div className="flex gap-[12px] flex-col w-[223px] h-[63px] items-center ">
          <p className="w-full text-center font-normal text-sm text-[#365758]">
            GKV mit Kostenübernahme?
          </p>
          <button className="w-full flex items-center justify-center rounded-tl-[24px] rounded-br-[24px] border-[2px] border-[#62C3C6] ">
            responsibilita
          </button>
        </div>
      </div>


      <div className="w-full flex items-center justify-between mt-5">
        <h2 className="flex items-center justify-center gap-5">
          <Image src="/activeleaf.svg" width={15} height={20} alt="search logo" />
          <Image src="/bluten.svg" width={95} height={20} alt="bluten logo" />
        </h2>

        <div className="flex items-center justify-end gap-5">
          <SearchBox />

          <div className="w-fit h-[34px] px-[12px] py-[2px] flex items-center justify-center gap-[10px] bg-[#62C3C64D] rounded-sm font-semibold text-[#365758]">
            <small>Sortieren nach</small>
            <Image src={'/arrow_down.svg'} width={16} height={16} alt='down arrow logo' />
          </div>

          <div className="w-fit h-[34px] px-[12px] py-[2px] flex items-center justify-center gap-[10px] bg-[#62C3C64D] rounded-sm font-semibold text-[#365758]">
            <small>Verfügbarkeit</small>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-6 h-2 bg-[#bddcdc] rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-[#62C3C6] after:content-[''] after:absolute after:-top-[2px] after:left-[0px] after:bg-[#62C3C6] after:border-[#62C3C6] after:border after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
            </label>
          </div>

          <div className="w-fit h-[34px] px-[12px] py-[2px] flex items-center justify-center gap-[10px] bg-[#62C3C64D] rounded-sm font-semibold text-[#365758]" >
            <Image src={'/listview.svg'} width={24} height={24} alt='list view logo' />
          </div>
        </div>
      </div>

      <section className="flex justify-between">
        <FilterSection className=" sticky mt-16 left-0" />

        <div className="w-full mt-16 ml-10">
          <ProductCard
            title="Product 1"
            price={100}
            isSpecial={true}
          />
        </div>
        {/* <div className="ml-40 mt-16">

          <FilterRange
            // className="sticky top-24"
            title="Preis"
            min={0}
            max={1000}
            type="percentage"
          />
          
        </div> */}
      </section>
    </main>
  );
}
