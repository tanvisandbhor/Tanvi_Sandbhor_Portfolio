import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center w-full">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
    <form
  action="https://formsubmit.co/el/kupemupemu"
  method="POST"
  className="flex flex-col gap-4 max-w-md mx-auto"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
  
<input type="hidden" name="_next" value="https://tanvi-portfolio.vercel.app/thank-you" />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="p-3 rounded bg-white text-black"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="p-3 rounded bg-white text-black"
    required
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows="5"
    className="p-3 rounded bg-white text-black"
    required
  ></textarea>

  <button
    type="submit"
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
  >
    Send
  </button>
</form>

      </div>
    </SectionWrapper>
  );
}
