import React from 'react'

const About = () => {
  return (
    <section>
  <div class="bg-white rounded-lg shadow-xl mt-4 pr-4">


<div class="flex flex-col items-start">
<div class="flex justify-between items-center w-full px-4 py-2">
   
    <div class="flex items-center gap-2">
   
      <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
        JM
      </div>
     
      <div class="flex flex-col">
        <h2 class="text-xs font-semibold text-gray-700">Joanah Marie Aldave</h2>
        <span class="text-xs text-gray-500">@jmaldave</span>
      </div>
    </div>
 
    <div class="text-xs text-gray-500">12 hours ago</div>
  </div>  
</div>

<div class="flex flex-row gap-0">
<div class="flex flex-col p-2 border border-indigo-700 w-[25%] ml-10 my-2">
<span class="text-xs text-gray-600 font-semibold pb-1">Location</span>
<input type="text" id="Location" class="text-xs bg-indigo-50 border border-indigo-200 text-gray-700
 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-70 p-1.5 dark:bg-gray-700 dark:border-gray-600
  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Novaliches, Bayan Glori" required />
  <span class="text-xs pt-4 text-gray-600 font-semibold pb-1">Destination</span>
<input type="text" id="Location" class="text-xs bg-indigo-50 border border-indigo-200 text-gray-700
 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-70 p-1.5 dark:bg-gray-700 dark:border-gray-600
  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intramuros, Manila City" required />
 
 <div class="flex flex-col border border-indigo-700 w-70 mt-7 rounded-lg">
    <div class="flex flex-col items-start">
        <div class="flex justify-between items-center w-full px-2 py-2">
            <span class="text-xs text-gray-700">Types of Vehicles </span>
                <span class="text-xs text-gray-700">Fare: ₱200.00</span>
        </div>  </div>
    <div class="flex flex-row justify-between w-50 m-1 rounded-lg bg-indigo-50 py-3 px-8">
      <div class="flex flex-col items-center"><img src="src/pages/jeep.png" alt="Jeep" class="w-7 h-7" />
      <span class="text-[8px] text-gray-500">Jeep</span></div>
      <div class="flex flex-col items-center"><img src="src/pages/ejeep.png" alt="Modern Jeep" class="w-7 h-7" />
      <span class="text-[8px] text-gray-500">Modern jeep</span></div>
      <div class="flex flex-col items-center"><img src="src/pages/bus.png" alt="Bus" class="w-7 h-7" />
      <span class="text-[8px] text-gray-500">Bus</span></div>
    </div>
    <span class="flex justify-center items-center text-[9px] text-gray-500">Estimated Time: 45 minutes to 1.5 hours depending on traffic.</span>
    <span class="text-xs text-gray-700 px-2 pt-6">Route Overview</span>

        
    <div class="-my-5">
  <div class="relative pl-1 sm:pl-24 pt-6 group">
    <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-green-600 sm:before:ml-[5rem] before:self-start before:-translate-x-1/2 before:translate-y-1 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-green-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[5rem] after:-translate-x-1/2 after:translate-y-1">
      <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs w-20 h-6 mb-3 sm:mb-0 text-emerald-600 rounded-full">Get On</time>
    </div>

    <div class="text-[10px] mt-2 text-gray-600">
      Ride a jeepney from Glori Bayan, Novaliches, going towards Monumento or EDSA.
    </div>
    <div class="text-[10px] my-2 text-gray-600">Get down at North Avenue along EDSA.</div>
    <div class="text-[10px] my-2 text-gray-600">Take a jeep or bus heading towards Quezon Avenue.</div>
    <div class="text-[10px] mt-2 text-gray-600">
      Get down at the intersection of Quezon Avenue and España Boulevard.
    </div>
  </div>

  <div class="relative pl-1 py-1.5 group">
    <div class="flex flex-col sm:pl-24  sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[5rem] before:self-start before:-translate-x-1/2 before:translate-y-1 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-700 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs w-20 h-6 mb-3 sm:mb-0 text-blue-700 rounded-full">Get Off</time>
      <div class="text-[10px] mt-2 text-gray-600">
        Ride a jeep to Manila, then get off at Lerma Street.
      </div>
      
    </div>

    <div class="flex flex-row mb-6 sm:pl-16 gap-2 ">
 <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><circle cx="13" cy="4" r="2" fill="#6366F1"/><path fill="#6366F1" d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892l.633-1.896l-2.675-.892l-1.663-2.495a2 2 0 0 0-.769-.679l-1.434-.717a2 2 0 0 0-1.378-.149l-3.193.797a2 2 0 0 0-1.306 1.046l-1.794 3.589l1.789.895l1.794-3.589l2.223-.556l-1.804 8.346l-3.674 2.527l1.133 1.648l3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388l2.517 1.888l.925 4.625l1.961-.393l-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628l.647-3.885z"/></svg>
 <div class="text-[10px] mt-2 text-gray-600">
 Walk to Intramuros via Padre Burgos or General Luna Street.
      </div>
 </div>

  </div>
  
</div>

<span class="text-xs text-gray-600 font-semibold my-2">Your experiences</span>
<span class="text-xs text-gray-600">We started our journey at the Intramuros gates, 
  aiming to explore the historic walled city. We initially struggled with finding parking, 
  but a guard directed us to a nearby lot. The cobblestone streets were enchanting but tricky
   to navigate without a map. A tricycle driver offered a short tour, which made it easier to
    locate iconic spots like Fort Santiago and San Agustin Church. Getting lost led us to a
     quaint café serving authentic Filipino dishes.</span>
</div>


</div>

<div class="flex flex-col p-1 border border-indigo-700 ml-1 my-2">
  
<figure class="relative">
  
    <img class="rounded-lg w-[300px] h-44" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description"></img>
  
  <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p>Do you want to get notified when a new component is added to Flowbite?</p>
  </figcaption>
</figure>

</div>

</div>















 
    <div class="text-xs text-gray-500 ml-14 pt-1">
   
      <span class="mb-2 block">Destination: Intramuros, Manila</span>
   
      <span class="mb-1 block">Tourist Experience:</span>
      <span> We started our journey at the Intramuros gates, aiming to explore the historic walled city. We initially
        struggled with finding parking, but a guard directed us to a nearby lot. The cobblestone streets were
        enchanting but tricky to navigate without a map. A tricycle driver offered a short tour, which made it
        easier to locate iconic spots like Fort Santiago and San Agustin Church. Getting lost led us to a quaint
        café serving authentic Filipino dishes.</span>
        </div>


<div class="flex justify-between w-full">


<div class="flex flex-row my-3">
<div class="flex items-center my-2 ml-6 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>  </div>


   <div class="flex items-center">
    <span class="text-xs font-semibold text-gray-700 mr-2">Status</span>
    </div>


    <div class="flex items-center border border-green-400 text-green-600 px-2 py-0.5 rounded-md mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
          <span class="text-xs font-semibold">Approved by Admin</span>
    </div>


 
</div>


<div class="flex items-center mr-4">
<button class="flex items-center border border-green-400 text-green-600 px-2 py-1 rounded-md mt-1 mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
        <span class="text-xs font-semibold ml-1">50</span>
  </button>


  <button class="flex items-center border border-red-400 text-red-600 px-2 py-1 rounded-md mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
        <span class="text-xs font-semibold ml-1">2</span>
        
</button>


</div>
  </div>
</div>
    </section>
  )
}

export default About
