import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* Section 1: Our Story */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#234E13]">Our Story</h2>
        <p className="text-lg mb-4 text-gray-700">
        Technology has transformed the way we live and interact with the world. From smartphones and social media to advanced medical equipment and space exploration, 
        innovations continue to shape every aspect of our lives. The rapid pace of development in fields such as artificial intelligence and renewable energy offers both exciting 
        opportunities and unique challenges. As we move forward, it's important to ensure that technological advancements are used responsibly and inclusively, benefiting people 
        across all communities while addressing global issues like climate change and social inequality.
        </p>
        <Image
          src="/recycleGlobe.png"
          alt="Recycling Globe"
          width={200}
          height={200}
          className="mx-auto mb-4"
        />
        <button className="bg-[#234E13] text-white py-2 px-6 rounded hover:bg-green-800">
          Learn More
        </button>
      </section>

      {/* Section 2: Our Mission */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-[#234E13]">Our Mission</h2>
          <p className="text-lg mb-4 text-gray-700">
          Technology has transformed the way we live and interact with the world. From smartphones and social media to advanced medical equipment and space exploration, 
          innovations continue to shape every aspect of our lives. The rapid pace of development in fields such as artificial intelligence and renewable energy offers both 
          exciting opportunities and unique challenges. As we move forward, it's important to ensure that technological advancements are used responsibly and inclusively, 
          benefiting people across all communities while addressing global issues like climate change and social inequality.
          </p>
          <button className="bg-[#A9DEF9] text-[#234E13] py-2 px-6 rounded hover:bg-blue-300">
            Learn More
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/recycleSign.png"
            alt="Recycling Sign"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </section>

      {/* Section 3: Make A Difference Today */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#234E13]">Make A Difference Today.</h2>
        <p className="text-lg mb-4 text-gray-700">
          Technology has transformed the way we live and interact with the world. From smartphones and social media to advanced 
          medical equipment and space exploration, innovations continue to shape every aspect of our lives. The rapid pace of 
          development in fields such as artificial intelligence and renewable energy offers both exciting opportunities and unique challenges. 
          As we move forward, it's important to ensure that technological advancements are used responsibly and inclusively, benefiting people across all 
          communities while addressing global issues like climate change and social inequality.
        </p>
        <Image
          src="/recycleGlobe.png"
          alt="Earth with Recycling Symbol"
          width={200}
          height={200}
          className="mx-auto mb-4"
        />
        <button className="bg-[#234E13] text-white py-2 px-6 rounded hover:bg-green-800">
          Learn More
        </button>
      </section>
    </div>
  );
}


export default About;
