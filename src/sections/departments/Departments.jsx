import { DEPTS } from '../../db/data';

export default function Departments({ onOpenModal }) {
  return (
    <section id="departments" className="py-20">
      <div className="max-w-[1160px] mx-auto px-[22px]">
        <div className="max-w-[620px] mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Medical departments</h2>
          <p className="text-slate-600 mt-3 text-lg">
            Six departments, one coordinated team, so your family doesn’t have to travel across the city for answers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEPTS.map((dept) => (
            <article 
              key={dept.k} 
              className="bg-white border border-slate-200 rounded-[24px] p-7 transition-all hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl"
            >
              <div className="w-[52px] h-[52px] rounded-[16px] bg-teal-50 text-teal-600 flex items-center justify-center mb-4 font-bold text-xl">
                +
              </div>
              <h3 className="text-[19px] font-bold mb-2">{dept.n}</h3>
              <p className="text-slate-600 text-[15px] mb-4">{dept.d}</p>
              <button 
                onClick={() => onOpenModal(undefined, dept.f)}
                className="font-semibold text-[14px] text-teal-600 bg-transparent border-0 p-0 cursor-pointer hover:underline"
              >
                Book a visit →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}