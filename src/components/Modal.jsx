import FilterIcon from '../assets/icons/tune.svg';
import Close from '../assets/icons/close_large.svg';

export default function Modal({ open, onClose, onUpdate, children }) {
  return (
    <div onClick={() => onClose(false)} className={`
      fixed inset-0 flex justify-center items-center transition-colors max-h-lvh z-50
      ${open ? "visible bg-black/50" : "invisible"}
    `}>
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded shadow p-2 transition-all w-1/2 max-h-[90vh] relative overflow-hidden
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <h3 className="absolute top-0 left-0 p-4 flex font-black bg-white justify-between border-b border-b-black w-full text-lg text-gray-800">
          <div>
            <img src={FilterIcon} className="w-6 aspect-square inline-block" /> filters
          </div>
          <div>
            <img src={Close} onClick={() => onClose(false)} className="cursor-pointer w-6 aspect-square inline-block" />
          </div>
        </h3>
        <div className="overflow-y-auto max-h-lvh pb-24">
          {children}
        </div>
        <div className="absolute bottom-0 left-0 bg-white flex flex-wrap gap-10 justify-between items-center p-4 w-full text-lg text-center border-t border-solid border-t-black max-md:max-w-full">
          <button className="gap-1 self-stretch px-4 py-2 my-auto text-black min-h-[40px] rounded-[10000px]">
            Clear all
          </button>
          <button
            onClick={onUpdate}
            className="gap-1 px-4 py-2 my-auto text-red-600 border border-red-600 border-solid min-h-[40px] rounded-[10000px]">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
