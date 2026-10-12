import React, { useState, useEffect, useMemo, useCallback } from 'react';
import SEOHead from '../components/ui/SEOHead';
import { fetchEnquiries } from '../utils/api';

// --- SVG Icons ---
function PhoneIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.07-1.78-.403-1.236-.508-2.027-1.76-2.09-1.843-.06-.084-.492-.655-.492-1.249 0-.594.312-.886.422-1.007.11-.12.24-.15.32-.15.081 0 .161.001.232.005.074.004.173-.028.27.206.101.24.344.839.375.901.03.063.051.136.01.217-.04.082-.06.132-.12.202-.06.07-.127.156-.181.21-.06.06-.123.125-.053.245.07.12.311.514.668.831.46.409.848.536.968.596.12.06.19.05.26-.03.07-.08.3-.35.38-.47.08-.12.16-.1.27-.06.11.04.7.33.82.39.12.06.2.09.23.14.03.05.03.29-.11.695z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.176L2 22l4.966-1.393A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.16 8.16 0 01-4.226-1.176l-.303-.18-2.946.826.837-2.883-.198-.314A8.165 8.165 0 013.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
    </svg>
  );
}

function MailIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function CalendarIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function UsersIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function RefreshIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  );
}

function SearchIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function BuildingIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function MessageIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  );
}

function SparklesIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function CakeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.5c0-.83-.67-1.5-1.5-1.5h-15C3.67 14 3 14.67 3 15.5V20a1 1 0 001 1h16a1 1 0 001-1v-4.5zM5 14V9.5C5 8.67 5.67 8 6.5 8h11c.83 0 1.5.67 1.5 1.5V14M12 4v4m0 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  );
}

function InboxIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
  );
}

function CloseIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// --- Config & Helpers ---

const FILTER_OPTIONS = [
  { key: 'ALL', label: 'ALL' },
  { key: 'GENERAL', label: 'GENERAL' },
  { key: 'TICKET', label: 'TICKET' },
  { key: 'SCHOOL_TRIP', label: 'SCHOOL_TRIP' },
  { key: 'BIRTHDAY', label: 'BIRTHDAY' },
  { key: 'GROUP_BOOKING', label: 'GROUP_BOOKING' },
];

/**
 * Normalizes raw enquiry_type strings from Postgres or JSON fallback
 */
function normalizeType(type) {
  if (!type) return 'GENERAL';
  const str = String(type).toUpperCase().trim().replace(/[\s-]+/g, '_');
  if (str.includes('SCHOOL')) return 'SCHOOL_TRIP';
  if (str.includes('BIRTHDAY')) return 'BIRTHDAY';
  if (str.includes('GROUP')) return 'GROUP_BOOKING';
  if (str.includes('TICKET')) return 'TICKET';
  if (str.includes('GENERAL')) return 'GENERAL';
  return 'GENERAL';
}

/**
 * Type presentation info
 */
const TYPE_CONFIG = {
  GENERAL: {
    label: 'General Enquiry',
    badge: 'bg-blue-50 text-blue-700 border-blue-200 ring-1 ring-blue-500/20',
    dot: 'bg-blue-500',
    iconBg: 'bg-blue-100 text-blue-700',
  },
  TICKET: {
    label: 'Ticket Enquiry',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 ring-1 ring-emerald-500/20',
    dot: 'bg-emerald-500',
    iconBg: 'bg-emerald-100 text-emerald-700',
  },
  SCHOOL_TRIP: {
    label: 'School Trip',
    badge: 'bg-orange-50 text-orange-700 border-orange-200 ring-1 ring-orange-500/20',
    dot: 'bg-orange-500',
    iconBg: 'bg-orange-100 text-orange-700',
  },
  BIRTHDAY: {
    label: 'Birthday Party',
    badge: 'bg-purple-50 text-purple-700 border-purple-200 ring-1 ring-purple-500/20',
    dot: 'bg-purple-500',
    iconBg: 'bg-purple-100 text-purple-700',
  },
  GROUP_BOOKING: {
    label: 'Group Booking',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200 ring-1 ring-indigo-500/20',
    dot: 'bg-indigo-500',
    iconBg: 'bg-indigo-100 text-indigo-700',
  },
};

/**
 * Format dates into friendly readable strings
 */
function formatDate(dateVal) {
  if (!dateVal) return 'Not specified';
  try {
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return String(dateVal);
    return d.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return String(dateVal);
  }
}

function formatDateTime(dateVal) {
  if (!dateVal) return 'N/A';
  try {
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return String(dateVal);
    return d.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  } catch {
    return String(dateVal);
  }
}

function isCreatedToday(dateVal) {
  if (!dateVal) return false;
  try {
    const d = new Date(dateVal);
    const today = new Date();
    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  } catch {
    return false;
  }
}

/**
 * Clean phone number for WhatsApp link
 */
function getWhatsAppNumber(phone) {
  if (!phone) return '';
  const digits = String(phone).replace(/\D/g, '');
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

/**
 * Clean phone number for tel: link
 */
function getTelNumber(phone) {
  if (!phone) return '';
  return String(phone).replace(/[^\d+]/g, '');
}

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [lastRefreshed, setLastRefreshed] = useState(null);

  // Filters
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected enquiry for detail modal
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  // Fetch data
  const loadData = useCallback(async (isManualRefresh = false) => {
    if (isManualRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const data = await fetchEnquiries();
      // Ensure data is array
      const list = Array.isArray(data) ? data : [];
      // Sort newest first
      list.sort((a, b) => {
        const timeA = new Date(a.created_at || a.createdAt || 0).getTime();
        const timeB = new Date(b.created_at || b.createdAt || 0).getTime();
        return timeB - timeA;
      });
      setEnquiries(list);
      setLastRefreshed(new Date());
    } catch (err) {
      console.error('Failed to load enquiries:', err);
      setError(err.message || 'Failed to fetch customer enquiries from server');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Summary statistics
  const stats = useMemo(() => {
    let todayCount = 0;
    let schoolOrGroupCount = 0;
    let birthdayCount = 0;
    const typeCounts = {
      ALL: enquiries.length,
      GENERAL: 0,
      TICKET: 0,
      SCHOOL_TRIP: 0,
      BIRTHDAY: 0,
      GROUP_BOOKING: 0,
    };

    enquiries.forEach((item) => {
      const norm = normalizeType(item.enquiry_type || item.enquiryType);
      if (typeCounts[norm] !== undefined) {
        typeCounts[norm]++;
      }

      const createdDate = item.created_at || item.createdAt;
      if (isCreatedToday(createdDate)) {
        todayCount++;
      }

      if (norm === 'SCHOOL_TRIP' || norm === 'GROUP_BOOKING') {
        schoolOrGroupCount++;
      }

      if (norm === 'BIRTHDAY') {
        birthdayCount++;
      }
    });

    return {
      total: enquiries.length,
      today: todayCount,
      schoolOrGroup: schoolOrGroupCount,
      birthday: birthdayCount,
      counts: typeCounts,
    };
  }, [enquiries]);

  // Filtered and searched list
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const normType = normalizeType(item.enquiry_type || item.enquiryType);

      // Filter pill match
      if (activeFilter !== 'ALL' && normType !== activeFilter) {
        return false;
      }

      // Search match (Name, Phone, Email, Organization, Message)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const name = (item.name || '').toLowerCase();
        const phone = (item.phone || '').toLowerCase();
        const email = (item.email || '').toLowerCase();
        const org = (item.organization || '').toLowerCase();
        const msg = (item.message || '').toLowerCase();
        const pkg = (item.selected_package || item.selectedPackage || '').toLowerCase();

        const matches =
          name.includes(query) ||
          phone.includes(query) ||
          email.includes(query) ||
          org.includes(query) ||
          msg.includes(query) ||
          pkg.includes(query);

        if (!matches) return false;
      }

      return true;
    });
  }, [enquiries, activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20 pt-8">
      <SEOHead
        title="Admin - Enquiries | SBS Water Park"
        robots="noindex, nofollow"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* --- Top Header & Action Bar --- */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800 mb-2 border border-cyan-200">
                <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
                MANAGEMENT CONSOLE
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Customer Enquiries & Leads
              </h1>
              <p className="mt-1 text-sm sm:text-base text-gray-600">
                Live overview of booking requests, ticket enquiries, and school picnic proposals.
              </p>
            </div>

            {/* Refresh Action */}
            <div className="flex items-center gap-3">
              {lastRefreshed && (
                <span className="hidden sm:inline-block text-xs text-gray-500">
                  Updated: {lastRefreshed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
              )}
              <button
                type="button"
                onClick={() => loadData(true)}
                disabled={loading || refreshing}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 shadow-xs hover:bg-gray-50 hover:border-gray-400 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                title="Refresh enquiries list"
              >
                <RefreshIcon
                  className={`w-4 h-4 text-cyan-600 ${refreshing ? 'animate-spin' : ''}`}
                />
                <span>{refreshing ? 'Refreshing...' : 'Refresh'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* --- Summary Cards (4 KPIs) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* Card 1: Total Enquiries */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Total Enquiries
              </span>
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-100">
                <InboxIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {stats.total}
              </div>
              <p className="text-xs text-slate-500 mt-1">All incoming leads</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-500" />
          </div>

          {/* Card 2: Today's Leads */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Today's Leads
              </span>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                <SparklesIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stats.today}
                </div>
                {stats.today > 0 && (
                  <span className="inline-flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Active today
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-1">Received in last 24 hours</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500" />
          </div>

          {/* Card 3: School & Group Bookings */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                School & Group Bookings
              </span>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                <UsersIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {stats.schoolOrGroup}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {stats.counts.SCHOOL_TRIP} School · {stats.counts.GROUP_BOOKING} Group
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" />
          </div>

          {/* Card 4: Birthday Parties */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Birthday Parties
              </span>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                <CakeIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {stats.birthday}
              </div>
              <p className="text-xs text-slate-500 mt-1">Celebration packages</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500" />
          </div>
        </div>

        {/* --- Search & Filter Pills Section --- */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 sm:p-5 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-thin">
              {FILTER_OPTIONS.map((opt) => {
                const isActive = activeFilter === opt.key;
                const count = stats.counts[opt.key] ?? 0;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setActiveFilter(opt.key)}
                    className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-cyan-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                        isActive ? 'bg-cyan-800 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <SearchIcon className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, phone, email, org..."
                className="w-full pl-9 pr-9 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  title="Clear search"
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Indicator */}
          {(activeFilter !== 'ALL' || searchQuery.trim()) && (
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>
                Showing <strong className="text-slate-800">{filteredEnquiries.length}</strong> of{' '}
                <strong className="text-slate-800">{enquiries.length}</strong> total enquiries
                {searchQuery.trim() && ` matching "${searchQuery}"`}
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('ALL');
                  setSearchQuery('');
                }}
                className="text-cyan-600 hover:text-cyan-800 font-semibold hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* --- Error Banner --- */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <span className="text-xl">⚠️</span>
              <div>
                <h4 className="text-sm font-bold text-rose-900">Failed to sync enquiries</h4>
                <p className="text-xs text-rose-700 mt-0.5">{error}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => loadData(true)}
              className="px-3 py-1.5 bg-rose-100 hover:bg-rose-200 text-rose-900 text-xs font-bold rounded-lg transition-colors cursor-pointer shrink-0"
            >
              Try Again
            </button>
          </div>
        )}

        {/* --- Loading State --- */}
        {loading && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-xs">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-cyan-600 border-t-transparent mb-4" />
            <h3 className="text-base font-bold text-slate-800">Loading Customer Enquiries...</h3>
            <p className="text-xs text-slate-500 mt-1">Connecting to database and fetching leads.</p>
          </div>
        )}

        {/* --- Empty State --- */}
        {!loading && filteredEnquiries.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-xs">
            <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-4 text-2xl">
              📂
            </div>
            <h3 className="text-lg font-bold text-slate-800">No Enquiries Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
              {searchQuery || activeFilter !== 'ALL'
                ? 'No customer enquiries matched your current search filters. Try clearing or adjusting your criteria.'
                : 'No customer enquiries have been received yet. When visitors fill out ticket forms, school trip packages, or contact forms, they will instantly appear here.'}
            </p>
            {(searchQuery || activeFilter !== 'ALL') && (
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('ALL');
                  setSearchQuery('');
                }}
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-cyan-700 text-white rounded-xl text-sm font-semibold hover:bg-cyan-800 transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}

        {/* --- Data Display: Desktop Table --- */}
        {!loading && filteredEnquiries.length > 0 && (
          <>
            <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                      <th className="py-3.5 px-4 sm:px-6">Customer & Org</th>
                      <th className="py-3.5 px-4">Type</th>
                      <th className="py-3.5 px-4">Direct Contact</th>
                      <th className="py-3.5 px-4">Pax / Group</th>
                      <th className="py-3.5 px-4">Visit Date</th>
                      <th className="py-3.5 px-4">Submitted</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {filteredEnquiries.map((item, index) => {
                      const id = item.id || `enq-${index}`;
                      const rawType = item.enquiry_type || item.enquiryType;
                      const normType = normalizeType(rawType);
                      const typeMeta = TYPE_CONFIG[normType] || TYPE_CONFIG.GENERAL;
                      const org = item.organization;
                      const phone = item.phone || '';
                      const email = item.email || '';
                      const preferredDate = item.preferred_date || item.preferredDate;
                      const createdAt = item.created_at || item.createdAt;
                      const numPeople = item.number_of_people || item.numberOfPeople;
                      const numStudents = item.number_of_students || item.numberOfStudents;
                      const numTeachers = item.number_of_teachers || item.numberOfTeachers;
                      const pkg = item.selected_package || item.selectedPackage;
                      const message = item.message;
                      const waNum = getWhatsAppNumber(phone);
                      const telNum = getTelNumber(phone);
                      const isToday = isCreatedToday(createdAt);

                      const whatsappMsg = `Hello ${item.name || 'there'}, thank you for reaching out to SBS Water Park regarding your ${typeMeta.label}! How can we assist you with your booking?`;

                      return (
                        <tr
                          key={id}
                          className="hover:bg-cyan-50/30 transition-colors group"
                        >
                          {/* 1. Customer & Org */}
                          <td className="py-4 px-4 sm:px-6">
                            <div className="font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                              {item.name || 'Anonymous Guest'}
                            </div>
                            {org ? (
                              <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5 font-medium">
                                <BuildingIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span className="truncate max-w-[200px]" title={org}>
                                  {org}
                                </span>
                              </div>
                            ) : (
                              <div className="text-xs text-slate-400 mt-0.5">Individual</div>
                            )}
                          </td>

                          {/* 2. Type */}
                          <td className="py-4 px-4">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${typeMeta.badge}`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${typeMeta.dot}`} />
                              {typeMeta.label}
                            </span>
                            {pkg && (
                              <div className="text-[11px] text-slate-500 mt-1 truncate max-w-[140px]" title={pkg}>
                                {pkg}
                              </div>
                            )}
                          </td>

                          {/* 3. Direct Contact */}
                          <td className="py-4 px-4">
                            <div className="flex flex-col gap-1.5">
                              {/* Phone with Call & WA buttons */}
                              {phone ? (
                                <div className="flex items-center gap-1.5">
                                  <span className="text-xs font-semibold text-slate-800 mr-1">
                                    {phone}
                                  </span>
                                  {telNum && (
                                    <a
                                      href={`tel:${telNum}`}
                                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-md text-[11px] font-bold transition-colors"
                                      title="Call customer"
                                    >
                                      <PhoneIcon className="w-3 h-3" />
                                      Call
                                    </a>
                                  )}
                                  {waNum && (
                                    <a
                                      href={`https://wa.me/${waNum}?text=${encodeURIComponent(whatsappMsg)}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-md text-[11px] font-bold transition-colors"
                                      title="Chat on WhatsApp"
                                    >
                                      <WhatsAppIcon className="w-3 h-3 text-emerald-600" />
                                      WA
                                    </a>
                                  )}
                                </div>
                              ) : (
                                <span className="text-xs text-slate-400">No phone provided</span>
                              )}

                              {/* Email */}
                              {email ? (
                                <a
                                  href={`mailto:${email}?subject=${encodeURIComponent('SBS Water Park - Response to Your Enquiry')}`}
                                  className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-cyan-700 transition-colors truncate max-w-[200px]"
                                  title={email}
                                >
                                  <MailIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                  <span className="truncate">{email}</span>
                                </a>
                              ) : (
                                <span className="text-xs text-slate-400 italic">No email</span>
                              )}
                            </div>
                          </td>

                          {/* 4. Pax / Group */}
                          <td className="py-4 px-4">
                            {numStudents ? (
                              <div>
                                <span className="font-semibold text-slate-800 text-xs">
                                  {numStudents} Students
                                </span>
                                {numTeachers ? (
                                  <span className="text-[11px] text-slate-500 block">
                                    +{numTeachers} Teachers
                                  </span>
                                ) : null}
                              </div>
                            ) : numPeople ? (
                              <span className="font-semibold text-slate-800 text-xs">
                                {numPeople} People
                              </span>
                            ) : (
                              <span className="text-xs text-slate-400">—</span>
                            )}
                          </td>

                          {/* 5. Visit Date */}
                          <td className="py-4 px-4 text-xs text-slate-700">
                            {preferredDate ? (
                              <div className="flex items-center gap-1 font-medium">
                                <CalendarIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span>{formatDate(preferredDate)}</span>
                              </div>
                            ) : (
                              <span className="text-slate-400">Not fixed</span>
                            )}
                          </td>

                          {/* 6. Submitted */}
                          <td className="py-4 px-4 text-xs">
                            <div className="text-slate-700 font-medium whitespace-nowrap">
                              {formatDateTime(createdAt)}
                            </div>
                            {isToday && (
                              <span className="inline-block px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800 mt-0.5">
                                TODAY
                              </span>
                            )}
                          </td>

                          {/* 7. Actions & View */}
                          <td className="py-4 px-4 text-right">
                            <button
                              type="button"
                              onClick={() => setSelectedEnquiry(item)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-cyan-700 hover:text-white text-slate-700 text-xs font-bold rounded-lg transition-all cursor-pointer shadow-2xs"
                            >
                              <MessageIcon className="w-3.5 h-3.5" />
                              <span>Details</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* --- Data Display: Mobile Cards View --- */}
            <div className="lg:hidden space-y-4">
              {filteredEnquiries.map((item, index) => {
                const id = item.id || `enq-card-${index}`;
                const rawType = item.enquiry_type || item.enquiryType;
                const normType = normalizeType(rawType);
                const typeMeta = TYPE_CONFIG[normType] || TYPE_CONFIG.GENERAL;
                const org = item.organization;
                const phone = item.phone || '';
                const email = item.email || '';
                const preferredDate = item.preferred_date || item.preferredDate;
                const createdAt = item.created_at || item.createdAt;
                const numPeople = item.number_of_people || item.numberOfPeople;
                const numStudents = item.number_of_students || item.numberOfStudents;
                const numTeachers = item.number_of_teachers || item.numberOfTeachers;
                const pkg = item.selected_package || item.selectedPackage;
                const message = item.message;
                const waNum = getWhatsAppNumber(phone);
                const telNum = getTelNumber(phone);
                const isToday = isCreatedToday(createdAt);

                const whatsappMsg = `Hello ${item.name || 'there'}, thank you for reaching out to SBS Water Park regarding your ${typeMeta.label}! How can we assist you?`;

                return (
                  <div
                    key={id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:shadow-md transition-shadow"
                  >
                    {/* Top Row: Name, Org, Type */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {item.name || 'Anonymous Guest'}
                        </h3>
                        {org && (
                          <div className="flex items-center gap-1 text-xs text-slate-600 mt-0.5 font-medium">
                            <BuildingIcon className="w-3.5 h-3.5 text-slate-400" />
                            <span>{org}</span>
                          </div>
                        )}
                      </div>
                      <span
                        className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${typeMeta.badge}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${typeMeta.dot}`} />
                        {typeMeta.label}
                      </span>
                    </div>

                    {/* Quick Contact Action Bar (Call, WhatsApp, Email) */}
                    <div className="grid grid-cols-3 gap-2 my-3.5">
                      {/* Call Button */}
                      {telNum ? (
                        <a
                          href={`tel:${telNum}`}
                          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors text-center"
                        >
                          <PhoneIcon className="w-3.5 h-3.5" />
                          <span>Call</span>
                        </a>
                      ) : (
                        <div className="py-2 px-3 rounded-xl text-xs font-medium bg-slate-50 text-slate-400 border border-slate-200 text-center">
                          No Phone
                        </div>
                      )}

                      {/* WhatsApp Button */}
                      {waNum ? (
                        <a
                          href={`https://wa.me/${waNum}?text=${encodeURIComponent(whatsappMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors text-center"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                          <span>WhatsApp</span>
                        </a>
                      ) : (
                        <div className="py-2 px-3 rounded-xl text-xs font-medium bg-slate-50 text-slate-400 border border-slate-200 text-center">
                          No WA
                        </div>
                      )}

                      {/* Email Button */}
                      {email ? (
                        <a
                          href={`mailto:${email}?subject=${encodeURIComponent('SBS Water Park - Response to Your Enquiry')}`}
                          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-colors text-center"
                        >
                          <MailIcon className="w-3.5 h-3.5" />
                          <span>Email</span>
                        </a>
                      ) : (
                        <div className="py-2 px-3 rounded-xl text-xs font-medium bg-slate-50 text-slate-400 border border-slate-200 text-center">
                          No Email
                        </div>
                      )}
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-b border-slate-100 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Visit Date</span>
                        <div className="flex items-center gap-1 text-slate-800 font-semibold mt-0.5">
                          <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
                          <span>{formatDate(preferredDate)}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Pax / Students</span>
                        <div className="flex items-center gap-1 text-slate-800 font-semibold mt-0.5">
                          <UsersIcon className="w-3.5 h-3.5 text-slate-400" />
                          <span>
                            {numStudents
                              ? `${numStudents} Students`
                              : numPeople
                              ? `${numPeople} Persons`
                              : 'Not specified'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Message Preview */}
                    {message && (
                      <div className="mt-3 p-2.5 rounded-xl bg-slate-50 text-xs text-slate-700 border border-slate-100 line-clamp-2 italic">
                        "{message}"
                      </div>
                    )}

                    {/* Card Footer: Submitted Time & View Full Details Button */}
                    <div className="mt-3.5 pt-2 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <span>{formatDateTime(createdAt)}</span>
                        {isToday && (
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800">
                            TODAY
                          </span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedEnquiry(item)}
                        className="font-bold text-cyan-700 hover:text-cyan-800 hover:underline cursor-pointer"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* --- Detail Modal --- */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {(() => {
                    const norm = normalizeType(
                      selectedEnquiry.enquiry_type || selectedEnquiry.enquiryType
                    );
                    const cfg = TYPE_CONFIG[norm] || TYPE_CONFIG.GENERAL;
                    return (
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border ${cfg.badge}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                        {cfg.label}
                      </span>
                    );
                  })()}
                  {selectedEnquiry.selected_package || selectedEnquiry.selectedPackage ? (
                    <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                      {selectedEnquiry.selected_package || selectedEnquiry.selectedPackage}
                    </span>
                  ) : null}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {selectedEnquiry.name || 'Anonymous Guest'}
                </h3>
                {selectedEnquiry.organization && (
                  <p className="text-xs text-slate-600 mt-0.5 flex items-center gap-1 font-semibold">
                    <BuildingIcon className="w-3.5 h-3.5 text-slate-400" />
                    {selectedEnquiry.organization}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                title="Close modal"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-4 space-y-4 text-sm">
              {/* Contact Actions Row */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Instant Contact Actions
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {/* Call */}
                  {selectedEnquiry.phone ? (
                    <a
                      href={`tel:${getTelNumber(selectedEnquiry.phone)}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                    >
                      <PhoneIcon className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  ) : (
                    <div className="py-2.5 px-3 rounded-xl text-xs font-medium bg-slate-50 text-slate-400 border border-slate-200 text-center">
                      No Phone
                    </div>
                  )}

                  {/* WhatsApp */}
                  {selectedEnquiry.phone ? (
                    <a
                      href={`https://wa.me/${getWhatsAppNumber(selectedEnquiry.phone)}?text=${encodeURIComponent(
                        `Hello ${selectedEnquiry.name || 'Customer'}, thank you for contacting SBS Water Park! We received your enquiry and would love to help you plan your visit.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  ) : (
                    <div className="py-2.5 px-3 rounded-xl text-xs font-medium bg-slate-50 text-slate-400 border border-slate-200 text-center">
                      No WA
                    </div>
                  )}

                  {/* Email */}
                  {selectedEnquiry.email ? (
                    <a
                      href={`mailto:${selectedEnquiry.email}?subject=${encodeURIComponent(
                        'SBS Water Park - Response to Your Enquiry'
                      )}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-colors"
                    >
                      <MailIcon className="w-4 h-4" />
                      <span>Send Email</span>
                    </a>
                  ) : (
                    <div className="py-2.5 px-3 rounded-xl text-xs font-medium bg-slate-50 text-slate-400 border border-slate-200 text-center">
                      No Email
                    </div>
                  )}
                </div>
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Phone</span>
                  <span className="font-semibold text-slate-800">
                    {selectedEnquiry.phone || 'N/A'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Email</span>
                  <span className="font-semibold text-slate-800 truncate block">
                    {selectedEnquiry.email || 'N/A'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Preferred Date</span>
                  <span className="font-semibold text-slate-800">
                    {formatDate(selectedEnquiry.preferred_date || selectedEnquiry.preferredDate)}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Group Size</span>
                  <span className="font-semibold text-slate-800">
                    {selectedEnquiry.number_of_students || selectedEnquiry.numberOfStudents
                      ? `${selectedEnquiry.number_of_students || selectedEnquiry.numberOfStudents} Students ${
                          selectedEnquiry.number_of_teachers || selectedEnquiry.numberOfTeachers
                            ? `(+${selectedEnquiry.number_of_teachers || selectedEnquiry.numberOfTeachers} Teachers)`
                            : ''
                        }`
                      : selectedEnquiry.number_of_people || selectedEnquiry.numberOfPeople
                      ? `${selectedEnquiry.number_of_people || selectedEnquiry.numberOfPeople} Persons`
                      : 'Not specified'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Source Page</span>
                  <span className="font-semibold text-slate-800">
                    {selectedEnquiry.source_page || selectedEnquiry.sourcePage || 'Website'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Submitted At</span>
                  <span className="font-semibold text-slate-800">
                    {formatDateTime(selectedEnquiry.created_at || selectedEnquiry.createdAt)}
                  </span>
                </div>
              </div>

              {/* Customer Message */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Customer Message / Notes
                </span>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-700 leading-relaxed max-h-40 overflow-y-auto whitespace-pre-wrap">
                  {selectedEnquiry.message || 'No additional message was provided with this enquiry.'}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
