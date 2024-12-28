const cases = [
    { id: 1, material: 'Aluminum', image: '/images/image (1).png' },
    { id: 2, material: 'Titanium', image: '/images/image (2).png' },
  ];
  
  export default function CaseSelector() {
    return (
      <div>
        <h2 className="text-lg font-medium text-gray-800">Select a Case</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {cases.map((watchCase) => (
            <div
              key={watchCase.id}
              className="p-4 border rounded-lg hover:shadow-lg cursor-pointer"
            >
              <img src={watchCase.image} 
  width={320}       
  height={320}  className="w-full h-auto" />
              <p className="mt-2 text-center text-gray-700">{watchCase.material}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  