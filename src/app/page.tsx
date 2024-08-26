
// 'use client'
// import MultiRangeSlider from "@/components/FilterRange";
import { FilterRange } from "@/components/FilterRange";
import { FilterSection } from "@/components/FilterSection";
import { Navigator } from "@/components/Navigator";
import { Pagination } from "@/components/Pagination";
import { ProductCard } from "@/components/ProductCard";
import { SearchBox } from "@/components/topnav/SearchBox";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[100vh] mx-5 sm:mx-8 lg:12 xl:mx-40 mt-12">

      <div className="flex items-start justify-between mt-20">
        <Navigator />

        <div className="hidden md:flex gap-[12px] flex-col w-[223px] h-[63px] items-center ">
          <p className="w-full text-center font-normal text-sm text-[#365758]">
            GKV mit Kostenübernahme?
          </p>
          <button className="w-full flex items-center justify-center rounded-tl-[24px] rounded-br-[24px] border-[2px] border-[#62C3C6] ">
            responsibilita
          </button>
        </div>
      </div>


      <div className="w-full flex flex-wrap items-center justify-between mt-5">
        <h2 className="hidden lg:flex items-center  justify-center gap-5">
          <Image src="/activeleaf.svg" width={15} height={20} alt="search logo" />
          <Image src="/bluten.svg" width={95} height={20} alt="bluten logo" />
        </h2>

        <div className="flex items-center justify-end gap-5">
          <SearchBox className="" />

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

        <FilterSection className="hidden lg:flex sticky mt-16 w-[250px] left-0 " />

        <div>
          <div className="grid p-10 grid-cols-1 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16">
            <div className="w-full">
              <ProductCard
                title="Cannabis Flos 18/1 PT Mango"
                isSpecial={true}
                tags={["Kultivar", "Mango", "Genetik", "Hybrid"]}
                discount={18}
              />
            </div>
            <div className="w-full">
              <ProductCard
                title="Cannabis Flos 18/1 PT Mango"
                isSpecial={true}
                tags={["Kultivar", "Mango", "Genetik", "Hybrid"]}
                discount={18}
              />
            </div>
            <div className="w-full">
              <ProductCard
                title="Cannabis Flos 18/1 PT Mango"
                isSpecial={true}
                tags={["Kultivar", "Mango", "Genetik", "Hybrid"]}
                discount={18}
              />
            </div>
            <div className="w-full">
              <ProductCard
                title="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                isSpecial={false}
                tags={["Kultivar", "Pink Kush", "Genetik", "Hybrid"]}
                discount={25}
              />
            </div>
            <div className="w-full">
              <ProductCard
                title="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                isSpecial={false}
                tags={["Kultivar", "Pink Kush", "Genetik", "Hybrid"]}
                discount={25}
              />
            </div>
            <div className="w-full">
              <ProductCard
                title="Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify"
                isSpecial={false}
                tags={["Kultivar", "Pink Kush", "Genetik", "Hybrid"]}
                discount={25}
              />
            </div>
            <div className="w-full">
              <ProductCard
                title="Cannabis Flos 18/1 PT Mango"
                isSpecial={true}
                tags={["Kultivar", "Mango", "Genetik", "Hybrid"]}
                discount={18}
              />
            </div>
            <div className="w-full">
              <ProductCard
                title="Cannabis Flos 18/1 PT Mango"
                isSpecial={true}
                tags={["Kultivar", "Mango", "Genetik", "Hybrid"]}
                discount={18}
              />
            </div>
            <div className="w-full">
              <ProductCard
                title="Cannabis Flos 18/1 PT Mango"
                isSpecial={true}
                tags={["Kultivar", "Mango", "Genetik", "Hybrid"]}
                discount={18}
              />
            </div>
          </div>
          <Pagination />
        </div>

      </section>
    </main>
  );
}
