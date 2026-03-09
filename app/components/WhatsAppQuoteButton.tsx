export default function WhatsAppQuoteButton() {
  return (
    <a
      href="https://wa.me/593982048240?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20audiovisual"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed right-3 sm:right-5 z-40 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#25D366] px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-base font-semibold text-white shadow-xl sm:shadow-2xl transition-all duration-300 hover:scale-105 hover:brightness-110"
      style={{ bottom: "calc(env(safe-area-inset-bottom) + 12px)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-4 w-4 sm:h-5 sm:w-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.2c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.38-.82-.73-1.37-1.64-1.53-1.91-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.91 2.92 4.62 4.09.65.28 1.16.45 1.56.57.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.82-1.27.23-.61.23-1.14.16-1.27-.06-.13-.24-.2-.5-.34z" />
        <path d="M16.02 3.2c-6.99 0-12.67 5.68-12.67 12.67 0 2.22.58 4.38 1.67 6.28L3.2 28.8l6.81-1.79c1.82 1 3.88 1.53 5.99 1.53h.01c6.99 0 12.67-5.68 12.67-12.67 0-3.39-1.32-6.58-3.72-8.98-2.39-2.4-5.58-3.72-8.95-3.72zm0 23.2h-.01c-1.9 0-3.76-.51-5.38-1.46l-.39-.23-4.04 1.06 1.08-3.94-.25-.4a10.47 10.47 0 0 1-1.61-5.57c0-5.79 4.71-10.5 10.5-10.5 2.8 0 5.44 1.09 7.42 3.08a10.4 10.4 0 0 1 3.08 7.42c0 5.79-4.71 10.5-10.5 10.5z" />
      </svg>
      <span className="leading-none">Cotizar</span>
    </a>
  );
}
