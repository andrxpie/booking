"use client";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary border-t-4 border-accent p-4 z-50">
      <div className="grid grid-cols-3 items-center">
        <h1
          className={`col-start-2 w-[fit-content] m-auto text-xl font-bold text-center text-[#494949] cursor-pointer select-none`}
          onClick={handleScrollToTop}
        >
          Back to top
        </h1>
        <label className="text-[#494949] text-[14px] text-right">on NEXT.JS</label>
      </div>
    </footer>
  );
};

export default Footer;
