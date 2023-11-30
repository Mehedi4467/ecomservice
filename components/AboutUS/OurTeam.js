/* eslint-disable jsx-a11y/anchor-is-valid */
import TeamCard from "./TeamCard";

function OurTeam() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Welcome to EcomService
        </h2>
        <p className="text-lg text-gray-600 leading-loose text-center mb-12">
          At EcomService, we are dedicated to providing unparalleled IT
          solutions that empower businesses to thrive in the dynamic world of
          e-commerce. Our mission is to be the catalyst for digital
          transformation, helping clients stay ahead in the competitive online
          marketplace.
        </p>

        {/* Expertise Section */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Expertise That Sets Us Apart
            </h3>
            <p className="text-gray-600 leading-loose">
              Our core strength lies in specialized expertise in Amazon and
              1688.com product data API sales. We provide tailored solutions
              addressing the unique needs of e-commerce businesses, from API
              integration to full web development.
            </p>
          </div>

          {/* Innovation Section */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Innovation as a Driving Force
            </h3>
            <p className="text-gray-600 leading-loose">
              Innovation is at the heart of what we do. We stay at the forefront
              of technological advancements, ensuring that our clients benefit
              from the latest and most effective solutions.
            </p>
          </div>
        </div>

        {/* Client-Centric Approach Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Client-Centric Approach
          </h3>
          <p className="text-gray-600 leading-loose">
            Your success is our priority. EcomService takes a client-centric
            approach, working closely with you to understand your goals and
            challenges. We believe in building lasting partnerships, and our
            dedicated team is committed to delivering solutions that exceed your
            expectations.
          </p>
        </div>

        {/* Quality Assurance and Reliability Section */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Quality Assurance and Reliability
            </h3>
            <p className="text-gray-600 leading-loose">
              Quality is non-negotiable at EcomService. We adhere to the highest
              standards of quality assurance throughout our processes, ensuring
              a seamless and secure digital experience for your customers.
            </p>
          </div>

          {/* Scalability Section */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Scalability for Future Growth
            </h3>
            <p className="text-gray-600 leading-loose">
              We understand that businesses evolve. Our solutions are designed
              with scalability in mind, providing you with the flexibility to
              grow and adapt to changing market dynamics.
            </p>
          </div>
        </div>

        {/* Timely Delivery and Cost-Effectiveness Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Timely Delivery and Cost-Effectiveness
          </h3>
          <p className="text-gray-600 leading-loose">
            Time is of the essence in e-commerce, and we value your time.
            EcomService is committed to delivering projects on schedule without
            compromising on quality. Additionally, we offer cost-effective
            solutions, ensuring that you receive maximum value for your
            investment.
          </p>
        </div>

        {/* Conclusion Section */}
        <div className="text-center">
          <p className="text-lg text-gray-600 leading-loose mb-12">
            Choose EcomService as your IT partner, and embark on a journey of
            digital transformation that goes beyond the ordinary. With a focus
            on excellence, innovation, and client satisfaction, we are here to
            turn your e-commerce aspirations into reality. Welcome to a world
            where your success is our mission—welcome to EcomService.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
