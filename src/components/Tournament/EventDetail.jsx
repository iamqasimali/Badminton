import React from "react";
import EventImg from "../../assets/images/Tournament/event_details.png";

const Categories = [
  {
    title: "Men's Challenge League",
    held_on: "Held on Sunday, July 14",
    application_close: "Applications close on Friday, July 5",
  },
  {
    title: "Women's Challenge League",
    held_on: "Held on Sunday, July 14",
    application_close: "Applications close on Friday, July 5",
  },
  {
    title: "Men's Top Challenge League",
    held_on: "Held on Sunday, July 14",
    application_close: "Applications close on Friday, July 5",
  },
  {
    title: "Women's Top Challenge League",
    held_on: "Held on Sunday, July 14",
    application_close: "Applications close on Friday, July 5",
  },
];

const Participients = [
  "Elementary school students",
  "Middle school students",
  "High school students",
  "University students",
  "Vocational school students",
  "Society",
  "Women",
  "People with disabilities",
];

const EventDetail = () => {
  return (
    <>
      <div className="w-full px-24 py-8">
        <p className="text-darkgreen font-dm-sans text-[28px] font-[700] leading-[36.96px] ">
          Event Details
        </p>
        <img
          src={EventImg}
          className="mt-3 w-[463px] h-[400px]"
          width="463px"
          height="400px"
          alt="Event Image"
        />

        <p className="   font-dm-sans text-[32px] font-[700] leading-[42.24px] my-8">
          2024 Crossminton Hachioji Cup - Singles Tournament, Summer, Top League
        </p>
        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          ◆Crossminton◆
        </p>

        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px] mt-4 mb-14">
          "Crossminton" is a new sport that is a hot topic in the West, and in a
          word, it is "badminton without a net".Its feature is that it can be
          played anytime, anywhere, with anyone. It is popular around the world,
          especially in Europe, and tournaments are held in countries around the
          world.Japan is a leader in Asia and the world, and the number of
          players in the country is increasing. Itis a new sport that is said to
          become popular in Japan in the near future.
        </p>

        <p className=" font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          ◆Overview◆
        </p>

        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px] my-6 ">
          This is a national tournament for singles players by level, organized
          by the Japan Crossminton Association.Participants will receive
          national ranking points.
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px] my-6">
          "*Entry will be by class according to level, so you can participate
          regardless of your competitive level."
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px] mt-4">
          Categories:
        </p>
        {
          <ul className="">
            {Categories.map((c, index) => (
              <div key={index} className="flex items-center gap-4">
                <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px] ">
                  {c.title},{"  "} {c.held_on}, {c.application_close}
                </p>
              </div>
            ))}
          </ul>
        }
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px] pt-5">
          ※You can participate in one of the six categories.
        </p>

        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px] ">
          ※Top League (Division 1) is for advanced level, Top League (Division
          2) for intermediate/advanced level, and Challenge League for
          beginner/intermediate level.
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆Basic Info◆
        </p>

        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae hic
          praesentium similique animi, vitae placeat esse rem laborum
          laudantium, ipsam iure molestiae doloremque quia nostrum facere atque
          incidunt minus ea? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Velit praesentium debitis maiores, fuga laborum, porro
          perspiciatis magnam quo facilis odio iusto ex! Impedit mollitia sed
          possimus quidem expedita nihil eveniet?
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆Game Format◆
        </p>

        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          ・Qualifying: First to win 16 points, first to win 1 set・Final
          tournament: First to win 2 sets, first to win 16 points・Qualifying
          league (round robin) → Top 2 players advance to the final
          tournament・Those who lose in the qualifying round will have a
          consolation
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          This may change depending on the number of participants. Please note.
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆Participants◆
        </p>

        <div className="flex flex-wrap gap-3 my-5">
          {Participients.map((p, index) => {
            return (
              <p
                key={index}
                className="bg-gray-100 text-gray-500 font-dm-sans text-[22px] font-[400] leading-[27.28px] p-2 rounded-md"
              >
                {p}
              </p>
            );
          })}
        </div>

        <p className="font-dm-sans text-[32px] font-[700] leading-[42.24px] my-8">
          Management Organization
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆Organizer◆
        </p>

        <p className="text-darkgreen font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          Japan Crossminton Association
        </p>

        <p className="font-dm-sans text-[32px] font-[700] leading-[42.24px] my-8">
          Event Outline
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆Event Date 1◆
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Saturday, July 20, 2024
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Venue name: Konohara Gymnassium
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Address: 2726-8 Nakano-cho, Hachioji-shi, Tokyo 192-0015
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Events held: Top League (2nd division) Men, Top League (2nd division)
          Women
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆Event Date 2◆
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Saturday, July 20, 2024
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Venue name: Konohara Gymnassium
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Address: 2726-8 Nakano-cho, Hachioji-shi, Tokyo 192-0015
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Events held: Top League (2nd division) Men, Top League (2nd division)
          Women
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆Match Day Schedule◆
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Doors open at 9:00, reception from 9:00 to 9:45, match starts at 10:00
          (scheduled)
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆Entry Acceptance Period◆
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          May 27, 2024 (Monday) - July 12, 2024 (Friday)
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆Format Competition◆
        </p>
        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          Qualifying League Format
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆Participants◆
        </p>

        <p className="font-dm-sans text-[24px] font-[500] leading-[31.68px] my-7">
          ◆3rd Place Match◆
        </p>

        <p className="text-gray-500 font-dm-sans text-[24px] font-[500] leading-[31.68px]">
          None
        </p>
      </div>
    </>
  );
};

export default EventDetail;