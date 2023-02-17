import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Maps from "../components/Maps";
import dataSearch from "../utils/dataSearch";

const myDate = (date) => {
  return format(new Date(date), "dd MMMM yy");
};

const Search = ({ searchResult }) => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuest } = router.query;

  const range = `${myDate(startDate)} - ${myDate(endDate)}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guest`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuest} guest
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResult?.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px] overflow-hidden">
          <Maps searchResult={searchResult} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  console.log("context: ", context.query);

  try {
    const searchResult = await fetch("https://links.papareact.com/isz").then(
      (res) => res.json()
    );

    return {
      props: {
        searchResult,
      },
    };
  } catch (error) {
    console.log("error fetch: ", error);
    return {
      props: {
        searchResult: dataSearch,
      },
    };
  }
}
