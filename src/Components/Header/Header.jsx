import DonutComponent from "./Donuts";
import styles from "./Header.module.scss";
import { header } from "@/constants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

const Header = () => {
  const { title, subtitle } = header;
  const [ipaddress, setIpAddress] = useState("");

  const motionProps = (initialX, finalX) => ({
    initial: { opacity: 0, x: initialX },
    whileInView: { opacity: 1, x: finalX },
    viewport: { once: true },
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  });

  useEffect(() => {
    try {
      const ip = fetch(
        "https://nodejs-serverless-function-express-apo-world.vercel.app/api/hello"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          sendEmail(data.ip);
        });
    } catch (error) {}
  }, [ipaddress]);

  const handleEvent = (e) => {
    e.preventDefault();

    try {
      const ip = fetch(
        "https://nodejs-serverless-function-express-apo-world.vercel.app/api/hello"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          sendEmail(data.ip);
        });
    } catch (error) {}
  };

  const sendEmail = (ip) => {
    setIpAddress(ip);
    const form = document.getElementById("contact-form");
    form.dataset.message = ip;

    console.log(form.dataset);

    emailjs
      .sendForm("service_2zcq9ot", "template_oonhhyo", form, {
        publicKey: "0-6st1S-Qu4vOq0Dd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <header className={styles.header}>
      <form id="contact-form" style={{ display: "none" }}>
        <input type="text" name="name" value={"name"} />
        <textarea name="message" value={ipaddress}></textarea>
        <button type="submit">Send</button>
      </form>
      <div className={styles.container}>
        <motion.div {...motionProps(-100, 0)} className={styles.content}>
          <h1>{title}</h1>
          <p className="dark-bg">{subtitle}</p>
          <br />
          {/* <a href="#footer" className="btn btn-primary">
            Fale Conosco
          </a> */}
          <p onClick={handleEvent} className="btn btn-primary">
            Fale Conosco
          </p>
        </motion.div>
        <motion.div {...motionProps(100, 0)}>
          <DonutComponent />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
