export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishedAt: string;
  categorySlug: string;
  content: string[];
}

export const blogCategories: BlogCategory[] = [
  {
    slug: "revenue",
    name: "Revenue",
    description: "Pricing, upsells, and math that help car detailers earn more from every job.",
    seoTitle: "Car Detailer Revenue Tips | Detool.AI Blog",
    seoDescription:
      "Practical revenue advice for mobile detailers and detailing shops — pricing, upsells, and how to turn missed calls into paid jobs.",
  },
  {
    slug: "automation",
    name: "Automation",
    description: "Systems that answer calls, send texts, and follow up while you work on cars.",
    seoTitle: "Detailing Business Automation | Detool.AI Blog",
    seoDescription:
      "Learn how car detailers use automation for missed-call text-back, quote follow-up, and review requests — without hiring more staff.",
  },
  {
    slug: "reviews",
    name: "Reviews",
    description: "Get more 5-star Google reviews and rank higher in local search.",
    seoTitle: "Google Reviews for Car Detailers | Detool.AI Blog",
    seoDescription:
      "Strategies and funnels to collect more Google reviews for your auto detailing business and dominate local Maps results.",
  },
  {
    slug: "marketing",
    name: "Marketing",
    description: "Campaigns, reactivation, and promotions that fill slow weeks.",
    seoTitle: "Car Detailer Marketing Ideas | Detool.AI Blog",
    seoDescription:
      "Marketing playbooks for detailers — SMS campaigns, seasonal promos, and how to bring past customers back without discounting.",
  },
  {
    slug: "leads",
    name: "Leads",
    description: "Capture, qualify, and convert more detailing inquiries 24/7.",
    seoTitle: "Lead Generation for Detailers | Detool.AI Blog",
    seoDescription:
      "How car detailers capture leads with quote forms, instant text-back, and websites that convert visitors into booked jobs.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "800-month-trick-mobile-detailers",
    title: "The $800/Month Trick Mobile Detailers Keep Ignoring",
    excerpt:
      "One extra detailing job per week at $200 pays for your entire marketing system. Here's the math — and why missed calls are costing you more than you think.",
    date: "June 5, 2026",
    publishedAt: "2026-06-05",
    categorySlug: "revenue",
    content: [
      "Most mobile detailers think they need dozens of new customers to grow revenue. The truth is simpler: one extra job per week — at a typical $150–$250 ticket — adds $600–$1,000 per month without spending a dollar on ads.",
      "The problem is not demand. It's leakage. When you're on a job, under a hood, or driving between clients, calls go unanswered. Studies on local service businesses show up to 30% of inbound calls are missed. For detailers, each missed call is often a $200+ job walking to the next shop on Google Maps.",
      "Do the math: four missed calls per month at a 50% close rate is two lost jobs — roughly $400 gone. Eight missed calls? $800. That money was already looking for you. They found your listing, dialed, and moved on when nobody picked up.",
      "The fix is not working longer hours. It's capturing intent the moment it happens. A missed-call text-back ('Sorry we missed you — what vehicle and service do you need?') plus a quote form on your site means leads get a response in seconds, not hours.",
      "Pair that with automated follow-up for quotes that go quiet, and you recover jobs you used to lose by accident. One recovered job per week covers a full marketing and automation stack — and everything after that is profit.",
      "If you want the full system — website, quote forms, text-back, reviews, and campaigns — Detool.AI builds it for car detailers in about 10 days. Book a free call and we'll map what one extra job per week looks like for your business.",
    ],
  },
  {
    slug: "detailers-lose-30-percent-calls",
    title: "Why Detailers Lose 30% of Their Calls (And How to Fix It in 10 Minutes)",
    excerpt:
      "You're on a job. The phone rings. They call the next detailer on Google. We analyzed hundreds of detailing businesses — here's the one automation that fixes it instantly.",
    date: "May 28, 2026",
    publishedAt: "2026-05-28",
    categorySlug: "automation",
    content: [
      "Car detailing is hands-on work. You cannot answer the phone while you're polishing paint or extracting seats. But your customers do not wait — they call the next listing with five stars and a fast response.",
      "Across local service businesses, roughly one in three inbound calls go unanswered. For mobile detailers without a receptionist, that number is often higher during peak hours and weekends.",
      "Each unanswered call is not just a missed conversation. It's a missed quote, a missed deposit, and a missed review from a happy customer you never got to serve.",
      "The highest-ROI fix is missed-call text-back. When a call rings through and you cannot pick up, an automatic text fires within seconds: who you are, that you're on a job, and a simple question about their vehicle and service.",
      "That single message does three things: it proves you're real and professional, it keeps the lead from calling a competitor, and it starts the conversation on text — where you can reply between jobs.",
      "Setup takes about 10 minutes once your business number is connected. No new app to check all day. Leads land in one inbox with their answers already captured.",
      "Detool.AI includes missed-call text-back, quote forms, and follow-up sequences built specifically for detailers. If you're tired of seeing 'missed call' notifications with no callback, this is the first automation to turn on.",
    ],
  },
  {
    slug: "more-google-reviews-without-begging",
    title: "How to Get More Google Reviews Without Begging",
    excerpt:
      "Google Maps is everything for detailers. Automated review requests after every job stack 5-star reviews while you focus on the cars.",
    date: "May 20, 2026",
    publishedAt: "2026-05-20",
    categorySlug: "reviews",
    content: [
      "For car detailers, Google Maps is the front door. When someone searches 'mobile detailer near me,' they pick from the top three results with strong ratings and recent reviews. Stars are not vanity — they are placement.",
      "Most owners know they should ask for reviews. Few do it consistently because asking feels awkward, easy to forget after a long day, and hard to track across techs or locations.",
      "The businesses winning local search do not ask harder. They ask at the right moment — automatically — with a direct link that opens Google in one tap.",
      "The best time to request a review is within an hour of job completion, while the customer is still admiring the finish. A short text with a personal thank-you and a review link converts far better than a generic email days later.",
      "Automating that message after every completed job means your review volume grows every week without you remembering. Over 90 days, that compounds into dozens of new 5-star ratings — exactly what Google's algorithm rewards.",
      "Pair review requests with a simple filter: happy customers go to Google; anyone with an issue gets a private feedback form first. That protects your public rating while still showing you care.",
      "Detool.AI sets up this review funnel for detailers as part of the core system — triggered after each job, no manual chasing required.",
    ],
  },
  {
    slug: "sms-campaign-fills-slow-weeks",
    title: "Slow Week? The SMS Campaign That Fills Your Schedule in 2 Hours",
    excerpt:
      "Every detailer has slow weeks. Most do nothing. Here's a proven one-click campaign that brings past customers back — without slashing your prices.",
    date: "May 12, 2026",
    publishedAt: "2026-05-12",
    categorySlug: "marketing",
    content: [
      "Slow weeks happen — weather, seasonality, or just a quiet patch after a busy run. Most detailers either panic-discount on social media or wait it out. Both leave money on the table.",
      "Your best leads are not strangers. They're past customers who already trust you, know your quality, and drive the same vehicle you detailed last time. Reactivation is the fastest way to fill gaps without ad spend.",
      "A simple SMS to your customer list — 'We have openings this Thursday and Friday for interior + exterior details. Reply YES to hold a spot.' — often books multiple jobs within hours.",
      "The key is timing and brevity. One clear offer, one call to action, sent Tuesday or Wednesday for mid-week gaps. No essay, no coupon code chaos.",
      "Customers who do not reply can get one follow-up two days later. Anyone who books should automatically drop out of the campaign so they are not annoyed.",
      "This works because detailing is recurring by nature. Paint gets dirty. Interiors collect dog hair. A nudge at the right time feels helpful, not salesy — especially from a shop they already used.",
      "Detool.AI includes pre-built reactivation campaigns for detailers. One click, your list, your openings — done before lunch.",
    ],
  },
  {
    slug: "five-star-reviews-autopilot-funnel",
    title: "5-Star Reviews on Autopilot: The Exact Funnel We Use for Detailers",
    excerpt:
      "Getting more Google reviews isn't about asking harder — it's about asking at the right time. Here's the system that works for auto detailing businesses.",
    date: "May 4, 2026",
    publishedAt: "2026-05-04",
    categorySlug: "reviews",
    content: [
      "A review funnel is a short sequence of steps that takes a happy customer from 'job done' to '5-star Google review' with almost zero friction. For detailers, it is one of the highest-leverage marketing assets you can install.",
      "Step one: job marked complete in your system (or a simple trigger you confirm). Step two: immediate thank-you text — genuine, short, from your business name. Step three: review link that opens Google Maps directly to your listing.",
      "Step four (optional but smart): if they click an internal 'How did we do?' link first, route 4–5 star responses to Google and lower scores to a private form. That keeps your public profile strong while surfacing real issues.",
      "What kills most funnels is delay. Wait until tomorrow and response rates crater. Automate the send for within 30–60 minutes of completion.",
      "Consistency beats intensity. Three new reviews every week beats a burst of ten in January and silence for six months. Google's local algorithm favors steady, recent activity.",
      "Detailers using this funnel typically see review velocity double within 60 days — without staff awkwardly asking at the door. The system asks; you keep detailing.",
      "This exact funnel ships with Detool.AI for car detailers. Book a call to see how it connects to your quote flow and job completion process.",
    ],
  },
  {
    slug: "quote-forms-vs-phone-tag",
    title: "Quote Forms vs. Phone Tag: Why Detailers Need Both",
    excerpt:
      "A professional website with a quote form captures leads 24/7. Pair it with missed-call text-back and you never lose a hot lead again.",
    date: "April 26, 2026",
    publishedAt: "2026-04-26",
    categorySlug: "leads",
    content: [
      "Some customers want to call. Others will never pick up the phone — they want to submit a form at 10pm and get a text back in the morning. Car detailers who only offer one path lose the other half of leads.",
      "A quote form on a professional detailing website does three jobs: it captures vehicle type, service level, and photos; it qualifies budget and timeline; and it gives you a written record you can follow up on automatically.",
      "Phone tag happens when you call back hours later and they have already booked someone else. Forms plus instant auto-reply ('Got your request — we'll send a quote within X hours') set expectations and keep you in the running.",
      "Missed-call text-back covers the opposite scenario: high-intent callers who want an answer now. Together, form + text-back means you win whether they browse or dial.",
      "The follow-up layer matters as much as capture. A quote sent with no reminder dies quietly. A short sequence — day 1 quote, day 2 'any questions?', day 4 'still need this done?' — books jobs that used to slip away.",
      "Your website should also show real work, clear packages, and social proof so form submitters are pre-sold before you ever text them. That is not vanity — it raises close rates on every lead.",
      "Detool.AI builds the full lead stack for detailers: conversion-focused site, smart quote forms, missed-call text-back, and automated follow-up. One system, no duct tape.",
    ],
  },
];

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryName(categorySlug: string): string {
  return getCategoryBySlug(categorySlug)?.name ?? categorySlug;
}
