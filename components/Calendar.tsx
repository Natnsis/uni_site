'use client'

export default function Calendar() {
  const foods = [
    { id: 1, name: 'heh' },
    { id: 2, name: 'heh' },
    { id: 3, name: 'heh' },
    { id: 4, name: 'heh' },
    { id: 5, name: 'heh' },
    { id: 6, name: 'heh' },
    { id: 7, name: 'heh' },
    { id: 8, name: 'heh' },
    { id: 9, name: 'heh' },
    { id: 10, name: 'heh' },
    { id: 11, name: 'heh' },
    { id: 12, name: 'heh' },
    { id: 13, name: 'heh' },
    { id: 14, name: 'heh' },
    { id: 15, name: 'heh' },
    { id: 16, name: 'heh' },
    { id: 17, name: 'heh' },
    { id: 18, name: 'heh' },
    { id: 19, name: 'heh' },
    { id: 20, name: 'heh' },
    { id: 21, name: 'heh' },
  ]

  const days = [
    { id: 1, day: 'moday' },
    { id: 2, day: 'tuesday' },
    { id: 3, day: 'wednsday' },
    { id: 4, day: 'thursday' },
    { id: 5, day: 'friday' },
    { id: 6, day: 'saturday' },
    { id: 7, day: 'sunday' },
  ]
  return (
    <div className="flex-1 mt-5">
      <div className="grid grid-cols-7">
        {days.map((d, index) => (
          <p className="capitalize pl-2" key={index}>{d.day}</p>
        ))}
      </div>

      <div className="h-full grid grid-cols-7 grid-rows-3">
        {foods.map((f, index) => (
          <div key={index} className=" border border-gray-100 p-3 hover:bg-gray-50">
            {f.name}
          </div>
        ))}
      </div>
    </div>
  );
}

