import Link from 'next/link'
import { getProfile } from '@/lib/api'

export default async function Home() {
  const profile = await getProfile()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex items-center bg-white p-4 pb-2 justify-between">
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Welcome to Jonathan's Portfolio</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="text-[#111418]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow p-4">
        {/* <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
               style={{backgroundImage: `url(${profile.image || "/images/default-profile.jpg"})`}}></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">{profile.name}</p>
            <p className="text-[#637588] text-base font-normal leading-normal">{profile.title}</p>
            <p className="text-[#637588] text-base font-normal leading-normal">{profile.location}</p>
          </div>
        </div> */}

        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{backgroundImage: `url(${profile.image || "/images/default-profile.jpg"})`}}></div>
          
          {/* Profile Info */}
          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">{profile.name}</p>
            <p className="text-[#637588] text-base font-normal leading-normal">{profile.title}</p>
            <p className="text-[#637588] text-base font-normal leading-normal">{profile.location}</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-4">
        <a href="mailto:uhurussemakula069@gmail.com">
          <button className="mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] w-full sm:w-auto">
            <span className="truncate">Contact</span>
          </button>
        </a>
        </div>



        {/* <button className="mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] w-full sm:w-auto">
          <span className="truncate">Contact</span>
        </button> */}

        <section className="mt-8">
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">About</h2>
          <p className="text-[#111418] text-base font-normal leading-normal">{profile.about}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Contact</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal">Email</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">{profile.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal">Phone</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">{profile.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal">Address</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">{profile.address}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto">
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <Link href="/projects" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#f0f2f4] text-[#111418] text-base font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">Projects</span>
            </Link>
            <Link href="/resume" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#f0f2f4] text-[#111418] text-base font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">Resume</span>
            </Link>
          </div>
        </div>
        <div className="h-5 bg-white"></div>
      </footer>
    </div>
  )
}
