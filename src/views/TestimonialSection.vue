<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2>Trusted by Leading Healthcare Providers</h2>
        <p>See what our customers have to say about us</p>
      </div>

      <Carousel
        :value="testimonials"
        :numVisible="3"
        :numScroll="3"
        circular
        :autoplayInterval="4000"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="{ data }">
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"{{ data.testimonial }}"</p>
            </div>
            <div class="testimonial-author">
              <Image
                :src="data?.image || defaultImage"
                :alt="data.name"
                preview
              />
              <div>
                <h4>{{ data.name }}</h4>
                <p>{{ data.position }}</p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import { Image } from "primevue";
import Carousel from "primevue/carousel";

export default {
  name: "TestimonialSection",
  components: {
    Carousel,
    Image,
  },
  data() {
    return {
      defaultImage: "/public/default-user-icon.png",
      responsiveOptions: [
        {
          breakpoint: "1400px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "1024px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "767px",
          numVisible: 1,
          numScroll: 1,
        },
        {
          breakpoint: "575px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
      testimonials: [
        {
          name: "Dr. Sarah Johnson",
          position: "Medical Director, City General Hospital",
          testimonial:
            "Implementing this hospital management system has transformed our operations.",
          image: "../../public/woman-2.png",
        },
        {
          name: "Dr. Michael Chen",
          position: "Chief of Medicine, Westside Medical Center",
          testimonial:
            "The patient management features are outstanding. We can access complete patient history instantly.",
          image: "../../public/man-1.png",
        },
        {
          name: "Nurse Linda Park",
          position: "Lead Nurse, Sunrise Hospital",
          testimonial:
            "The scheduling and shift management are so much more efficient.",
          image: "../../public/woman-1.png",
        },
        {
          name: "Dr. Andrew Smith",
          position: "Resident Surgeon, Green Valley Clinic",
          testimonial:
            "Data access is instant, making surgeries more streamlined.",
          image: "../../public/man-4.png",
        },
        {
          name: "Emily Tran",
          position: "Admin Officer, Medilink Hospitals",
          testimonial: "Billing and records are now paperless and hassle-free.",
          image: "../../public/woman-1.png",
        },
        {
          name: "Dr. Brian Okoro",
          position: "Pediatrician, Happy Hearts Hospital",
          testimonial: "Child patient history tracking has never been easier.",
          image: "../../public/man-1.png",
        },
        {
          name: "Okafor Splendor",
          position: "Receptionist, Grace Wellness",
          testimonial: "Easy for staff to use, especially new recruits.",
          image: "../../public/man-4.png",
        },
        {
          name: "Dr. Fatima Yusuf",
          position: "Gynecologist, WomanCare Center",
          testimonial: "Pregnancy and post-natal tracking is now seamless.",
          image: "../../public/man-3.png",
        },
      ],
    };
  },
};
</script>

<style>
.testimonial {
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.5rem;
  height: 200px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: 0;
    height: 150px;
  }

  @media (max-width: 500px) {
    margin-left: 0;
    height: 190px;
  }
}

.p-carousel-item-list {
  width: 100%;
  height: 220px;
}

.testimonial-content p {
  font-size: clamp(0.875rem, 0.8393rem + 0.1786vw, 1rem);
  font-style: italic;
  color: var(--st-surface-text);
  line-height: 1.5;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.testimonial-author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-author h4 {
  font-size: clamp(0.9375rem, 0.9018rem + 0.1786vw, 1.0625rem);
  margin-bottom: 4px;
}

.testimonial-author p {
  color: var(--text-light);
  font-size: clamp(0.875rem, 0.8393rem + 0.1786vw, 1rem);
}

@media (max-device-width: 500px) {
  .testimonial {
    padding: 12px;
  }
}

@media (max-device-width: 400px) {
  .p-carousel-indicator-button {
    width: 20px !important;
  }
}
</style>
