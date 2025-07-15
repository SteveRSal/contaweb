export default function MiniContact() {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">¿Dónde encontrarnos?</h2>
      <p className="mb-4">
        Oficina Central: Jocoque 24, Pedregal de Santo Domingo, Coyoacán, CDMX
      </p>
      <iframe
        title="Mapa Google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.927077123741!2d-99.1713982!3d19.328970400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00190e5b3137%3A0xd3b45133b02e904f!2sJocoque%2024%2C%20Pedregal%20de%20Santo%20Domingo%2C%20Coyoac%C3%A1n%2C%2004369%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1752552467145!5m2!1ses-419!2smx"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full max-w-4xl h-96 mx-auto rounded-md"
      ></iframe>
    </section>
  );
}
