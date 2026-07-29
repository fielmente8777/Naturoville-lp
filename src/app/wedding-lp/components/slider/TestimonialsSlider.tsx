"use client";
import { SwiperCarousel } from "@/components";
import { Autoplay } from "swiper/modules";

interface Review {
  review: string;
  name: string;
  event: string;
}

const TestimonialsSlider = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={reviews}
        slidesPerView={1}
        spaceBetween={24}
        speed={5000}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="p-4!"
        renderSlide={(review) => (
          <TestimonialsCard
            review={review.review}
            name={review.name}
            event={review.event}
          />
        )}
      />
    </div>
  );
};

export default TestimonialsSlider;

export const TestimonialsCard: React.FC<Review> = ({ review, name, event }) => {
  return (
    <div className="w-full bg-white box-shadow rounded-2xl overflow-hidden p-6">
      <div className="flex w-fit items-center justify-center p-2 aspect-square rounded-full bg-[#002B21]">
        <Foo />
      </div>
      <ul className="flex gap-2 items-center mt-3">
        {[...Array(5)].map((_, index) => (
          <li key={index}>
            <StarIcon />
          </li>
        ))}
      </ul>
      <p className=" text-[#374151] mt-4">{review}</p>
      <div className="w-full h-px bg-[#F3F4F6] my-6"/>
      <p className="text-lg text-[#002B21] mt-1">{name}</p>
      <p className=" text-[#D4AF37] mt-1">{event}</p>
    </div>
  );
};

export const Foo = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 3C15.4696 3 14.9609 3.21071 14.5858 3.58579C14.2107 3.96086 14 4.46957 14 5V11C14 11.5304 14.2107 12.0391 14.5858 12.4142C14.9609 12.7893 15.4696 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17C14.7348 17 14.4804 17.1054 14.2929 17.2929C14.1054 17.4804 14 17.7348 14 18V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21C16.5913 21 18.1174 20.3679 19.2426 19.2426C20.3679 18.1174 21 16.5913 21 15V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16Z"
      stroke="#D4AF37"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V11C3 11.5304 3.21071 12.0391 3.58579 12.4142C3.96086 12.7893 4.46957 13 5 13C5.26522 13 5.51957 13.1054 5.70711 13.2929C5.89464 13.4804 6 13.7348 6 14V15C6 15.5304 5.78929 16.0391 5.41421 16.4142C5.03914 16.7893 4.53043 17 4 17C3.73478 17 3.48043 17.1054 3.29289 17.2929C3.10536 17.4804 3 17.7348 3 18V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21C5.5913 21 7.11742 20.3679 8.24264 19.2426C9.36786 18.1174 10 16.5913 10 15V5C10 4.46957 9.78929 3.96086 9.41421 3.58579C9.03914 3.21071 8.53043 3 8 3H5Z"
      stroke="#D4AF37"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.60404 1.91274C9.64056 1.83895 9.69697 1.77685 9.76692 1.73342C9.83686 1.69 9.91755 1.66699 9.99987 1.66699C10.0822 1.66699 10.1629 1.69 10.2328 1.73342C10.3028 1.77685 10.3592 1.83895 10.3957 1.91274L12.3207 5.8119C12.4475 6.06854 12.6347 6.29058 12.8662 6.45895C13.0977 6.62732 13.3666 6.737 13.6499 6.77857L17.9549 7.40857C18.0364 7.42039 18.1131 7.4548 18.1761 7.5079C18.2391 7.56101 18.2861 7.63069 18.3116 7.70908C18.337 7.78746 18.3401 7.87141 18.3204 7.95143C18.3006 8.03146 18.2589 8.10436 18.1999 8.1619L15.0865 11.1936C14.8812 11.3937 14.7276 11.6406 14.6389 11.9133C14.5502 12.1859 14.5291 12.476 14.5774 12.7586L15.3124 17.0419C15.3268 17.1234 15.318 17.2074 15.287 17.2841C15.2559 17.3609 15.204 17.4274 15.137 17.4761C15.07 17.5247 14.9907 17.5536 14.9081 17.5593C14.8255 17.5651 14.743 17.5475 14.6699 17.5086L10.8215 15.4852C10.568 15.3521 10.2859 15.2825 9.99946 15.2825C9.71306 15.2825 9.43094 15.3521 9.17737 15.4852L5.32987 17.5086C5.25681 17.5472 5.17437 17.5646 5.09191 17.5588C5.00946 17.5529 4.9303 17.524 4.86345 17.4754C4.7966 17.4268 4.74473 17.3604 4.71375 17.2838C4.68277 17.2071 4.67392 17.1233 4.68821 17.0419L5.42237 12.7594C5.47087 12.4767 5.44986 12.1864 5.36115 11.9136C5.27245 11.6408 5.11871 11.3937 4.91321 11.1936L1.79987 8.16274C1.74037 8.10526 1.6982 8.03223 1.67817 7.95197C1.65815 7.8717 1.66107 7.78742 1.6866 7.70873C1.71214 7.63004 1.75926 7.5601 1.8226 7.50689C1.88594 7.45367 1.96296 7.41932 2.04487 7.40774L6.34904 6.77857C6.63259 6.73732 6.90186 6.62778 7.13369 6.45939C7.36552 6.291 7.55296 6.0688 7.67987 5.8119L9.60404 1.91274Z"
      fill="#D4AF37"
      stroke="#D4AF37"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
