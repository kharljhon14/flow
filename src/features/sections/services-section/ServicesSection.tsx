import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <div className="mx-12 my-28">
      <h2 className="font-semibold text-4xl md:text-5xl mb-8 text-center">
        Save time managing your
        <br />
        business with our services
      </h2>
      <p className="mb-8 text-center">
        Our specialized web development services cater to all your online needs.
        <br />
        From crafting responsive websites to developing robust web applications,
        <br />
        our expert team ensures top-notch solutions tailored to your business goals.
      </p>

      <div className="flex items-center justify-evenly">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
