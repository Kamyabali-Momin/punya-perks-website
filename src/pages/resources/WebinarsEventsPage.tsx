import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PageCta } from '../../components/common/PageCta';
import { Calendar, Clock, Video, Users, CheckCircle2, ArrowRight, ChevronRight, X } from 'lucide-react';

interface WebinarEvent {
  id: string;
  type: 'Upcoming Live' | 'On-Demand Replay';
  date: string;
  duration: string;
  title: string;
  description: string;
  speakers: string;
  topic: string;
}

const EVENTS: WebinarEvent[] = [
  {
    id: 'dpdp-pos-compliance-2026',
    type: 'Upcoming Live',
    date: '10 Dec 2026 · 4:00 PM IST',
    duration: '45 min + Q&A',
    title: 'DPDP Act & WhatsApp Loyalty: Zero-Friction Compliance at Store Counters',
    description:
      'Live walkthrough of unbundled POS consent capture, TRAI DLT receipts, and automated data-erasure workflows without slowing down checkout lines.',
    speakers: 'Dishant Mehta (CTO) & Zil Mehta (Product Ops)',
    topic: 'Compliance · India',
  },
  {
    id: 'ledger-architecture-roundtable',
    type: 'Upcoming Live',
    date: '18 Dec 2026 · 11:00 AM AEDT',
    duration: '50 min + Q&A',
    title: 'Why Finance & Marketing Need One Append-Only Points Ledger',
    description:
      'How Australian and Indian retail CFOs eliminate balance-sheet breakage surprises with Ind AS 115 / IFRS 15 real-time liability reporting.',
    speakers: 'Keyur Mehta (MD) & Sohail Khan (Strategy)',
    topic: 'Architecture · Finance',
  },
  {
    id: 'pos-migration-masterclass',
    type: 'On-Demand Replay',
    date: 'Recorded Oct 2026',
    duration: '38 min',
    title: 'Migrating 140+ Stores Away from Legacy Monoliths in 4 Weeks',
    description:
      'Architecture blueprint covering dual-write ingestion, FIFO expiry lot replay, and zero-downtime Sunday night cutover checklists.',
    speakers: 'Punya Perks Engineering Pod',
    topic: 'Retail · Migration',
  },
  {
    id: 'upi-cashout-kyc-webinar',
    type: 'On-Demand Replay',
    date: 'Recorded Sep 2026',
    duration: '42 min',
    title: 'Designing KYC-Gated UPI & Bank Cash-Out Rewards for Fintechs',
    description:
      'How neo-banks and card issuers enforce maker-checker thresholds, velocity limits, and instant UPI payouts safely.',
    speakers: 'Solutions Architecture Team',
    topic: 'Banking · Payments',
  },
];

export const WebinarsEventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Upcoming Live' | 'On-Demand Replay'>('All');
  const [selectedEvent, setSelectedEvent] = useState<WebinarEvent | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);

  const visibleEvents = EVENTS.filter((e) => filter === 'All' || e.type === filter);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setRegistered(true);
    }
  };

  return (
    <MainLayout>
      <section
        className="relative w-full border-b border-[#EBDFC6] pt-12 pb-16 sm:pb-20 text-center overflow-hidden font-body bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/images/inner-hero-bg.jpg')",
          backgroundColor: '#FAF3E8',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center justify-center gap-2 text-xs text-[#847C75] mb-4">
            <Link to="/" className="hover:text-[#B5651A] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/resources" className="hover:text-[#B5651A] transition-colors">Resources</Link>
            <ChevronRight size={12} />
            <span className="text-[#17140F] font-bold">Webinars &amp; Events</span>
          </nav>

          <span className="font-body text-[11px] font-bold text-[#B5651A] tracking-[0.2em] uppercase block mb-3">
            WEBINARS &amp; EXECUTIVE BRIEFINGS
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#17140F] tracking-tight mb-4 leading-tight">
            Live sessions &amp; on-demand workshops.
          </h1>
          <p className="text-sm sm:text-base text-[#5B534C] max-w-2xl mx-auto leading-relaxed">
            Join loyalty architects, retail operators, and compliance leaders for practical walkthroughs across India, ANZ, and the UAE.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-b border-[#EBDFC6] font-body">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-5 border-b border-[#EBDFC6]">
            <div className="flex flex-wrap gap-2">
              {(['All', 'Upcoming Live', 'On-Demand Replay'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    filter === tab
                      ? 'bg-[#B5651A] text-white shadow-xs'
                      : 'bg-[#FAF5ED] text-[#5B534C] border border-[#EBDFC6] hover:text-[#17140F]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <span className="text-xs font-semibold text-[#847C75]">
              Showing {visibleEvents.length} sessions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleEvents.map((ev) => (
              <div
                key={ev.id}
                className="rounded-3xl bg-[#FCF8F2] border border-[#EBDFC6] hover:border-[#B5651A]/50 p-7 sm:p-8 flex flex-col justify-between gap-6 shadow-2xs hover:shadow-md transition-all"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        ev.type === 'Upcoming Live'
                          ? 'bg-[#FEF0E1] text-[#B5651A] border border-[#F6DECA]'
                          : 'bg-white text-[#5B534C] border border-[#EBDFC6]'
                      }`}
                    >
                      <Video size={12} />
                      {ev.type}
                    </span>
                    <span className="text-xs font-semibold text-[#847C75]">{ev.topic}</span>
                  </div>

                  <h2 className="font-display font-bold text-xl sm:text-2xl text-[#17140F] leading-snug">
                    {ev.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5B534C] leading-relaxed">{ev.description}</p>
                </div>

                <div className="pt-4 border-t border-[#EBDFC6] space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#5B534C]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#B5651A]" />
                      {ev.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} className="text-[#B5651A]" />
                      {ev.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users size={13} className="text-[#B5651A]" />
                      {ev.speakers}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedEvent(ev);
                      setRegistered(false);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>{ev.type === 'Upcoming Live' ? 'Register for session' : 'Watch on-demand'}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#EBDFC6] shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B5651A]">
                  {selectedEvent.type}
                </span>
                <h3 className="font-display font-bold text-xl text-[#17140F] mt-1">
                  {selectedEvent.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="p-1.5 rounded-full hover:bg-[#FAF5ED] cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {registered ? (
              <div className="p-5 rounded-2xl bg-[#FAF5ED] border border-[#EBDFC6] space-y-2 text-center">
                <CheckCircle2 size={28} className="text-emerald-600 mx-auto" />
                <div className="font-display font-bold text-base text-[#17140F]">
                  {selectedEvent.type === 'Upcoming Live' ? 'Seat Confirmed!' : 'Replay Link Sent!'}
                </div>
                <p className="text-xs text-[#5B534C]">
                  Calendar invite and session access link have been dispatched to {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#17140F] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Aryan Kantharia"
                    className="w-full h-11 px-4 rounded-xl border border-[#EBDFC6] text-sm outline-none focus:border-[#B5651A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#17140F] mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aryan@company.com"
                    className="w-full h-11 px-4 rounded-xl border border-[#EBDFC6] text-sm outline-none focus:border-[#B5651A]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-11 rounded-full bg-[#B5651A] hover:bg-[#9a5413] text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  {selectedEvent.type === 'Upcoming Live' ? 'Confirm Registration' : 'Unlock Replay'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <PageCta />
    </MainLayout>
  );
};
export default WebinarsEventsPage;
