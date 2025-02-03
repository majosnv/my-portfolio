import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-primary text-4xl font-bold text-center mb-8">Kontakt</h2>
        <form className="max-w-2xl mx-auto">
          <div className="mb-4">
            <label className="block text-primary text-lg mb-2" htmlFor="name">Meno</label>
            <input type="text" id="name" className="w-full p-2 rounded-lg border border-primary" />
          </div>
          <div className="mb-4">
            <label className="block text-primary text-lg mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded-lg border border-primary" />
          </div>
          <div className="mb-4">
            <label className="block text-primary text-lg mb-2" htmlFor="message">Správa</label>
            <textarea id="message" className="w-full p-2 rounded-lg border border-primary" rows="5"></textarea>
          </div>
          <button type="submit" className="bg-accent text-primary px-6 py-3 rounded-lg hover:bg-highlight">
            Odoslať
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;