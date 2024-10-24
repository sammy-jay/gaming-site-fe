import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      {/* Hero section */}
      <section
        className="min-h-[100vh] max-w-[1440px] overflow-x-hidden bg-[#0F0C21] flex relative justify-center items-center"
        id="hero-section"
      >
        {/* <Image
          src="/images/banner-2.png"
          width={600}
          height={600}
          className="absolute -left-[300px] top-0 bottom-0 object-fill"
          alt="banner-1"
        />
        <Image
          src="/images/banner-1.png"
          width={700}
          height={1050}
          className="absolute -right-[250px] top-0 bottom-0"
          alt="banner-1"
        /> */}
        <div className="flex flex-col items-center gap-y-4 lg:gap-y-0">
          <h1 className="font-bold text-[32px] lg:text-[64px] text-white text-center">
            Play Games
          </h1>
          <h1 className="font-bold text-[32px] lg:text-[64px] text-[#FFCC00] text-center">
            Win Cash
          </h1>
          <p className="text-white max-w-[400px] text-center text-[16px] lg:text-[20px]">
            Compete game tournaments for cash prizes or play head to head for
            real money.
          </p>
          <button className="bg-[#FFCC00] mt-4 w-max py-2 px-4 rounded-md text-black">
            Play Now
          </button>
        </div>
      </section>
      <div className="bg-gradient-to-b from-[#0F0C21] to-[#191921] flex flex-row flex-wrap px-[8%] justify-around gap-3 py-12">
        <div className="bg-[#050508] w-full md:max-w-[400px] h-[150px] justify-start space-x-6 rounded-lg flex flex-row py-6 px-8">
          <Image
            src="/images/counter-icon-1.png"
            alt="counter-1"
            height={75}
            width={85}
          />
          <div className="flex flex-col justify-between">
            <p className="text-white text-[30px] lg:text-[42px]">18,328</p>
            <p className="text-[18px] text-[#239921]">Profile Created</p>
          </div>
        </div>
        <div className="bg-[#050508] w-full md:max-w-[400px] h-[150px] justify-start space-x-6 rounded-lg flex flex-row py-6 px-8">
          <Image
            src="/images/counter-icon-2.png"
            alt="counter-1"
            height={75}
            width={85}
          />
          <div className="flex flex-col justify-between">
            <p className="text-white text-[30px] lg:text-[42px]">343</p>
            <p className="text-[18px] text-[#239921]">Upcoming Tournaments</p>
          </div>
        </div>
        <div className="bg-[#050508] w-full md:max-w-[400px] h-[150px] justify-start space-x-6 rounded-lg flex flex-row py-6 px-8">
          <Image
            src="/images/counter-icon-3.png"
            alt="counter-1"
            height={75}
            width={85}
          />
          <div className="flex flex-col justify-between">
            <p className="text-white text-[30px] lg:text-[42px]">$69,216</p>
            <p className="text-[18px] text-[#239921]">Distributed</p>
          </div>
        </div>
      </div>
      <section className="bg-gradient-to-t from-[#060518] to-[#191921]  pt-[70px] px-[8%] pb-[100px]">
        <div className="flex flex-row">
          <h1 className="font-bold text-[24px] lg:text-[43px] pb-4 text-left lg:text-center text-white">
            Browse Games
          </h1>
        </div>
        <div className="flex flex-row gap-4 overflow-x-auto">
          <div className="flex flex-col gap-y-2 min-w-[240px]">
            <Image
              src="/images/browse-game-img-1.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Headshot Master</p>
            <p className="text-gray-300 text-[16px]">6 live matches</p>
          </div>
          <div className="flex flex-col gap-y-2 min-w-[240px]">
            <Image
              src="/images/browse-game-img-2.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Headshot Master</p>
            <p className="text-gray-300 text-[16px]">6 live matches</p>
          </div>
          <div className="flex flex-col gap-y-2 min-w-[240px]">
            <Image
              src="/images/browse-game-img-3.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Headshot Master</p>
            <p className="text-gray-300 text-[16px]">6 live matches</p>
          </div>
          <div className="flex flex-col gap-y-2 min-w-[240px]">
            <Image
              src="/images/browse-game-img-4.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Headshot Master</p>
            <p className="text-gray-300 text-[16px]">6 live matches</p>
          </div>
          <div className="flex flex-col gap-y-2 min-w-[240px]">
            <Image
              src="/images/browse-game-img-6.png"
              width={215}
              height={260}
              alt="game-1"
              className="rounded-md border-[1px] border-blue-800"
            />
            <p className="text-white text-[22px] ">Headshot Master</p>
            <p className="text-gray-300 text-[16px]">6 live matches</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#060518] to-[#191921] px-[8%] pt-12 pb-[100px]">
        <div className="flex flex-row justify-start lg:justify-center">
          <h1 className="font-bold text-[24px] lg:text-[43px] pb-4 text-left lg:text-center text-white">
            Compete In
          </h1>
        </div>
        <div className="flex flex-row gap-4 overflow-x-auto">
          <div className="flex flex-col min-w-[400px] gap-y-2 rounded-md border-[1px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/compete-img-1.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Prize Pool
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Play Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
          <div className="flex flex-col min-w-[400px] gap-y-2 rounded-md border-[1px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/compete-img-2.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Prize Pool
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Play Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
          <div className="flex flex-col min-w-[400px] gap-y-2 rounded-md border-[1px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/compete-img-3.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Prize Pool
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Play Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#191921] w-full px-[8%] pt-12 pb-[100px]">
        <div className="flex flex-row w-[100%] h-[320px] justify-between rounded-2xl bg-[#060417]">
          <Image
            src="/images/how-play-illus.png"
            alt="illustration"
            width={269}
            height={294}
            className="hidden lg:flex"
          />
          <div className="flex-1 mt-12 flex flex-col items-center gap-2">
            <h1 className="text-[24px] lg:text-[43px] pb-4 text-left lg:text-center font-bold text-white">
              How to Play
            </h1>

            <div className="w-[90%] mt-8 flex flex-row justify-center space-x-12 items-baseline">
              <div className="flex flex-col">
                <Image
                  src="/images/how-play-icon-1.png"
                  alt="illustration-1"
                  width={80}
                  height={80}
                />
                <p className="text-white font-bold text-[20px]">Register</p>
              </div>
              <div className="flex flex-col">
                <Image
                  src="/images/how-play-icon-2.png"
                  alt="illustration-1"
                  width={80}
                  height={80}
                />
                <p className="text-white font-bold text-[20px]">Play</p>
              </div>
              <div className="flex flex-col">
                <Image
                  src="/images/how-play-icon-3.png"
                  alt="illustration-1"
                  width={90}
                  height={90}
                />
                <p className="text-white font-bold text-[20px]">Get Paid</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="bg-[#191921] w-full px-[8%] pt-12 pb-[100px]">
        <div className="flex flex-row justify-center">
          <h1 className="font-bold text-[24px] lg:text-[43px] pb-4 text-left lg:text-center text-white">
            Featured Tournaments
          </h1>
        </div>
        <div className="flex flex-row gap-4 overflow-x-auto">
          <div className="flex flex-col gap-y-2 rounded-md border-[1px] min-w-[400px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/tournaments-img-1.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Tournament By
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Join Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 rounded-md border-[1px] min-w-[400px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/tournaments-img-2.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Tournament By
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Join Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 rounded-md border-[1px] min-w-[400px] border-gray-800 bg-[#1A1A22]">
            <Image
              src="/images/tournaments-img-3.png"
              width={425}
              height={190}
              alt="compete-1"
              className=""
            />
            <div className="p-4 flex flex-col gap-y-1">
              <p className="text-gray-300 text-[16px]">Ends in 14H 21M 16S</p>
              <p className="text-white text-[22px] ">Ninja Assassin</p>
              <p className="text-gray-300 text-[16px]"></p>

              <button className="bg-[#313144] mt-4 py-3 px-4 rounded-md text-white">
                Tournament By
              </button>
              <button className="bg-[#FFCC00] mt-4  py-3 px-4 font-bold rounded-md text-black">
                Join Now
              </button>
              <p className="text-gray-300 text-[16px] text-center">
                Game ID: 435
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gradient-to-b from-[#191921] via-[#060518] to-[#191921] w-full px-[8%] pt-12 pb-[100px]">
        <div className="flex flex-row justify-start">
          <h1 className="font-bold text-[24px] lg:text-[43px] pb-4 text-left lg:text-center text-white">
            Gamers Review
          </h1>
        </div>
        <div className="w-full flex flex-row gap-4 overflow-x-auto">
          <div className="flex flex-col gap-y-4 rounded-md border-[1px] p-6 py-8 min-w-[400px] border-gray-800 bg-[#100E21]">
            <p className="text-gray-300 text-[18px]">100% Transparency</p>
            <p className="text-white text-[20px] font-serif">
              I can say the innovation behind Dooplo is nothing short of
              incredible. You can’t beat the on-chain experience with its
            </p>
            <div className="text-gray-300 mt-4 text-[16px] flex flex-row gap-3">
              <Image
                src="/images/profile-image-3.png"
                width={40}
                height={40}
                alt="profile-image-3"
                className="rounded-full object-contain"
              />
              <div className="flex flex-col gap-1">
                <p className="text-white">Devon Lee</p>
                <p className="text-[#FFCC00]">3244 followers</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 rounded-md border-[1px] p-6 py-8 min-w-[400px] border-gray-800 bg-[#100E21]">
            <p className="text-gray-300 text-[18px]">100% Transparency</p>
            <p className="text-white text-[20px] font-serif">
              I can say the innovation behind Dooplo is nothing short of
              incredible. You can’t beat the on-chain experience with its
            </p>
            <div className="text-gray-300 mt-4 text-[16px] flex flex-row gap-3">
              <Image
                src="/images/profile-image-3.png"
                width={40}
                height={40}
                alt="profile-image-3"
                className="rounded-full object-contain"
              />
              <div className="flex flex-col gap-1">
                <p className="text-white">Devon Lee</p>
                <p className="text-[#FFCC00]">3244 followers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
    </main>
  );
}
