# Austin Clinician Circle — Product Requirements Document

> **Version:** 1.0 (Draft)
> **Date:** April 20, 2026
> **Client:** Sarah Arnold, LPC-S — Restored Family Counseling
> **Project Code:** ACC

---

## 1. Executive Summary

The Austin Clinician Circle (ACC) is a **subscription-based virtual support network for licensed therapists and clinicians** in the Austin, TX area. It provides clinical community, professional development, and business support to combat the isolation of private practice.

ACC is **not** a client-facing therapy platform. It serves **therapists** — giving them a professional home with case consultation, CEUs, a referral network, a public-facing directory, and curated resources.

### What This Is NOT
- Not a group therapy practice (like Shelterwood Collective's client-facing side)
- Not an insurance billing service (Shelterwood's Affiliate tier)
- Not a physical co-working space
- Not a peer-support group chat (yet — community feature is deferred)

---

## 2. Problem Statement

Private practice therapists are often isolated. They lack:
- Trusted colleagues for case consultation and referrals
- Organized access to CEUs and professional development
- Marketing and business support
- A professional identity beyond their solo brand
- Burnout prevention structures

Sarah Arnold (founder of Restored Family Counseling) is building ACC to solve these problems for Austin-area clinicians through a virtual, subscription-based network.

---

## 3. Target Users

| User Type | Description |
|---|---|
| **Prospective Member** | Licensed therapist browsing the public site, evaluating membership |
| **Member (Clinician)** | Subscribed therapist who accesses resources, manages their profile, attends events |
| **Public Visitor** | Anyone looking for a therapist via the "Find a Clinician" directory |
| **Admin (Sarah)** | Manages members, uploads resources, reviews applications, manages events |

---

## 4. Pages & Features

### Site Map

![Site Map — All Pages](../diagrams/06-sitemap.png)

### User Journey — Prospective Member to Active Member

![User Journey](../diagrams/07-user-journey.png)

### 4.1 Public Pages (No Auth Required)

#### Page 1: Home / Coming Soon
**Purpose:** First impression + immediate CTA for prospective members.

**Sections:**
1. **Hero** — Tagline: "Deepen your work. Find your community." Brief description of ACC. Primary CTA: "Join the Circle." Secondary CTA: "Learn More."
2. **Value Proposition** — Three pillars from the invitation letter:
   - Clinical Focus (consultation, CEUs, resource library)
   - Professional Growth (directory, referrals, marketing guidance)
   - Custom Support (coaching, mindfulness, burnout prevention)
3. **About Preview** — Brief intro to Sarah and the mission. Link to "Who We Are."
4. **Membership Preview** — Pricing card with key benefits. CTA to "Join the Circle."
5. **Footer** — Contact info, social links, legal.

**Coming Soon variant:** Simplified version with just the hero, a brief description, email capture form, and "launching soon" messaging. This ships first.

---

#### Page 2: Who We Are
**Purpose:** Build trust and connection with prospective members.

**Sections:**
1. **Mission Statement** — Why ACC exists. Rooted in Sarah's experience: "The clinicians who thrive long term aren't just skilled — they're connected."
2. **Sarah's Story** — Founder bio, credentials (LPC-S), connection to Restored Family Counseling.
3. **Values** — Core values of the network (e.g., community over isolation, clinical excellence, sustainability, mutual support).
4. **What Makes ACC Different** — Not a peer group. Not a group practice. It's a full professional home. Virtual-first design.
5. **CTA** — "Ready to join?" → links to Join the Circle.

---

#### Page 3: What We Offer
**Purpose:** Detail the membership benefits for prospective members.

**Sections:**
1. **Overview** — "Everything you need to thrive in private practice."
2. **Clinical Focus**
   - Monthly group meetings for case consultation (first Thursday, 9–10:30am)
   - Continuing Education Units (CEUs)
   - Curated resource library of tools and materials
3. **Professional Growth**
   - Dedicated profile on the clinician directory
   - Trusted referral network
   - Marketing and business strategy guidance
4. **Custom Support**
   - Discounted one-on-one coaching with Sarah
   - Mindfulness and burnout prevention resources
   - Community Q&A (placeholder — feature TBD)
5. **Pricing Card** — Monthly subscription rate, what's included, CTA to join.
6. **FAQ** — Common questions about membership.

---

#### Page 4: Find a Clinician
**Purpose:** Public-facing directory so colleagues, clients, and referral sources can discover ACC member therapists.

**Sections:**
1. **Search/Filter Bar** — Filters (all optional):
   - Specialty (anxiety, trauma, depression, couples, family, etc.)
   - Modality (EMDR, CBT, IFS, somatic, etc.)
   - Client type (individual, couples, family, teen, child)
   - Format (virtual, in-person, both)
   - Insurance accepted
   - Language
   - Location/area served
   - Accepting new clients (yes/no)
2. **Clinician Cards Grid** — Photo, name, credentials, tagline, specialties (tags), "View Profile" link.
3. **Individual Clinician Profile Page** (dynamic route: `/clinicians/[slug]`):
   - Photo, name, credentials
   - Bio / about text
   - Specialties, modalities, client types
   - Insurance accepted
   - Contact info or booking link
   - Location / areas served

**Data source:** Clinician profiles managed by members via dashboard. Only active/approved members appear.

---

#### Page 5: Join the Circle
**Purpose:** Convert prospective members into paying subscribers.

**Sections:**
1. **Membership Benefits** — Recap of What We Offer (condensed).
2. **Pricing** — Monthly subscription card with price and feature list.
3. **How It Works** — Steps: Express Interest → Connect with Sarah → Sign Up → Onboarding.
4. **Application/Interest Form** — Name, email, license type, practice info, brief statement of interest.
5. **Stripe Checkout** — After approval, members receive a link to complete payment via Stripe Checkout.

**Flow:** Interest form → Sarah reviews → Approved → Stripe payment link sent → Account created → Onboarding.

---

#### Page 6: Login
**Purpose:** Auth gate for members and admin.

- BetterAuth login form (email/password)
- "Forgot password" flow
- Redirects to Member Dashboard on success
- Redirects to Admin Dashboard if admin role

---

### 4.2 Protected Pages (Auth Required)

#### Page 7: Member Dashboard
**Purpose:** Central hub for subscribed members.

**Tabs/Sections:**
1. **Overview** — Welcome message, upcoming events, quick links.
2. **My Profile** — Edit bio, photo, credentials, specialties, modalities, insurance, contact info. This data populates the public "Find a Clinician" directory.
3. **Resources** — Browse and download curated resources (PDFs, templates, guides, tools). Organized by category. Stored on Cloudflare R2.
4. **Events** — View upcoming events (monthly meetings, CEU sessions, workshops). Register/RSVP. View past event recordings if available.
5. **Subscription** — View plan, billing history, update payment method, cancel. Powered by Stripe Customer Portal.
6. **Community** — **PLACEHOLDER.** "Coming Soon" message. Future: discussion board, Q&A, real-time chat. The exact feature is TBD to avoid building the wrong thing.

---

#### Page 8: Admin Dashboard
**Purpose:** Sarah manages the entire network.

**Tabs/Sections:**
1. **Members** — View all members, approval status, subscription status. Approve/reject applications. Deactivate members.
2. **Applications** — Review incoming interest forms. Approve → triggers Stripe payment link email.
3. **Resources** — Upload, categorize, edit, delete resources (files stored on Cloudflare R2).
4. **Events** — Create, edit, delete events. Set date/time, description, Zoom/meet link, capacity.
5. **Subscriptions** — Overview of active/canceled/past-due subscriptions. Synced from Stripe via webhooks.
6. **Settings** — Site settings, pricing, contact info, etc.

---

## 5. Key Diagrams

All system diagrams are saved as PNG images in `notes/diagrams/`:

| # | Diagram | File |
|---|---|---|
| 1 | Architecture Overview | `diagrams/01-architecture-overview.png` |
| 2 | Database Schema (ERD) | `diagrams/02-database-erd.png` |
| 3 | Member Signup & Auth Flow | `diagrams/03-auth-flow.png` |
| 4 | Stripe Payment Flow | `diagrams/04-stripe-payment-flow.png` |
| 5 | File Storage Flow (R2) | `diagrams/05-file-storage-flow.png` |
| 6 | Site Map — All Pages | `diagrams/06-sitemap.png` |
| 7 | User Journey | `diagrams/07-user-journey.png` |
| 8 | Development Timeline (Gantt) | `diagrams/08-development-timeline.png` |

---

## 6. Subscription Model

| Detail | Value |
|---|---|
| **Tiers** | 1 tier (MVP). Can add tiers later. |
| **Billing** | Monthly recurring via Stripe |
| **Price** | TBD (mock: ~$99–149/month based on Shelterwood's $120 benchmark) |
| **Includes** | Everything in "What We Offer" — consultation, CEUs, resources, directory listing, referrals, coaching discount, events |
| **Payment flow** | Interest form → Admin approval → Stripe Checkout link → Recurring billing |
| **Cancellation** | Self-service via Stripe Customer Portal |

---

## 6. Content Strategy

Sarah will provide final copy. For prototyping, use the following sources:
- **Invitation letter** — Primary source for messaging, value props, tone
- **restoredfamily.com** — Tone and voice reference
- Shelterwood Collective — Structural inspiration (not copy)

**Tone:** Warm, professional, personal, grounded. Not corporate. Not overly spiritual (unlike Shelterwood). Clinical credibility with human warmth.

---

## 7. Non-Functional Requirements

| Requirement | Detail |
|---|---|
| **Performance** | < 2s page load (Vercel edge, static where possible) |
| **SEO** | Server-rendered public pages, meta tags, OpenGraph |
| **Accessibility** | WCAG 2.1 AA minimum |
| **Responsive** | Mobile-first, works on all screen sizes |
| **Security** | HTTPS, secure auth (BetterAuth), Stripe PCI compliance, role-based access |
| **Scalability** | Start with ~10–30 members, architecture supports 200+ |

---

## 8. MVP Scope vs. Future

### MVP (Phase 1)
- [x] Coming Soon page with email capture
- [ ] All 5 public pages (Home, Who We Are, What We Offer, Find a Clinician, Join the Circle)
- [ ] Login + BetterAuth
- [ ] Member Dashboard (profile, resources, events, subscription)
- [ ] Admin Dashboard (members, applications, resources, events, subscriptions)
- [ ] Stripe integration (checkout, webhooks, customer portal)
- [ ] Clinician directory with search/filter
- [ ] Resource file storage (Cloudflare R2)

### Phase 2 (Post-Launch)
- [ ] Community/discussion feature (type TBD)
- [ ] CEU tracking system
- [ ] Event recordings/archive
- [ ] Multiple subscription tiers
- [ ] Email notifications (welcome, event reminders, resource alerts)
- [ ] Analytics dashboard for admin
- [ ] Blog/content section

---

## 9. Success Metrics

- Number of founding members signed up
- Member retention rate (monthly churn)
- Directory traffic (public visitors finding clinicians)
- Resource engagement (downloads, views)
- Event attendance rate

---

## 10. Assumptions & Risks

| Assumption | Risk if Wrong |
|---|---|
| Sarah handles member vetting manually | Bottleneck if volume grows — may need automated screening |
| One subscription tier is sufficient | Members may want à la carte options |
| Community feature can be deferred | Members may expect real-time interaction from day one |
| Virtual-only is acceptable | Some members may want in-person meetup support |
| Content will be provided by Sarah | Prototype may need significant copy revisions |
