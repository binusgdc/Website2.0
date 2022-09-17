const JoinBGDC = () => {
    return (
        <>
<div className="container max-w-5xl mx-auto m-8" id="BGDC_Join">
    <div className="text-center m-4">
        <h1 className="mb-8 font-bold break-normal text-3xl md:text-5xl text-gray-800 ">Join Member BGDC</h1>
        <p className="text-sm md:text-base font-bold">Sekali join member BGDC, selamanya menjadi member BGDC!!!</p>
    </div>
    <div className="container:md mx-auto m-4  ">
        <div className="max-w-sm md:max-w-md text-center mx-auto items-center grid grid-cols-2  gap-4">
              <button type="button" className="inline-block px-6 py-2.5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Untuk Non-Binusian</button>
              
              <button type="button" className="inline-block px-6 py-2.5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Untuk Binusian</button>
            </div>
        </div>
        <section className="bg-white border-b py-8">

      <div className="container max-w-5xl mx-auto m-8">
        <div className="flex flex-wrap flex-col-reverse sm:flex-row-reverse">
          <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Komunitas Gaul
                </h3>
                <p className="text-gray-600 mb-8">
                BGDC memakai Discord  sebagai tempat untuk para game developer untuk bertemu dan ngobrol tentang hobi mereka. 
                </p>
                <p className="text-gray-600 mb-8">  
                Server discord memiliki berbagai macam sub komunitas yang mencakupi berbagai interest. 
                </p>
                <div className="flex space-x-2 justify-center md:justify-start">
                  <div>
                      <button type="button" className="inline-block px-6 py-2.5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Join Discord Server BGDC!</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img src="/join1.png" alt="bgdjam test"  />
            </div>
        </div>

        <div className="flex flex-wrap flex-col sm:flex-row-reverse">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img src="/join2.png" alt="bgdjam test"  />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6 ">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Kelas Online + Rekaman
              </h3>
              <p className="text-gray-600 mb-8">
              Untuk member yang juga ingin belajar game development, BGDC juga menyediakan berbagai kelas game development. Kelas ini mencakupi banyak hal mulai dari programming, design, art, sampai sound.
              </p>
              <div className="flex space-x-2 justify-center md:justify-start">
                <div>
                     <button type="button" className="inline-block px-6 py-2.5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Lihat Kurikulum BGDC!</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row-reverse">
         
          <div className="w-full sm:w-1/2 p-6 mt-6 ">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Pengalaman Berorganisasi
              </h3>
              <p className="text-gray-600 mb-8">
              Member BGDC bisa apply menjadi aktivis dimana mereka bisa belajar cara mengurus sebuah organisasi. Aktivis akan mendapatkan banyak pengalaman terutama terkait soft skills dan hard skills.
              </p>
              <div className="flex space-x-2 justify-center md:justify-start">
                <div>
                     <button type="button" className="inline-block px-6 py-2.5 bg-gradient-to-r from-start-gradient to-end-gradient text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Baca Lebih Lanjut</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img src="/join3.png" alt="bgdjam test"  />
          </div>
        </div>
        </div>
    </section>  
</div>
    

</>);
};
export default JoinBGDC;