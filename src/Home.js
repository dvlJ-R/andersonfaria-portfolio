import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-950 text-white p-4">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Anderson Faria</h1>
        <p className="text-xl mt-2">QA Engineer | Strategic Problem-Solver</p>
        <p className="text-lg text-blue-300 mt-1">
          Building High-Quality Software with Strategic Testing
        </p>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto my-12">
        <h2 className="text-2xl font-semibold border-b border-blue-700 pb-2 mb-4">
          About Me
        </h2>
        <p className="text-lg leading-relaxed">
          I'm a Quality Assurance Engineer with strong expertise in both manual and automated testing. I’ve worked on large-scale federal projects like GeoRadar and Pactum for the Brazilian Federal Public Ministry (MPF), helping to ensure strategic, scalable, and reliable systems.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-4xl mx-auto my-12">
        <h2 className="text-2xl font-semibold border-b border-blue-700 pb-2 mb-4">
          Portfolio
        </h2>
        <ul className="list-disc pl-6 text-lg">
          <li>GeoRadar – QA leadership and client alignment (MPF)</li>
          <li>Pactum – Strategic QA planning and structure</li>
          <li>Environmental Licensing Systems – Used in AM, MS, ES, and AP</li>
          <li>Fleet Management QA – Serving clients like Gerdau, CSN, Usiminas</li>
        </ul>
      </section>

      {/* Blog Section (Coming Soon) */}
      <section className="max-w-4xl mx-auto my-12">
        <h2 className="text-2xl font-semibold border-b border-blue-700 pb-2 mb-4">
          Blog & Insights (Coming Soon)
        </h2>
        <p className="text-lg">I'll be sharing articles soon on QA strategies, automation, and more.</p>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto my-12">
        <h2 className="text-2xl font-semibold border-b border-blue-700 pb-2 mb-4">
          Contact
        </h2>
        <p className="text-lg mb-2">📧 Email: junior96175@gmail.com</p>
        <p className="text-lg mb-2">🌐 LinkedIn: <a href="https://www.linkedin.com/in/anderson-faria-" className="text-blue-400 underline">anderson-faria</a></p>
      </section>
    </main>
  );
}
