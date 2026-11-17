import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { demoOrders, demoStages } from '../../../data/demo';
import type { DemoOrder } from '../../../types/content';

export function DemoDashboard() {
  const [orders, setOrders] = useState<DemoOrder[]>(demoOrders);
  const last = demoStages.length - 1;

  const advance = (id: string) =>
  setOrders((list) => list.map((o) => o.id === id ? { ...o, stage: o.stage >= last ? 0 : o.stage + 1 } : o));

  return (
    <div className="flex h-full flex-col bg-canvas">
      <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4 md:p-5">
        {demoStages.map((stage, i) =>
        <div key={stage} className="rounded-xl bg-white px-4 py-3">
            <p className="whitespace-nowrap text-xs font-semibold text-muted">{stage}</p>
            <p className="mt-1 font-display text-2xl font-bold tabular-nums text-ink">{orders.filter((o) => o.stage === i).length}</p>
          </div>
        )}
      </div>
      <ul className="flex-1 overflow-y-auto px-4 pb-4 md:px-5 md:pb-5">
        {orders.map((o) =>
        <li key={o.id} className="mb-2 flex items-center gap-4 rounded-xl bg-white px-4 py-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tabular-nums text-ink">{o.id}</span>
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${o.stage === last ? 'bg-ink text-white' : 'bg-jade-light text-jade-deep'}`}>
                  {demoStages[o.stage]}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-muted">
                {o.client} · {o.item}
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-canvas">
                <motion.div
                className="h-full rounded-full bg-brand"
                animate={{ width: `${(o.stage + 1) / demoStages.length * 100}%` }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} />
              
              </div>
            </div>
            <button
            type="button"
            onClick={() => advance(o.id)}
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-ink px-3.5 py-2 text-xs font-semibold text-white transition-colors duration-150 hover:bg-brand">
            
              {o.stage === last ? 'Reset' : 'Advance'}
              <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </li>
        )}
      </ul>
    </div>);

}