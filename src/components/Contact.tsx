import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Contact = () => {
  // Replace 'your_form_id' with the ID you get from formspree.io
  const [state, handleSubmit] = useForm("xqadegvg");

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  if (state.succeeded) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-idex-teal text-4xl font-black uppercase italic">
          Message Sent!
        </h2>
        <p className="text-white/40 mt-4 uppercase tracking-widest text-xs">
          I will get back to you shortly.
        </p>

        <button
          onClick={() => window.location.reload()} // Refreshes to show the form again
          className="mt-12 group relative border border-white/20 px-10 py-4 rounded-full overflow-hidden transition-all duration-500 uppercase tracking-[0.3em] text-[10px] font-bold cursor-pointer hover:border-idex-teal"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            Go Back
          </span>
          <div className="absolute inset-0 bg-idex-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]"></div>
        </button>
      </div>
    );
  }

  return (
    <section
      id="contact"
      className="py-32 md:py-48 px-6 md:px-20 border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left Side: Text */}
        <div className="lg:col-span-5">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            className="text-idex-teal font-mono text-[10px] tracking-[0.4em] uppercase mb-8"
          >
            / Get In Touch
          </motion.h2>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            Start <br />
            {""}
            <span className="text-transparent stroke-text">Project</span>
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            className="mt-10 text-white/40 max-w-sm leading-loose uppercase tracking-widest text-[10px]"
          >
            Available for freelance opportunities and full-time roles. Let's
            build something impactful together.
          </motion.p>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/20 block mb-4">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-idex-teal transition-colors cursor-none text-xl"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="relative">
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/20 block mb-4">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-idex-teal transition-colors cursor-none text-xl"
                  placeholder="john@example.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] uppercase tracking-[0.3em] text-white/20 block mb-4">
                Your Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-idex-teal transition-colors cursor-none text-xl resize-none"
                placeholder="Tell me about your project..."
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="group relative border border-white/20 px-12 py-5 rounded-full overflow-hidden transition-all duration-300 uppercase tracking-widest text-xs font-bold cursor-none hover:border-idex-teal"
            >
              <span className="relative z-10 group-hover:text-black">
                Send Message
              </span>
              <div className="absolute inset-0 bg-idex-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
