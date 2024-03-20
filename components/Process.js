"use state";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Process = () => {
  const CirclePollution = [
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/process/container-mtexx.png',
      title: 'Оставяне на текстил в контейнери',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/process/collect-mtexx.png',
      title: 'Събиране на текстила от контейнери',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/process/sort-mtexx.png',
      title: ' Сортиране на текстил по вид и качество',
    },

  ];

  const HoverPollution = [
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/process/1.png',
      title: 'СТЪКЛО',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/process/2.png',
      title: 'ХАРТИЯ',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/process/3.png',
      title: 'МЕТАЛ',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/process/4.png',
      title: 'БИТОВ ОТПАДЪК',
    },
  ];

  const [activeCircle, setActiveCircle] = useState(0);

  const handleCircleClick = (index) => {
    setActiveCircle(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the photo under the circles on an interval
      setActiveCircle((prevIndex) => (prevIndex + 1) % CirclePollution.length);
    }, 13000); // Change photo every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center bg-dgreen my-4 py-4 border-t-2 border-b-2 border-dashed border-white dark:border-lgreen">

      <h3 className="text-2xl xl:text-4xl font-russo text-white my-10  "> ПРОЦЕС НА РЕЦИКЛИРАНЕ</h3>
        {/* <h1 className="text-xl xl:text-2xl font-osw text-lgreen my-2  "> ВЛИЯНИЕТО ВЪРХУ ОКОЛНАТА СРЕДА </h1> */}



      <div className="w-[900px] h-2 flex items-center justify-between bg-white my-8 mt-32 -translate-x-24">
        
            <span className="h-8 w-8 rounded-full bg-lgreen border-white border-4"></span>
            <span className="h-8 w-8 rounded-full bg-lgreen border-white border-4">
                <div className='h-64 w-1 border-white border-dashed border-2 translate-x-[11px] translate-y-8'></div>
            </span>
            <span className="h-8 w-8 rounded-full bg-lgreen border-white border-4">
                <div className='h-64 w-1 border-white border-dashed border-2 translate-x-[11px] translate-y-8'></div>

            </span>
            <span className="h-8 w-8 rounded-full bg-lgreen border-white border-4 translate-x-1">
            <div className='translate-x-3 translate-y-1'>

                
            <div className="w-[100px] h-2 rotate-[-45deg] bg-white -translate-y-8 rounded-md">
            <div className='hover:scale-110 transition duration-300'>
            <Image
                className="rounded-full border-4 border-lgreen translate-x-36 -translate-y-10 rotate-[45deg] scale-[2] "
                src="/img/process/bag-mtexx.png" // Replace with your image path
                alt="reusing textile"
                width={300}
                height={200}
            />
                          <h3 className="text-xl font-russo text-center text-white translate-x-12 -translate-y-6 rotate-[45deg] ">Повторна употреба</h3>
                </div>
            </div>

            <div className="w-[100px] h-2 rotate-[45deg] bg-white translate-y-8 rounded-md ">
            <div className='hover:scale-110 transition duration-300'>
            <Image
                className="rounded-full border-4 border-lgreen translate-x-36 -translate-y-10 rotate-[-45deg] scale-[2] "
                src="/img/process/box-mtexx.png" // Replace with your image path
                alt="reusing textile"
                width={200}
                height={200}
            />
              <h3 className="text-xl font-russo text-white text-center translate-x-64 -translate-y-4 rotate-[-45deg]">Рециклиране до краен продукт</h3>
              </div>

            </div>
            </div>
            </span>
            
        </div>


        <div className="flex flex-wrap justify-center mr-44">
          {CirclePollution.map((item, index) => (
            <div
              key={index}
              className=" mx-8 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4 hover:scale-125 transition-transform duration-300 transform relative"
              onClick={() => handleCircleClick(index)}
            >
              <div
                className={`w-20 h-20 rounded-full  ${
                  activeCircle === index ? 'border-opacity-100' : 'border-opacity-0'
                } transition-all duration-300 absolute -top-2 -left-2`}
              ></div>
              
              <Image
                src={CirclePollution[index].src}
                alt={`Image ${index + 1}`}
                width={200}
                height={200}
                className={`rounded-full cursor-pointer ${
                  activeCircle === index ? 'border-lgreen border-8' : ''
                } transition-all duration-300`}
              />
              <h3 className="text-xl font-russo text-white mt-8">{item.title}</h3>
            </div>

            
          ))}

          
        </div>
        
        <div className="mt-8 p-4 bg-lgreen rounded-lg mb-8">
          <Image
            src={HoverPollution[activeCircle].src}
            alt={`Active Image`}
            width={1000}
            height={300}
            className='rounded-lg'
          />


        </div>
      </div>
    </>
  );
};

export default Process;