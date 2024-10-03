import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base = `inline-block tex-sm  text-white rounded-full bg-[#476c98] font-semibold uppercase tracking-wide text-white transition-colors
   duration-300 hover:bg-[#5a85bb] focus:bg-[#5a85bb] focus:outline-none
   focus:ring focus:ring-[#5a85bb] focus:ring-offset-2
   disabled:cursor-not-allowed `;
  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4  ',
    small: base + ' px-4 py-1 md:px-5 md:py-2.5 text-xs ',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm ',
    secondary: `inline-block text-sm rounded-full border-2 
    border-stone-300  font-semibold uppercase 
     tracking-wide text-stone-400 transition-colors
    duration-300 hover:text-stone-800 hover:bg-stone-300
    focus:text-stone-800 focus:bg-stone-300 focus:outline-none
    focus:ring focus:ring-stone-200 
    focus:ring-offset-2 disabled:cursor-not-allowed 
    px-4 py-2.5 sm:px-6 sm:py-3.5`,
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;