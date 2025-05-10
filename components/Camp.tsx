import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-8 lg:px-20 lg:py-10 border-blue-500 border-2">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-green-600 p-4">
            <Image src="/folded-map.svg" alt="map" height={28} width={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-[700] text-white">{title}</h4>{" "}
            <p className="text-[14px] font-[400] text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <span className="flex -space-x-4 erflow-hidden">
            {PEOPLE_URL.map((url, index) => (
              <Image
                src={url}
                key={index}
                alt="person"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </span>
          <p className="text-[16px] font-[700] lg:text-[20px] font-[700] text-white">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:mx-auto max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-[url('/img-1.png')]"
          title="Scarlett Speedster Camp"
          subtitle="Peru"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-[url('/img-2.png')]"
          title="Mountain view"
          subtitle="India"
          peopleJoined="30+ Joined"
        />
      </div>

      <div className="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-600 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full rounded-3xl overflow-hidden">
          <h2 className="text-[24px] font-[400] md:text-[32px] font-[400] 2xl:text-[64px] font-[400] leading-[120%] capitalize text-white">
            <strong>Feeling lost</strong> and Not knowing the way?
          </h2>
          <p className="text-[14px] font-[400] md:text-[16px] font-[400] mt-5 text-white">
            Starting the anxiety of the climbers when visiting a new climbing
            location, the possibility of getting lost is very large. That's why
            we are here for those of you who want to start an adventure
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
