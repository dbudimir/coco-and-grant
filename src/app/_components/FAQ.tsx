import React, { useState } from "react";
import styled from "styled-components";
import { bigBird } from "../lib/fonts";

const FAQContainer = styled.div`
  max-width: 720px;
  margin: 24px auto;
`;

const FAQList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FAQItem = styled.li`
  margin-bottom: 1rem;
  padding: 0px 24px;
`;

const FAQQuestion = styled.div`
  font-family: ${bigBird.style.fontFamily};
  font-size: 24px;
  border: none;
  padding: 1rem;
  width: 100%;
  text-align: left;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.5s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e43333;

  span {
    padding: 8px 0 0;
  }

  &:hover {
    background-color: #ffffff;
  }
`;

const FAQAnswer = styled.div`
  /* font-family: ${bigBird.style.fontFamily}; */
  font-size: 18px;
  margin: 24px auto;
  padding: 0px 24px;

  &.active {
    transition: all 0.5s ease;
    height: unset;
    max-height: 1000px;
    border-radius: 5px;
    opacity: 1;
  }

  &.closed {
    transition: all 0.25s ease;
    max-height: 0px;
    color: #e43333;
    margin: 0 auto;
    overflow: hidden;
  }

  p {
    line-height: 1.25;
    color: black;
    white-space: pre-line;
  }

  h2 {
    margin: 1.5rem 0 1rem;
    font-family: ${bigBird.style.fontFamily};
  }

  ul {
    list-style-type: none;

    li {
      margin-bottom: 1rem;
    }
  }

  a {
    color: #e43333;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const ChevronDown = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Are kids invited?",
      answer: (
        <p>
          Due to capacity limitations at our venue, our wedding will be an
          adults-only celebration. However, our Sunday brunch is for all ages,
          and if the weather cooperates, there will be swimming!
        </p>
      ),
    },
    {
      question: "Can I bring a plus one?",
      answer: (
        <p>
          Our guest list is limited to those named on your invitation. If your
          invitation includes a plus one, they will be listed under your name
          when you RSVP.
        </p>
      ),
    },
    {
      question: "What should I wear?",
      answer: (
        <>
          <ul>
            <li>
              <strong>Friday Night (Welcome Party at The Caboose):</strong>
              <br />
              Festive, dressy casual.
            </li>
            <li>
              <strong>Saturday Night (Wedding at Taconic Ridge Farm):</strong>
              <br /> Dress to impress—think traditional cocktail attire, but we
              encourage bold looks.
            </li>
            <li>
              <strong>Sunday (Brunch at Nancy & John&apos;s Home):</strong>
              <br />
              Anything goes—PJs, sweats, whatever makes you happy.
            </li>
          </ul>

          <p>
            If you&apos;ll be wearing heels, we recommend block heels or flats,
            as parts of the venue have grass and gravel.
          </p>
        </>
      ),
    },
    {
      question: "How do I get to the wedding venue?",
      answer: (
        <>
          <p>
            We will provide shuttle transportation to and from the venue for
            guests staying in:
          </p>
          <br />
          <ul>
            <li>
              <strong>Hudson</strong> - Farmers & Sons and other nearby hotels.
            </li>
            <li>
              <strong>Hillsdale & Surrounding Areas</strong> - Little Cat Lodge,
              Sylvan Lodge, The Brooks.
            </li>
          </ul>

          <p>
            Guests staying in Airbnbs should plan to drive themselves or book a
            local taxi. If booking a taxi, we recommend reserving well in
            advance.
          </p>
        </>
      ),
    },
    {
      question: "What car services are available if there are no Ubers?",
      answer: (
        <>
          <p>
            Getting around outside of Hudson without a car can be tricky, so if
            you don’t have access to one, we highly recommend staying in Hudson.
            That said, here are some local cab companies in the Hudson Valley:
          </p>

          <ul>
            <li>Hudson Region Transport (518) 697-0056</li>
            <li>
              Mike Pizza (personal car service) (518) 755-2098 *Call or text
            </li>
            <li>Carole Nabozny (518) 929-2967 *Call or Text</li>
            <li>H Transport LLC (518) 577-5388</li>
            <li>Pickndrop Transportation (518) 653-7730</li>
            <li>Cubs Taxi + Airport Service (518) 929-6005</li>
            <li>Raiyan Transport (518) 821-7829</li>
            <li>Northern Cab Corp (518) 828-4222</li>
            <li>ABC United Transport (518) 755-6755</li>
            <li>Valley Taxi and Livery Service Inc. (518) 267-0707</li>
            <li>All Star Transport (518) 821-8114</li>
            <li>Millers Transport LLC (518) 828-8694</li>
            <li>Acme Car Service (518) 965-6972</li>
            <li>Zippy Transport (518) 828-5555</li>
            <li>East American Transportation (518) 495-0313</li>
          </ul>
        </>
      ),
    },
    {
      question: "Will there be transportation after the wedding?",
      answer: (
        <p>
          Yes! Shuttles will be available to take guests back to some Hudson and
          Hillsdale hotels listed in our accommodations section. For guests
          staying in Airbnbs: We cannot guarantee transportation, but if
          you&apos;re in Craryville, Hudson, or Egremont, reach out, and
          we&apos;ll try to coordinate something.
        </p>
      ),
    },
    {
      question: "Will there be an after-party?",
      answer: (
        <p>
          Yes! The celebration does not end at 10 PM when our reception wraps
          up. Stay tuned for after-party details.
        </p>
      ),
    },
    {
      question: "What should I do if I have dietary restrictions?",
      answer: (
        <p>
          Our caterer will offer vegetarian, gluten-free, and other
          dietary-friendly options throughout the weekend. Please let us know
          your dietary restrictions when you RSVP, and we&apos;ll do our best to
          accommodate.
        </p>
      ),
    },
    {
      question: "Is there anything to do in the area?",
      answer: (
        <>
          <p>
            Whether you&apos;re making a weekend out of it or just have some
            free time between events, here are some of our favorite spots in
            Hudson, Hillsdale, and beyond.
          </p>

          <h2>Hudson, NY</h2>
          <ul>
            <li>
              <strong>The Maker Hotel Bar</strong> - Beautiful spot for
              cocktails or a meal. If you&apos;re feeling fancy, you can stay
              here.
            </li>
            <li>
              <strong>The Antique Warehouse</strong> – football fields of
              furniture and cool old things.
            </li>
            <li>
              <strong>Finch</strong> – Beautifully curated furniture and
              clothing store. Warning: It’s all amazing (and pricey).
            </li>
            <li>
              <strong>Feast and Floret </strong>– our favorite restaurant in
              Hudson
            </li>
            <li>
              <strong>Baba Louie’s</strong> – Family-friendly spot for delicious
              wood-fired sourdough pizza.
            </li>
            <li>
              <strong>Talbott & Arding</strong> – Artisanal cheese, baked goods,
              and gourmet provisions.
            </li>
            <li>
              <strong> Lil’ Deb’s Oasis</strong> – Funky, vibrant, and
              delicious. A Hudson must-visit.
            </li>
            <li>
              <strong>Backbar – Casual</strong>, fun spot for drinks and bites.
            </li>
            <li>
              <strong>Flowerkraut</strong> – A unique flower and gift shop with
              beautiful finds.
            </li>
          </ul>

          <h2>Hillsdale, NY & Nearby</h2>
          <ul>
            <li>
              <strong>Little Apple Cidery</strong> – Cute/beautiful orchard that
              serves cider and fun times.
            </li>
            <li>
              <strong>Hillsdale General Store</strong> – A charming home goods
              store with a little bit of everything.
            </li>
            <li>
              <strong>Sweet Pea’s Diner</strong> – Johnny Kimelman’s favorite
              spot for breakfast, lunch, and coffee.
            </li>
            <li>
              <strong>The Restaurant at Little Cat Lodge</strong> – Cozy
              alpine-inspired restaurant with fantastic food and cocktails.
            </li>
            <li>
              <strong>The Book Barn</strong> – A charming bookstore full of
              unique finds.
            </li>
            <li>
              <strong>Cove Bowling</strong> – The Big Lebowski was inspired by
              this bowling alley. Charming and full of history.
            </li>
            <li>
              <strong>Random Harvest Market (Craryville)</strong> – Amazing
              sandwiches, soups, and fresh salads.
            </li>
            <li>
              <strong>Side Show Vintage (Craryville)</strong> – Vintage clothing
              heaven. Famously, Clairo loves it.
            </li>
            <li>
              <strong>Bash Bish Falls (Copake Falls)</strong> – A stunning
              waterfall hike on the NY/MA border.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Who can I contact if I have more questions?",
      answer: (
        <p>
          Feel free to reach out to Coco or Grant directly or email{" "}
          <a href="mailto:grantandcoco@gmail.com"> grantandcoco@gmail.com</a>.
          For quick responses: Coco loves phone calls, and Grant prefers texts
          or emails.
        </p>
      ),
    },
  ];

  return (
    <FAQContainer>
      <FAQList>
        {faqData.map((item, index) => (
          <FAQItem key={index}>
            <FAQQuestion
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            >
              <span>{item.question}</span>
              {ChevronDown}
            </FAQQuestion>
            <FAQAnswer className={activeIndex === index ? "active" : "closed"}>
              {item.answer}
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ;
