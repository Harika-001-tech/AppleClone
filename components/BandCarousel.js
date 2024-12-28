const bands = [
    { id: 1, type: 'Solo Loop', color: 'Red', image: '/images/image.png' },
    { id: 2, type: 'Braided Loop', color: 'Blue', image: '/images/image.png' },
  ];
  
  export default function BandCarousel() {
    return (
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-800">Select a Band</h2>
        <div className="flex space-x-4 overflow-x-scroll mt-4">
          {bands.map((band) => (
            <div
              key={band.id}
              className="p-4 border rounded-lg hover:shadow-lg cursor-pointer"
            >
              <img src={band.image} alt={band.type}  width={400} height={400}  class="w-32 sm:w-48 md:w-64 lg:w-80 h-auto" />
              <p className="mt-2 text-center text-gray-700">{band.color}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  