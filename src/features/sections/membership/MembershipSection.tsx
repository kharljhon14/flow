import Button from '@/components/Button';
import MembershipBackground from './MembershipBackground';
import MembershipContent from './MembershipContent';

export default function MembershipSection() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col p-20 w-full">
        <span className="text-lime-700 mb-4 text-lg">Join Our Herbal Wellness Community</span>
        <div className="space-y-6">
          <h1 className=" font-light text-5xl uppercase text-gray-800">Our memberships include</h1>
        </div>
      </div>

      <div className="mx-24">
        <div className="flex items-center justify-between h-[60vh]">
          <MembershipContent classname="bg-lime-50">
            <div className="space-y-6">
              <h1 className=" font-light text-4xl uppercase text-gray-800">
                Structure making of 50 herbs <br /> and,their benefits
              </h1>
              <p className=" leading-7">
                Exploring the diverse world of herbs, we meticulously delve into the structures and
                compositions of 50 different herbs, unraveling the richness and uniqueness of each.
                Understanding these structures allows us to uncover their various benefits and
                applications in promoting overall well-being and health.
              </p>
            </div>

            <div className="mt-6">
              <Button className="uppercase">Learn More</Button>
            </div>
          </MembershipContent>
          <MembershipBackground image="/images/herbs.jpg" />
        </div>

        <div className="flex items-center justify-between h-[60vh]">
          <MembershipBackground image="/images/tea.jpg" />
          <MembershipContent>
            <div className="space-y-6">
              <h1 className=" font-light text-4xl uppercase text-gray-800">
                How to run a herb business
              </h1>
              <p className=" leading-7">
                Running a successful herb business involves a combination of factors including
                sourcing quality herbs, understanding customer needs, implementing sustainable
                practices, and marketing strategies. Our comprehensive guide explores the
                intricacies of starting and managing a herb-based business, offering insights into
                cultivation, distribution, compliance, and fostering customer trust.
              </p>
            </div>

            <div className="mt-6">
              <Button className="uppercase">Learn More</Button>
            </div>
          </MembershipContent>
        </div>

        <div className="flex items-center justify-between h-[60vh]">
          <MembershipContent classname="bg-lime-50">
            <div className="space-y-6">
              <h1 className=" font-light text-4xl uppercase text-gray-800">
                Years of experience-based guidance for successful distillation
              </h1>
              <p className=" leading-7">
                Our years of experience in the field of distillation have provided invaluable
                insights into the art and science of extracting herbal essences. We offer guidance
                on the intricate process of distillation, sharing proven techniques, best practices,
                and essential considerations. Learn from our expertise to achieve successful and
                high-quality distillation for various herbal essences.
              </p>
            </div>

            <div className="mt-6">
              <Button className="uppercase">Learn More</Button>
            </div>
          </MembershipContent>
          <MembershipBackground image="/images/tea-2.jpg" />
        </div>
      </div>
    </div>
  );
}
