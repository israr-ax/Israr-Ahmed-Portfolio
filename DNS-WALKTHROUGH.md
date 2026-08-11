# DNS Walkthrough — israr.dev on Netlify

**Author:** Israr Ahmed
**Purpose:** Explain, in plain language, what a CNAME record is, what value mine will hold, and what happens between someone typing my domain and Netlify serving my site. Written now so it's a ready checklist when my FlyRank subdomain (`israr.flyrank.ai`) is provisioned.

---

## 1. What a CNAME record is

A **CNAME (Canonical Name) record** is a line in a domain's DNS settings that says "this name is really just another name for that other name." It doesn't point to an IP address directly — it points to *another hostname*, which itself eventually resolves to an IP address.

Analogy: think of DNS like a phone book. An **A record** is a phone book entry that lists someone's actual phone number (an IP address). A **CNAME record** is an entry that says "for this name, look up this *other* entry instead" — like a forwarding note: "Israr — see listing under 'IsrarPortfolio.netlify.app'."

This matters for me because Netlify's servers don't have one fixed IP address I can point to — Netlify runs a large, load-balanced network, and the specific server that answers a request can change. A CNAME lets me point at Netlify's *name* instead of a specific IP, so Netlify can move traffic around behind the scenes without me ever touching my DNS again.

## 2. What value mine will hold

Once my FlyRank subdomain is granted:

- **Record type:** CNAME
- **Host / name:** `israr` (making the full address `israr.flyrank.ai`)
- **Value / points to:** `israr-ahmed.netlify.app` (my renamed Netlify site — the current free-tier deliverable URL for this assignment)
- **TTL:** left at whatever FlyRank's default is (commonly 3,600 seconds / 1 hour) unless a faster propagation is needed

In plain terms: the record will say *"whenever anyone asks for `israr.flyrank.ai`, tell them to actually go ask about `israr-ahmed.netlify.app` instead."*

Ops creates this record on FlyRank's side (since they control the `flyrank.ai` zone). My half of the work is adding `israr.flyrank.ai` as a **custom domain** inside my Netlify site settings, so Netlify knows to accept and serve requests for that name once they arrive — and so Netlify can issue an HTTPS certificate for it.

## 3. What actually happens when someone types my address

Say a recruiter types `israr.flyrank.ai` into their browser. Here's the chain of events, step by step:

1. **The browser checks its own cache first.** If it has recently looked up this address, it may already know the answer and skip straight to step 6.

2. **The request goes to a resolver.** If nothing is cached, the browser asks a **DNS resolver** — usually run by the recruiter's ISP, or a public one like Google (`8.8.8.8`) or Cloudflare (`1.1.1.1`) if they've configured it. The resolver's job is to do the legwork of finding the answer on the browser's behalf.

3. **The resolver asks the root and TLD nameservers.** The resolver doesn't know the answer either, so it works its way down: it asks a **root nameserver** "who handles `.ai` domains?", gets pointed to the `.ai` **TLD nameserver**, then asks that "who handles `flyrank.ai`?"

4. **The flyrank.ai nameserver answers with the record.** FlyRank's **authoritative nameserver** — the one that actually holds the DNS records for `flyrank.ai` — is asked "what do you have for `israr.flyrank.ai`?" It replies with the CNAME record: *"that's really `israr-ahmed.netlify.app`."*

5. **The resolver repeats the lookup for the new name.** Since a CNAME is a redirect to another name (not an IP), the resolver now has to look up `israr-ahmed.netlify.app` the same way — eventually reaching Netlify's nameservers, which return the actual IP address(es) of a Netlify edge server.

6. **The resolver sends the final IP address back to the browser.** The browser now has an IP it can actually connect to.

7. **The browser connects and requests HTTPS.** The browser opens a secure connection to that IP. Netlify's server presents an SSL/TLS certificate for `israr.flyrank.ai` (auto-issued via Let's Encrypt once the custom domain is added and verified). The browser checks the certificate is valid, and if it is, the padlock appears.

8. **Netlify serves the site.** Netlify's edge server matches the requested hostname to my site and returns the actual HTML/CSS/JS files — the page loads.

All of this — steps 1 through 6 — typically happens in well under a second, and almost all of it gets cached at various points (resolver, browser) so repeat visits are faster.

## 4. Why this is a "pointer, not a migration"

Nothing about the actual site changes when the subdomain goes live. The files, the host (Netlify), and the deployment process stay exactly the same. All that changes is which *name* the DNS system will hand back an IP for — `israr-ahmed.netlify.app` keeps working the whole time, and `israr.flyrank.ai` starts working alongside it once the CNAME propagates and the certificate is issued.

## 5. My checklist for go-live day

- [ ] Confirm Ops has created the CNAME: `israr` → `israr-ahmed.netlify.app`
- [ ] In Netlify: Site configuration → Domain management → Add a domain → enter `israr.flyrank.ai`
- [ ] Wait for DNS propagation (can take a few minutes to ~48 hours depending on TTL/caching)
- [ ] Confirm Netlify shows the domain as verified and HTTPS certificate as issued
- [ ] Open `https://israr.flyrank.ai` in a private/incognito window and confirm the padlock
- [ ] Update LinkedIn and CV links from the `.netlify.app` URL to the new subdomain (old URL keeps working as a fallback either way)
